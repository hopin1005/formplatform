import 'reflect-metadata'
import { Formdata } from '../entity/Formdata'
import { createFormRepo } from '../../typeorm/EntityRepo/Formdatarepo'
import { cancreateform } from '../func/cancreateform'
import { resTrue, resFalse, resFormRepeat, resNotWriteForm } from '../../other/resTrueFalse'

// {
//         "name": "formname5",
//               "info": "forminfo5",
//               "link": "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfxyTqWFQ-JYSqupN6hOWLbs9H3uQg3Ohb0ziMpe1whx3jwWw/viewform?embedded=true' width='640' height='377' frameborder='0' marginheight='0' marginwidth='0'>載入中…</iframe>",
//               "endTime": "2021-06-20"
// }
export function createForm (form: Formdata, userid: string) {
  return create()
  async function create () {
    let cancreate: any = {};
    cancreate['success'] = '';
    cancreate = await cancreateform(userid)
    if(cancreate.success === 'false'){
      return resNotWriteForm
    }

    // check if repeate url
    const formRepo = createFormRepo()
    const formcheck = await formRepo.findOne({
      where: {
        link: form.link
      }
    })

    if(formcheck != undefined){
      return resFormRepeat
    }

    if (cancreate.success === 'true' && formcheck === undefined) {
      const repo = createFormRepo()
      repo.save(form)
      return resTrue
    } else {
      return resFalse
    }
  }
}
