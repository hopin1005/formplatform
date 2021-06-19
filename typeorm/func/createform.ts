import "reflect-metadata";
import {Formdata} from "../entity/Formdata";

export function createForm(repo){
        
        const formData = new Formdata();
        formData.id = 2;
        formData.info = "問卷描述描述描述2";
        formData.name = "問卷名稱2";
        var link: string = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYQv04tfhfw33mcW7WVFoKD1OcWZJC1LOtigZHDwMj75ez3g/viewform?embedded=true" width="640" height="377" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>'
        link = link.replace(/\"/g,"'");
        formData.link = link;
        formData.endTime = "2021-10-31";
        formData.startTime = "2021-06-17";

        return repo.save(formData);

}
