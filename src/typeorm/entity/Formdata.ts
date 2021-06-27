import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Length, IsString } from 'class-validator'
import { getTime } from '../../other/func/getTime'

@Entity()
export class Formdata {
    @PrimaryGeneratedColumn()
    id: number;

    @Length(0, 60)
    @Column('varchar', {
      length: 60
    })
    name: string;

    @Length(0, 1500)
    @Column('varchar', {
      length: 1500
    })
    info: string;

    @Length(0, 400)
    @Column('varchar', {
      length: 400
    })
    link: string;

    @IsString()
    @Column('date')
    endTime: string;

    @IsString()
    @Column('date')
    startTime: string = getTime();
}
