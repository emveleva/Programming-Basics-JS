function solve(input){
    let kgFlourPrice = Number(input.shift());
    let kgFlour = Number(input.shift());
    let kgSugar = Number(input.shift());
    let eggBoxes = Number(input.shift());
    let mayaCount = Number(input.shift());

    let flour = kgFlour * kgFlourPrice;
    let kgSugarPrice = kgFlourPrice - kgFlourPrice*0.25;
    let sugar = kgSugarPrice * kgSugar;
    let eggBoxPrice = kgFlourPrice + kgFlourPrice*0.10;
    let eggs = eggBoxPrice * eggBoxes;
    let mayaPrice = kgSugarPrice - kgSugarPrice * 0.80;
    let maya = mayaPrice * mayaCount;

    let total = flour + sugar + eggs + maya;

    console.log(total.toFixed(2))
}

solve([50, 10, 3.5, 6, 1])