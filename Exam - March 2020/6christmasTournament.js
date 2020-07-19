function solve(input){
    let days = Number(input.shift());
    let currentLine = input.shift();
    let totalWin = 0;
    let totalLose = 0;
    
    let totalMoney = 0;

    for (let i = 0; i < days; i++){
            let money = 0;
            let win = 0;
            let lose = 0;
        while (currentLine != "Finish"){
            
            let sport = currentLine;
            let result = input.shift();
            if(result == "win"){
                win++;
                money += 20;
            } else {
                lose++;
            }
            
            

            currentLine = input.shift()
        }
        totalWin += win;
        totalLose += lose;
        if (win > lose){
            money = money + money * 0.10;
        }
        totalMoney += money;
        currentLine = input.shift()
    }
    if (totalWin > totalLose){
        totalMoney = totalMoney + totalMoney*0.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

solve([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ]
  
  )