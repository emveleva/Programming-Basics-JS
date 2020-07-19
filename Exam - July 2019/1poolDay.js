function solve(input){
    let peopleCount = Number(input.shift());
    let taxEntrance = Number(input.shift());
    let taxBed = Number(input.shift());
    let taxUmbrella = Number(input.shift());

    let tax = peopleCount * taxEntrance;
    let umbrellas = Math.ceil(peopleCount/2);
    let beds = Math.ceil(peopleCount*0.75);

    let total = tax + beds * taxBed + umbrellas * taxUmbrella;

    console.log(`${total.toFixed(2)} lv.`)
}

solve(["21", "5.50", "4.40", "6.20"])