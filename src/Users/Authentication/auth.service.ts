import { Injectable } from '@nestjs/common';
import { createUserDTO } from 'src/Users/DTO/create.user.dto';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UsersService } from 'src/Users/users.service';
import { singInDTO } from '../DTO/signIn.user.dto';
import { NotFoundException } from '@nestjs/common';
const scrypt = promisify(_scrypt);

@Injectable()
export class authService {
  constructor(private userService: UsersService) {}

  async signUp(Body: createUserDTO) {
    try {
      const user = await this.userService.getUserByEmail(Body.email);

      if (user) {
        return new Error(`User with this email ${Body.email} already exists`);
      }

      const password: string = Body.password;
      const salt = randomBytes(20).toString('hex');
      const hash = (await scrypt(password, salt, 32)) as Buffer;

      const results = salt + '/' + hash.toString('hex');
      Body.password = results;

      const finalUser = await this.userService.createUser(Body);

      return finalUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async signIn(Body: singInDTO) {
    const user = await this.userService.getUserByEmail(Body.email);
    console.log(user);
    const { password } = user;
    const [salt, hash] = password.split('/');

    const testHash = (await scrypt(Body.password, salt, 32)) as Buffer;

    console.log(testHash.toString('hex'), hash);

    if (testHash.toString('hex') === hash) {
      return user;
    } else {
      return new NotFoundException('Wrong Emasil or Password');
    }
  }
}
