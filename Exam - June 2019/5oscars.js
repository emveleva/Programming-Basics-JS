function solve(input){
    let actor = input.shift();
    let initialPoints = Number(input.shift());
    let judges = Number(input.shift())
    let nominated = false;

    for (let i = 1; i <= judges; i++){
        let judge = input.shift();
        let points = Number(input.shift());
        let name = judge.length;
        points = points * name/2;
        initialPoints += points;
        if (initialPoints > 1250.5){
            nominated = true;
            break;
        }
    }
    if (nominated){
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${initialPoints.toFixed(1)}!`);
    } else {
        let needed = 1250.5-initialPoints;
        console.log(`Sorry, ${actor} you need ${needed.toFixed(1)} more!`)
    }
}

solve([
    'Sandra Bullock', '340',
    '5',              'Robert De Niro',
    '50',             'Julia Roberts',
    '40.5',           'Daniel Day-Lewis',
    '39.4',           'Nicolas Cage',
    '29.9',           'Stoyanka Mutafova',
    '33',             ''
  ]
  
  )