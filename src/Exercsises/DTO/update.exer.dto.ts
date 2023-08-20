import { IsString, IsNumber, IsOptional } from 'class-validator';

export class updateExercsiseDto {
  @IsOptional()
  @IsString()
  Title: string;

  @IsOptional()
  @IsString()
  Description: string;

  @IsOptional()
  @IsString()
  Form: string;

  @IsOptional()
  @IsNumber()
  Sets: number;

  @IsOptional()
  @IsNumber()
  Reps: number;
}
