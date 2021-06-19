import internal from "stream";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Session{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 36
    })
    userSession: string;

    @Column('int')
    writeCount: number;

}