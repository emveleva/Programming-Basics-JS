function solve(input){
    let guests = Number(input.shift());
    let budget = Number(input.shift());

    let easterBreads = Math.ceil(guests / 3);
    let eggs = guests*2;

    let total = easterBreads*4 + eggs * 0.45;

    if (total <= budget){
        let left = budget - total;
        console.log(`Lyubo bought ${easterBreads} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${left.toFixed(2)} lv. left.`)
    } else {
        let needed = total - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${needed.toFixed(2)} lv. more.`)
    }

}

solve([9, 12])