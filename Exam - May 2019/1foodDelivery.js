function solve(input){
    let chicken = Number(input.shift());
    let fish = Number(input.shift());
    let veg = Number(input.shift());


    let total = chicken * 10.35 + fish * 12.40 + veg * 8.15;
    let desert = total*0.20;

    total += desert;
    total += 2.50;
    console.log(`Total: ${total.toFixed(2)}`)
}

solve(["2", "4", "3"])