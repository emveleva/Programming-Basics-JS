function solve(input){
    let name = input.shift();
    let episode = Number(input.shift());
    let lunchBreak = Number(input.shift());

    let lunch = lunchBreak/8;
    let relax = lunchBreak/4;

    let total = lunch + relax + episode;

    if (lunchBreak >= total){
        let left = lunchBreak - total;
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(left)} minutes free time.`);
    } else if (total > lunchBreak){
        let notEnough = total - lunchBreak;
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(notEnough)} more minutes.`);
    }

}

solve(["Game of Thrones", "60", "96"])