function solve(input){
    let breads = Number(input.shift());
    let maxFlour = 0;
    let maxSugar = 0;
    let flour = 0;
    let sugar = 0;
    let totalSugar = 0;
    let totalFlour = 0;

    for (let i = 1; i <= breads; i++){
        sugar = Number(input.shift());
        flour = Number(input.shift());
        totalFlour += flour;
        totalSugar += sugar;

        if (flour > maxFlour){
            maxFlour = flour;
        }
        if (sugar > maxSugar){
            maxSugar = sugar;
        }
        


    }
    totalFlour = Math.ceil(totalFlour/750);
    totalSugar = Math.ceil(totalSugar/950);
    console.log(`Sugar: ${totalSugar}`);
    console.log(`Flour: ${totalFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)
}

solve([
    '4',   '500', '350',
    '560', '430', '600',
    '345', '578', '543',
    ''
  ])