import { JsonController, Param, Body, Get, Post, Req, Res } from 'routing-controllers';
import "reflect-metadata";
import { createForm } from '../typeorm/func/createform';
import { Request } from 'express';
import { getallform } from '../typeorm/func/getallform';
import {createConnection, getConnection} from "typeorm";
import { Formdata } from '../typeorm/entity/Formdata';
createConnection();

@JsonController()
export class UserController {

  @Get('/getallform')
  getAll(){
    var repo = getConnection().getRepository(Formdata);
    return getallform(repo);
  }
  
  @Get('/createForm')
  create(@Req() request: Request){
    createForm();
  }
}
