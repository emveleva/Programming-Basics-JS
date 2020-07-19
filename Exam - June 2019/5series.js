function solve(input){
    let budget = Number(input.shift());
    let total = budget;
    let seriesCount = Number(input.shift());
    let notEnough = false;
    let cost = 0;

    for (let i = 0; i < seriesCount; i++){
        let series = input.shift();
        cost = Number(input.shift());
        if (series == "Thrones"){
            cost = cost - cost * 0.50;
        } else if (series == "Lucifer"){
            cost = cost - cost * 0.40;
        } else if (series == "Protector"){
            cost = cost - cost * 0.30;
        } else if (series == "TotalDrama"){
            cost = cost - cost * 0.20;
        } else if (series == "Area"){
            cost = cost - cost * 0.10;
        }
        // if (budget >= cost){
        budget -= cost;
        // } else {
        //     notEnough = true;
        //     break;
        // }
    } 
    if (budget < 0){
        let needed = Math.abs(budget);
        console.log(`You need ${needed.toFixed(2)} lv. more to buy the series!`)
    } else {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`)
    }
}

solve([ '5', '2', 'Area', '12', 'Legendarie', '48' ]
  

  
)