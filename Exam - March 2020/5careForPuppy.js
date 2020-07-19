function solve(input){
    let kgFood = Number(input.shift());
    let currentLine = input.shift();
    let eatenFood = 0;
    let gramFood = kgFood*1000;

    while (currentLine != "Adopted"){
        let food = Number(currentLine);
        eatenFood += food;

        currentLine = input.shift()
    }
    if (eatenFood <= gramFood){
        let left = gramFood - eatenFood;
        console.log(`Food is enough! Leftovers: ${left} grams.`)
    } else {
        let needed = eatenFood - gramFood;
        console.log(`Food is not enough. You need ${needed} grams more.`)
    }
}

solve([
    '4',   '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted',
    '',    ''
  ])