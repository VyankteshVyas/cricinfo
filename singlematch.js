let request=require("request");
let cheerio=require("cheerio");

function showLeaderBoard(myurl){
    request(myurl,cb);
    function cb(err,response,html){
        let chselector=cheerio.load(html);
        let teamBlocks=chselector(".card.content-block.match-scorecard-table");
        let teamnames=chselector(".event .teams .team");
        let winTeamName;
        for(let i=0;i<teamnames.length;i++){
            if(chselector(teamnames[i]).hasClass("team team-gray")==false){
                winTeamName=chselector(teamnames[i]).find(".name-detail a p").text().trim();
            }
        }
        for(let i=0;i<2;i++){
            
            let teamnameselector=chselector(teamBlocks[i]).find(".Collapsible .row.no-gutters.align-items-center .header-title.label");
            let teamname=teamnameselector.text().split("INNINGS")[0].trim();
            if(teamname==winTeamName){
                let batsmantable=chselector(teamBlocks[i]).find(".table.batsman tbody tr");
                let statsArr=[];
                for(let j=0;j<batsmantable.length;j++){
                    let individualbatsmancontent=chselector(batsmantable[j]).find("td");
                    if(individualbatsmancontent.length==8){
                        // console.log("hai");
                        statsArr.push({
                            Name: chselector(individualbatsmancontent[0]).text(),
                            runs: chselector(individualbatsmancontent[2]).text()
        
                        })
                    }
                }
                console.log(winTeamName);
                console.table(statsArr);
                console.log("`````````````````````````````");
            }
        }
    }
}


module.exports={
    slb:showLeaderBoard
}