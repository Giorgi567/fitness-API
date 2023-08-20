import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseEntity } from './Entity/exercise.entity';
import { createExercsiseDto } from './DTO/create.exerc.dto';
import { updateExercsiseDto } from './DTO/update.exer.dto';
@Injectable()
export class ExercsisesService {
  constructor(
    @InjectRepository(ExerciseEntity)
    private repo: Repository<ExerciseEntity>,
  ) {}

  async getExercises() {
    try {
      return await this.repo.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getExercise(id: number) {
    try {
      const exercise = await this.repo.findOne({ where: { id: id } });
      if (!exercise) {
        return new NotFoundException(
          `Exercsise with this id ${id} was not found`,
        );
      }
      return exercise;
    } catch (error) {
      console.log(error);
    }
  }

  async createExercsise(Body: createExercsiseDto) {
    try {
      const exercise = this.repo.create(Body);

      return await this.repo.save(exercise);
    } catch (error) {
      console.log(error);
    }
  }

  async updateExercsise(id: number, Body: Partial<updateExercsiseDto>) {
    try {
      const exercsise = await this.repo.findOne({ where: { id: id } });
      if (!exercsise) {
        return new NotFoundException(
          `Exercsise with this id ${id} was not found`,
        );
      }

      Object.assign(exercsise, Body);
      return this.repo.save(exercsise);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteExercsise(id: number) {
    try {
      const exercsise = await this.repo.findOne({ where: { id: id } });

      if (!exercsise) {
        throw new NotFoundException('exercsise not Found');
      }
      this.repo.remove(exercsise);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
