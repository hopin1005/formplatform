import { createUserWrittenFormdataRepo } from '../../typeorm/EntityRepo/UserWrittenFormdatarepo'
import { createUserRepo } from '../EntityRepo/Userrepo'
import { resTrue, resFalse } from '../../other/resTrueFalse'
export function cancreateform (userid: string) {
  // userid = "a9ef3d81-081e-4939-b711-097bd8eea5f6"
  const createRepo = createUserWrittenFormdataRepo()
  const userRepo = createUserRepo()

  return userWrittenCount()

  async function userWrittenCount () {
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

    if (userWrittenCount >= 3) {
      return resTrue
    } else {
      return resFalse
    }
  }
}
