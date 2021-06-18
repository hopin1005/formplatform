import {Formdata} from "../entity/Formdata";
import {getConnection} from "typeorm";

export const formRepo = getConnection().getRepository(Formdata).find();