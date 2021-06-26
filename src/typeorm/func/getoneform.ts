import "reflect-metadata";
import { createFormRepo } from '../../typeorm/EntityRepo/Formdatarepo';
export function getoneform(id:number){

    const repo = createFormRepo();
    return repo.find({
        where: {
            id : id
        }
    });
}