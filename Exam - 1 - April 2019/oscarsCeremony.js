function solve(input){
    let rent = Number(input.shift());
    let statues = rent - rent * 0.30;
    let catering = statues - statues * 0.15;
    let sound = catering/2;

    let total = rent + statues + catering + sound;

    console.log(total.toFixed(2))
}

solve(["5555"])