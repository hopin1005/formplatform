import { JsonController, Param, Body, Get, Post,QueryParam, UseBefore, CookieParam } from 'routing-controllers';
import "reflect-metadata";
import { createForm } from '../typeorm/func/createform';
import { getallform } from '../typeorm/func/getallform';
import { getoneform } from '../typeorm/func/getoneform';
import {createConnection} from "typeorm";
import {authMiddleware} from '../middleware/authMiddleware';
import {Formdata} from '../typeorm/entity/Formdata';
import {cancreateform} from '../typeorm/func/cancreateform';

createConnection();
@JsonController()
@UseBefore(authMiddleware)
export class UserController {

  @Get('/getallform')
  getAll(@QueryParam("sort") sort: string, @CookieParam("userid") userid: string){
    return getallform(sort);
  }
  
  @Get('/getoneform/:id')
  getOne(@Param("id") id: number){
    return getoneform(id);
  }

  @Get('/cancreateform')
  auth(@CookieParam("userid") userid: string){
    return cancreateform(userid);
  }

  @Post('/createform')
  create(@Body() form: Formdata){
    return createForm(form);
  }
}
