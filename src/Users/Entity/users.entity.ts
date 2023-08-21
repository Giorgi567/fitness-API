import { Entity, Column } from 'typeorm';
import { ROLE } from '../enums/user.role.enum';
import { GENDER } from '../enums/user.gender.enum';
import { ExerciseEntity } from 'src/Exercsises/Entity/exercise.entity';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Username: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  gender: GENDER;

  @Column()
  Role: ROLE;

  @Column()
  workouts: ExerciseEntity[];

  @Column()
  password: string;
}
