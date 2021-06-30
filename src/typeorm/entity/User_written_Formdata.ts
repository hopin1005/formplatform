import {Entity, PrimaryColumn} from "typeorm";
import {IsInt} from 'class-validator';

@Entity()
export class UserWrittenFormdata{
    @IsInt()
    @PrimaryColumn("int")
    userId: number = 0;

    @IsInt()
    @PrimaryColumn("int")
    formdataId: number = 0;

}