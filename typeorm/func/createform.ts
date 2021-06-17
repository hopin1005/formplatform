import "reflect-metadata";
import {createConnection} from "typeorm";
import {Formdata} from "../entity/Formdata";

export function createForm(){
    createConnection().then(async connection => {
        
        const formData = new Formdata();
        formData.id = 1;
        formData.info = "問卷描述描述描述";
        formData.name = "問卷名稱";
        formData.link = "<iframe>http://test.com.tw</iframe>";
        formData.endTime = "2021-12-31";
        formData.startTime = "2021-06-17";

        await connection.manager.save(formData);
    
    }).catch(error => console.log(error));
}
