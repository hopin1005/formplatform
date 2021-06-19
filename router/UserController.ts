import { JsonController, Param, Body, Get, Post, Req, Res,QueryParam } from 'routing-controllers';
import "reflect-metadata";
import { Response, Request } from 'express';
import { createForm } from '../typeorm/func/createform';
import { getallform } from '../typeorm/func/getallform';
import { getoneform } from '../typeorm/func/getoneform';
import {createConnection, getConnection} from "typeorm";
import { Formdata } from '../typeorm/entity/Formdata';
import { setcookie } from '../typeorm/func/setcookie';
import { Session } from '../typeorm/entity/Session';

createConnection();

@JsonController()
export class UserController {

  @Get('/setcookie')
  home(@Req() request: Request, @Res() response: Response){
    var repo = getConnection().getRepository(Session);
    var res : string = setcookie(request, response, repo);
    return response.send(res);
  }

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
