import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './Entity/users.entity';
import { createUserDTO } from './DTO/create.user.dto';
import { updateUserDTO } from './DTO/update.user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  async getAllUsers() {
    return await this.repo.find();
  }

  async getUser(id: number) {
    try {
      return await this.repo.findOne({ where: { id: id } });
    } catch (error) {
      return new NotFoundException(`User with this id ${id} was not found`);
    }
  }

  async getUserByEmail(email: string) {
    return await this.repo.findOne({ where: { email: email } });
  }
  async createUser(Body: createUserDTO) {
    try {
      console.log(`in service`);

      const user = this.repo.create(Body);
      console.log(user);

      await this.repo.save(user);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(id: number, Body: Partial<updateUserDTO>) {
    try {
      const user = await this.repo.findOne({ where: { id: id } });
      if (!user) {
        return new NotFoundException(
          `User with this id ${user.id} was not found`,
        );
      }

      Object.assign(user, Body);
      this.repo.save(user);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id: number) {
    try {
      const user = await this.repo.findOne({ where: { id: id } });
      if (!user) {
        return new NotFoundException(
          `User with this id ${user.id} was not found`,
        );
      }
      this.repo.remove(user);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
