import "reflect-metadata";
export function getoneform(repo, id:number){
    return repo.find({
        where: {
            id : id
        }
    });
}