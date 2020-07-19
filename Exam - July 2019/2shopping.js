function solve(input){
    let budget = Number(input.shift());
    let videocards = Number(input.shift());
    let processors = Number(input.shift());
    let ram = Number(input.shift());

    let videocardsCost = 250*videocards;
    let processorsCost = videocardsCost*0.35;
    let ramCost = videocardsCost*0.10;
    
    let total = videocardsCost + processors * processorsCost + ram * ramCost;

    if(videocards > processors){
        total = total - total * 0.15;
    }

    if (total <= budget){
        let left = budget - total;
        console.log(`You have ${left.toFixed(2)} leva left!`)
    } else {
        let needed = total - budget;
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva more!`)
    }
}

solve(["900", "2", "1", "3"])