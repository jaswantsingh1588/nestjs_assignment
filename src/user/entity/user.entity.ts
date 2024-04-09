import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  form_title: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  is_graduate: boolean;

  @Column()
  phone_number: number;

  @Column()
  @Index({ unique: true })
  unique_id: string;
}
