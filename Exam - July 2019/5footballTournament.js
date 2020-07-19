function solve(input){
    let name = input.shift();
    let games = Number(input.shift());
    let win = 0;
    let draw = 0;
    let lost = 0;
    let points = 0;

    for (let i = 0; i < games; i++){
        let result = input.shift();
        if (result == "W"){
            win++;
            points += 3;
        } else if (result == "D"){
            draw++;
            points += 1;
        } else {
            lost++;
        }

    }
    if (games == 0) {
        console.log(`${name} hasn't played any games during this season.`)
    } else {
        console.log(`${name} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${win}`);
        console.log(`## D: ${draw}`);
        console.log(`## L: ${lost}`);
        console.log(`Win rate: ${(win/games*100).toFixed(2)}%`)

    }
}

solve([ 'Chelsea', '0' ]
  )