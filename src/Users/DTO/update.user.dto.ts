import { IsOptional } from 'class-validator';
import { ExerciseEntity } from 'src/Exercsises/Entity/exercise.entity';

export class updateUserDTO {
  @IsOptional()
  Username: string;

  @IsOptional()
  email: string;

  @IsOptional()
  age: number;

  @IsOptional()
  weight: number;

  @IsOptional()
  workouts: ExerciseEntity[];

  @IsOptional()
  password: string;
}
