import { JsonController, Param, Body, Get, Post } from 'routing-controllers';
import "reflect-metadata";
var test = require('../../index')
test = test.test

@JsonController()
export class UserController {
  @Get('/getallform')
  getAll(){
    return test();
  }
}