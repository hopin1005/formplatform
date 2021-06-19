import { Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import "reflect-metadata";
import {Session} from "../entity/Session";
export function setcookie(request : Request, response : Response, repo){
    
    if(request.cookies.userid === undefined ){
        var cookies = uuidv4();
        const session = new Session();
        session.userSession = cookies;
        session.writeCount = 0;
        repo.save(session);
        response.cookie('userid', cookies);
    }

}