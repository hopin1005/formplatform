import { createUserWrittenFormdataRepo } from '../../typeorm/EntityRepo/UserWrittenFormdatarepo';
import { createUserRepo } from '../EntityRepo/Userrepo';
export function cancreateform(userid: string){
    //userid = "a9ef3d81-081e-4939-b711-097bd8eea5f6"
    const createRepo = createUserWrittenFormdataRepo();
    const userRepo = createUserRepo();
    var resTrue = {
        "success" : "true" 
    }

    var resFalse = {
        "success" : "false"
    }
    
    return userWrittenCount();


    async function userWrittenCount(){

        //find user id in session
        var user = await userRepo.findOne({
            select: ["id"],
            where: {
                userSession: userid
            }
        });

        let [userWrittenForm, userWrittenCount] = await createRepo.findAndCount({
            where: {
                userId: user?.id
            }
        })

       if (userWrittenCount >= 3){
            return resTrue;
       }else{
           return resFalse;
       }


    }
}