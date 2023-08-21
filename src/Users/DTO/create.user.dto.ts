import { IsNumber, IsString, IsEmail } from 'class-validator';
import { GENDER } from '../enums/user.gender.enum';
import { ROLE } from '../enums/user.role.enum';
import { ExerciseEntity } from 'src/Exercsises/Entity/exercise.entity';

export class createUserDTO {
  @IsNumber()
  id: number;

  @IsString()
  Username: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  height: number;

  gender: GENDER;

  Role: ROLE;

  workouts: ExerciseEntity[];

  @IsString()
  password: string;
}
