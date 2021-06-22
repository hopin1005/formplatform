import {Entity, PrimaryColumn} from "typeorm";

@Entity()
export class UserWrittenFormdata{

    @PrimaryColumn("int")
    userId: number;

    @PrimaryColumn("int")
    formdataId: number;

}