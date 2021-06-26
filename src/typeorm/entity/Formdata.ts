import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Formdata {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {
        length: 60
    })
    name: string;

    @Column("varchar",{
        length: 1500
    })
    info: string; 

    @Column("varchar",{
        length: 400
    })
    link: string;

    @Column("date")
    endTime: string;

    @Column("date")
    startTime: string;

}