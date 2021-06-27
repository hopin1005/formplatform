import { Formdata } from '../entity/Formdata'
import { getConnection } from 'typeorm'

export function createFormRepo () {
  return getConnection().getRepository(Formdata)
}
