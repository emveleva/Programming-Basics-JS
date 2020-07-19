function solve(input){
    let initialEggsCount = Number(input.shift());
    let currentLine = input.shift();
    let soldEggs = 0;

    while (currentLine != "Close"){
        let count = Number(input.shift());
        if (currentLine == "Buy"){
            if (initialEggsCount < count){
                break;
            } else {
            initialEggsCount -= count;
            soldEggs += count;
        } 
    }else {
            initialEggsCount += count;
        }
        
        currentLine = input.shift();
    }
    if (currentLine == "Close"){
        console.log("Store is closed!")
        console.log(`${soldEggs} eggs sold.`);
    } else {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${initialEggsCount}.`)
    }
}

solve([
    '20', 'Fill',
    '30', 'Buy',
    '15', 'Buy',
    '20', 'Close'
  ]
  )