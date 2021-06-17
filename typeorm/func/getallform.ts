import "reflect-metadata";
import {createConnection} from "typeorm";
import {Formdata} from "../entity/Formdata";
import { Response } from 'express';
export function getallform(response: Response){
    createConnection().then(async connection => {
        var forms : object = await connection.manager.find(Formdata);
        
        var resForms : string = JSON.stringify(forms);
        
        return response.json(resForms);
    })
}