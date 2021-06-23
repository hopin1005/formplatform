import { getTime } from "../../other/func/getTime";
import "reflect-metadata";
import { Formdata } from "../entity/Formdata";
import { createFormRepo } from '../../typeorm/EntityRepo/Formdatarepo';
import { cancreateform } from '../func/cancreateform';



// {
//         "name": "formname5",
//               "info": "forminfo5",
//               "link": "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfxyTqWFQ-JYSqupN6hOWLbs9H3uQg3Ohb0ziMpe1whx3jwWw/viewform?embedded=true' width='640' height='377' frameborder='0' marginheight='0' marginwidth='0'>載入中…</iframe>",
//               "endTime": "2021-06-20"
// }
export function createForm(form: Formdata, userid: string){
        
        //待補: 使用者次數驗證
        //重複問卷
        var resTrue = {
                "success" : "true" 
        }
        
        var resFalse = {
                "success" : "false"
        }
        
        return create();
        async function create(){

                var cancreate: object = await cancreateform(userid)
                
                //check if repeate url
                const formRepo = createFormRepo();
                var formcheck = await formRepo.findOne({
                        where: {
                                link : form.link
                        }
                })
                
                if(cancreate.success == 'true' && formcheck == undefined){
                        const repo = createFormRepo();
                        var time: string = getTime();
                        form.startTime = time;
                        repo.save(form);
                        return resTrue;
                }else{
                        return resFalse;
                }       
                
        }        

}
