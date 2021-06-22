import {UserWrittenFormdata} from "../entity/User_written_Formdata";
import {getConnection} from "typeorm";

export function createUserWrittenFormdataRepo(){
    return getConnection().getRepository(UserWrittenFormdata);
}
