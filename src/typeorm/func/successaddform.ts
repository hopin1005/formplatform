import { createFormRepo } from '../EntityRepo/Formdatarepo';
import { createUserWrittenFormdataRepo } from '../../typeorm/EntityRepo/UserWrittenFormdatarepo';
import { createUserRepo } from '../EntityRepo/Userrepo';
import { UserWrittenFormdata } from '../entity/User_written_Formdata';
import { resTrue,resFalse } from '../../other/resTrueFalse';

export function successAddForm(url: string, referer: string, userid: string){

    const createRepo = createUserWrittenFormdataRepo();
    const userRepo = createUserRepo();
    const formRepo = createFormRepo();

    if(referer === undefined){
        return resFalse;
    }
    
    return addUserWrittenRecord();

    async function addUserWrittenRecord(){
        
        var user = await userRepo.findOne({
            select: ["id"],
            where: {
                userSession: userid
            }
        });
        
        var form = await formRepo.findOne({
            select: ["id"],
            where: {
                link: url
            }
        });
    

        if(user && form != undefined){
            
            const classUserWrittenForm = new UserWrittenFormdata();
            classUserWrittenForm.formdataId = form.id;
            classUserWrittenForm.userId = user.id;

            createRepo.save(classUserWrittenForm);
            return resTrue;

        }else{
            return resFalse;
        }

    }
}