import { createUserWrittenFormdataRepo } from '../../typeorm/EntityRepo/UserWrittenFormdatarepo';
import { createUserRepo } from '../EntityRepo/UserRepo';

export function getUserWrittenForm(userid: string){
    const createRepo = createUserWrittenFormdataRepo();
    const userRepo = createUserRepo();

    return getWrittenArray();

    async function getWrittenArray(){

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

        var writtenArray: number[] = [];
        userWrittenForm.forEach(element => {
            console.log(element.formdataId);
            writtenArray.push(element.formdataId);
        })
        
        var res:object = {"formWritten" : writtenArray};
        
        return res;

    }
}