// code your solution here

//const hey = () => {
    //return "hey";
//}
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "L"},
    { year: "2013", result: "L"},
    ];
  
function superbowlWin(record){
const winningGame = record.find(game => game.result === "W")
if(winningGame){
    return winningGame.year;
} else{
    return undefined;
}
}

const winningYear = superbowlWin(record);
console.log(` ${winningYear}`);