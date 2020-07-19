function solve(input){
    let eggsOne = Number(input.shift());
    let eggsTwo = Number(input.shift());
    let currentLine = input.shift();

    while (currentLine != "End of battle"){
        if (currentLine == "one"){
            eggsTwo--;
        } else {
            eggsOne--;
        }
        if (eggsOne == 0 || eggsTwo == 0){
            break;
        }
        currentLine = input.shift();
    }
    if (eggsOne <= 0){
        console.log(`Player one is out of eggs. Player two has ${eggsTwo} eggs left.`);
    } else if (eggsTwo <= 0){
        console.log(`Player two is out of eggs. Player one has ${eggsOne} eggs left.`);
    } else {
        console.log(`Player one has ${eggsOne} eggs left.`);
        console.log(`Player two has ${eggsTwo} eggs left.`);
    }
}

solve([
    '6',   '3',   'one',
    'two', 'two', 'one',
    'one', '',    '',
    '',    ''
  ]
  )