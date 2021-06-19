import { JsonController, Param, Body, Get, Post, Req, Res,QueryParam } from 'routing-controllers';
import "reflect-metadata";
import { createForm } from '../typeorm/func/createform';
import { getallform } from '../typeorm/func/getallform';
import { getoneform } from '../typeorm/func/getoneform';
import {createConnection, getConnection} from "typeorm";
import { Formdata } from '../typeorm/entity/Formdata';
createConnection();

@JsonController()
export class UserController {

  @Get('/getallform')
  getAll(@QueryParam("sort") sort: string){
    var repo = getConnection().getRepository(Formdata);
    return getallform(repo, sort);
  }
  
  @Get('/getoneform/:id')
  getOne(@Param("id") id: number){
    var repo = getConnection().getRepository(Formdata);
    return getoneform(repo, id);
  }

  @Get('/createForm')
  create(@Req() request: Request){
    var repo = getConnection().getRepository(Formdata);
    return createForm(repo);
  }
}
