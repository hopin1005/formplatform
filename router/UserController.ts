import { JsonController, Param, Body, Get, Post, Req, Res } from 'routing-controllers';
import "reflect-metadata";
import { createForm } from '../typeorm/func/createform';
import { Request, Response } from 'express';
import { getallform } from '../typeorm/func/getallform';

@JsonController()
export class UserController {

  @Get('/getallform')
  getAll(@Res() response: Response){
    getallform(response);
  }
  
  @Get('/createForm')
  create(@Req() request: Request){
    createForm();
  }
}
