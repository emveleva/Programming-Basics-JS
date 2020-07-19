function solve(input){
    let name = input.shift();
    let seasonCount = Number(input.shift());
    let episodeCount = Number(input.shift());
    let episodeDuration = Number(input.shift());
    let ads = episodeDuration*0.20;

    let total = seasonCount * episodeCount * (episodeDuration + ads) + seasonCount * 10;
    console.log(`Total time needed to watch the ${name} series is ${Math.floor(total)} minutes.`)

}

solve(["Lucifer", "3", "18", "55"])