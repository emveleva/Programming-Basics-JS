function solve(input){
    let tournaments = Number(input.shift());
    let startPoints = Number(input.shift());
    let stageInTournament = input.shift();
    let totalPoints = 0;

    let count = input.length;
    let counter = 0;
    let won = 0;

    while (counter <= count){
        counter++;
        if (stageInTournament == "W"){
            totalPoints += 2000;
            won++;
        } else if (stageInTournament == "F"){
            totalPoints += 1200;
        } else if (stageInTournament == "SF") {
            totalPoints += 720;
        }

        stageInTournament = input.shift()

    }
    console.log(`Final points: ${startPoints+totalPoints}`);
    let average = totalPoints/tournaments;
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${(won/tournaments*100).toFixed(2)}%`);

}

solve([
    '7', '1200', 'SF',
    'F', 'W',    'F',
    'W', 'SF',   'W'
  ])