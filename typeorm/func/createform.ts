import { getTime } from "../../other/func/getTime";
import "reflect-metadata";
import {Formdata} from "../entity/Formdata";

// {
//         name: 'formname4',
//         info: 'forminfo4',
//         link: "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfxyTqWFQ-JYSqupN6hOWLbs9H3uQg3Ohb0ziMpe1whx3jwWw/viewform?embedded=true' width='640' height='377' frameborder='0' marginheight='0' marginwidth='0'>載入中…</iframe>",
//         endTime: '2021-06-20'
// }
export function createForm(repo, form: Formdata){
        
        //待補: 使用者次數驗證
        //return success true
        var time: string = getTime();
        form.startTime = time;
        return repo.save(form);

}
