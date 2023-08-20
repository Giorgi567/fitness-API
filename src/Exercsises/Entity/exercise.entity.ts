import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExerciseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title: string;

  @Column()
  Description: string;

  @Column()
  Form: string;

  @Column()
  Sets: number;

  @Column()
  Reps: number;
}
