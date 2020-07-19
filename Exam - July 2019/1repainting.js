function solve(input){
    let nylon = Number(input.shift());
    let paint = Number(input.shift());
    let solvent = Number(input.shift());
    let hours = Number(input.shift());

    let nylonCost = (nylon+2) * 1.50;
    let paintCost = (paint + paint * 0.10) * 14.50;
    let solventCost = solvent * 5.00;
    let cost = nylonCost + paintCost + solventCost + 0.40;
    let work = hours * (cost*0.30);

    let total = work + cost;
    console.log(`Total expenses: ${total.toFixed(2)} lv.`)
}

solve(["10", "11", "4", "8"])