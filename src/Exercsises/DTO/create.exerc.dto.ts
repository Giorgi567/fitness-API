import { IsString, IsNumber } from 'class-validator';

export class createExercsiseDto {
  @IsString()
  Title: string;

  @IsString()
  Description: string;

  @IsString()
  Form: string;

  @IsNumber()
  Sets: number;

  @IsNumber()
  Reps: number;
}
