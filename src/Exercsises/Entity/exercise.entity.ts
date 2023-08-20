import { IsString, IsNumber } from 'class-validator';

export class ExerciseEntity {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  Sets: number;

  @IsNumber()
  Reps: number;
}
