import {
  IsNumber,
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { GENDER } from '../enums/user.gender.enum';
import { ROLE } from '../enums/user.role.enum';

export class createUserDTO {
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

  @IsNotEmpty()
  gender: GENDER;

  @IsString()
  @IsOptional()
  Role: ROLE = ROLE.USER;

  @IsString()
  password: string;
}
