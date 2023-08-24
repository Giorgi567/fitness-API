import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { GENDER } from '../enums/user.gender.enum';
import { ROLE } from '../enums/user.role.enum';

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
  password: string;
}
