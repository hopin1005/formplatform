import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { stroreUserData } from '../typeorm/func/storeuserdata'
export function authMiddleware (req: Request, res: Response, next: Function) {
  const cookieParser = require('cookie-parser')
  const cookies = uuidv4()
  cookieParser()
  if (req.cookies.userid === undefined) {
    stroreUserData(cookies)
    res.cookie('userid', cookies, { sameSite: 'none', secure: true })
  }
  next()
}
