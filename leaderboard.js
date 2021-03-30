let request=require("request");
let cheerio=require("cheerio");

let myurl="https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(myurl,cb);
function cb(err,response,html){
    let chselector=cheerio.load(html);
    let scorecards=chselector(".match-cta-container");
    for(let i=0;i<scorecards.length;i++){
        
    }
}