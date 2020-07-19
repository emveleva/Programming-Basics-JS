function solve(input){
    let months = Number(input.shift());
    let newBill = Number(input.shift());
    let counter = 0;
    let electricity = 0;
    let water = months * 20;
    let internet = months * 15;
    let others = 0;

    while (counter < months){
        counter++;
        electricity += newBill;
        newBill = Number(input.shift());
    }
    others = (electricity + water + internet) + (electricity + water + internet)*0.20;
    let average = (others + electricity + water + internet)/months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`)
    console.log(`Water: ${water.toFixed(2)} lv`)
    console.log(`Internet: ${internet.toFixed(2)} lv`)
    console.log(`Other: ${others.toFixed(2)} lv`)
    console.log(`Average: ${average.toFixed(2)} lv`)
}

solve([
    '8',      '123.54',
    '231.54', '140.23',
    '100',    '122.4',
    '430',    '178.52',
    '64.2'
  ])