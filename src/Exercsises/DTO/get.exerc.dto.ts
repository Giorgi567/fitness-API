import { Expose } from 'class-transformer';

export class getExercsiseDto {
  @Expose()
  Title: string;

  @Expose()
  Description: string;

  @Expose()
  Form: string;

  @Expose()
  Sets: number;

  @Expose()
  Reps: number;
}
