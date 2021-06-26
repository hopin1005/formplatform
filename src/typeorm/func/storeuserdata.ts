import "reflect-metadata";
import { User } from "../entity/User";
import {createUserRepo} from "../EntityRepo/Userrepo";


export function stroreUserData(userid: string){
    const repo = createUserRepo();
    const session: User = new User();
    session.userSession = userid;
    
    repo.save(session);
}