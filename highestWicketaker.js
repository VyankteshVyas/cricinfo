let request= require("request");
let cheerio= require("cheerio");

let myurl="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(myurl,cb);
function cb(err,reqponse,html){
    if(err){
        console.log(err);
    }else{
        let hwtname="";
        let hw=-1;
        let chselector=cheerio.load(html);
        let bowlertables=chselector(".table.bowler");
        for(let i=0;i<bowlertables.length;i++){
            let bowlersdata=chselector(bowlertables[i]).find("tr");
            for(let j=1;j<bowlersdata.length;j++){
                let bowlercol=chselector(bowlersdata[j]).find("td");
                let bowlername=chselector(bowlercol[0]).text();
                let bowlerwic=chselector(bowlercol[4]).text();
                if(bowlerwic>hw){
                    hw=bowlerwic;
                    hwtname=bowlername;
                }
                console.log(bowlername,"    ",bowlerwic);
            }
            console.log("````````````````````````````````");
        }
        console.log("highest wicket taker is ",hwtname," with ",hw," wickets");
        
    }
}

