import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./typeorm/src/entity/User";

function test(){
        
    createConnection().then(async connection => {
    
        console.log("Inserting a new user into the database...");
        const user = new User();
        user.firstName = "Timber";
        
        await connection.manager.save(user);
        console.log("Saved a new user with id: " + user.id);
    
        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);
    
        console.log("Here you can setup and run express/koa/any other framework.");
        return("db create");
    
    }).catch(error => console.log(error));
}
exports.test = test;