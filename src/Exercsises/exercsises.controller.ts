import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ExercsisesService } from './exercsises.service';
import { updateExercsiseDto } from './DTO/update.exer.dto';
import { createExercsiseDto } from './DTO/create.exerc.dto';

@Controller('/exercsise')
@Injectable()
export class ExercsisesController {
  constructor(private exerciseService: ExercsisesService) {}

  @Get()
  async getExercsises() {
    return this.exerciseService.getExercises();
  }

  @Get('/:id')
  async getExercsise(@Param('id') id: string) {
    return this.exerciseService.getExercise(+id);
  }

  @Post()
  async createExercsise(@Body() Body: createExercsiseDto) {
    return this.exerciseService.createExercsise(Body);
  }

  @Put('/:id')
  async updateExercsise(
    @Param('id') id: string,
    @Body() Body: updateExercsiseDto,
  ) {
    return this.exerciseService.updateExercsise(+id, Body);
  }

  @Delete('/:id')
  async deleteExercsise(@Param('id') id: string) {
    return this.exerciseService.deleteExercsise(+id);
  }
}
