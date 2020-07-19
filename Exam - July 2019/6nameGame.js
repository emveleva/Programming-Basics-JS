function solve(input){
    let name = input.shift();
    let bestPoints = 0;
    let currentWinner = "";

    while (name != "Stop"){
        let points = 0;
        for (i = 0; i < name.length; i++){
            let number = Number(input.shift());
            if (number == name.charCodeAt(i)){
                points += 10;
            } else {
                points += 2;
            }
        }
        if (points >= bestPoints){
            bestPoints = points;
            currentWinner = name;
        }
        name = input.shift();
    }
    console.log(`The winner is ${currentWinner} with ${bestPoints} points!`);
}

solve([
    'Pesho', '124', '34',
    '111',   '97',  '99',
    'Gosho', '98',  '124',
    '88',    '76',  '18',
    'Stop'
  ]
  )