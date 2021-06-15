import { JsonController, Param, Body, Get, Post } from 'routing-controllers';
import "reflect-metadata";


@JsonController()
export class UserController {
  @Get('/getallform')
  getAllForm() {
    return 'This action returns all users';
  }

  

  
  
}