import { Module } from '@nestjs/common';
import { ExercsisesController } from './exercsises.controller';
import { ExercsisesService } from './exercsises.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './Entity/exercise.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ExerciseEntity])],
  controllers: [ExercsisesController],
  providers: [ExercsisesService],
})
export class ExercsisesModule {}
