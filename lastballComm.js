let request=require("request");
let cheerio=require("cheerio");

let myurl="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary"
request(myurl,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        let chselector=cheerio.load(html);
        let element=chselector(".d-flex.match-comment-padder.align-items-center p");
        console.log("element length=",element.length);
        console.log("last ball commentary is -> ",chselector(element[0]).text());
    }
}
