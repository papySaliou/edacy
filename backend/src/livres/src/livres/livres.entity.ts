import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Livres {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  author: string

  @Column()
  genre: string
}