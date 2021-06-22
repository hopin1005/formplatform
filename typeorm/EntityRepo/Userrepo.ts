import {User} from "../entity/User";
import {getConnection} from "typeorm";

export function createUserRepo(){
    return getConnection().getRepository(User);
}
