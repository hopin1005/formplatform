import { createUserWrittenFormdataRepo } from '../../typeorm/EntityRepo/UserWrittenFormdatarepo'
import { createUserRepo } from '../EntityRepo/Userrepo'

export function getUserWrittenForm (userid: string) {
  const createRepo = createUserWrittenFormdataRepo()
  const userRepo = createUserRepo()

  return getWrittenArray()

  async function getWrittenArray () {
    // find user id in session
    const user = await userRepo.findOne({
      select: ['id'],
      where: {
        userSession: userid
      }
    })

    const [userWrittenForm, userWrittenCount] = await createRepo.findAndCount({
      where: {
        userId: user?.id
      }
    })

    const writtenArray: number[] = []
    userWrittenForm.forEach(element => {
      console.log(element.formdataId)
      writtenArray.push(element.formdataId)
    })

    const res:object = { formWritten: writtenArray }

    return res
  }
}
