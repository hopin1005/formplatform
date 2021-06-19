import "reflect-metadata";


export function getallform(Repo, sort: string){
    if(sort === 'normal'){
        return Repo.find();
    }
    if(sort === 'endTime'){
        return Repo.find({
            order: {
                endTime: "ASC"
            }
        });
    }
}
