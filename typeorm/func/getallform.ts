import "reflect-metadata";

//還有要過濾過期的問卷
// select * from players
// where 
//     us_reg_date between '2000-07-05'
// and
//     DATE_ADD('2011-11-10',INTERVAL 1 DAY)
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
