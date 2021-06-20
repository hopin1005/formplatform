import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Formdata } from "./Formdata";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 36
    })
    userSession: string;

    @ManyToMany(() => Formdata,{
        cascade: true
    })
    @JoinTable()
    written: Formdata[];
}