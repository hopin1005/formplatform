import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsInt, Length } from 'class-validator'

@Entity()
export class User {
    @IsInt()
    @PrimaryGeneratedColumn()
    id: number;

    @Length(0, 36)
    @Column('varchar', {
      length: 36
    })
    userSession: string;
}
