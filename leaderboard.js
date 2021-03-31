let request=require("request");
let cheerio=require("cheerio");
let singlematch=require("./singlematch");

let myurl="https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(myurl,cb);
function cb(err,response,html){
    let chselector=cheerio.load(html);
    let scorecards=chselector(".col-md-8.col-16");
    for(let i=0;i<scorecards.length;i++){
        let atags=chselector(scorecards[i]).find(".match-cta-container a");
        
        
        
        let fulllink="https://www.espncricinfo.com"+chselector(atags[2]).attr("href");
        // console.log(fulllink);
        singlematch.slb(fulllink);
    }
}