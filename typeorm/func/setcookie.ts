import { Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import "reflect-metadata";
import {User} from "../entity/User";
export function setcookie(request : Request, response : Response, repo){
    
    if(request.cookies.userid === undefined ){
        var cookies = uuidv4();
        const session = new User();
        session.userSession = cookies;
        repo.save(session);
        response.cookie('userid', cookies, {sameSite: 'none', secure: true});
    }

}