function solve(input) {
    let firstGame = input.shift();
    let secondGame = input.shift();
    let thirdGame = input.shift();
    let won = 0;
    let lost = 0;
    let draw = 0;

    let firstHome = Number(firstGame.charAt(0));
    let firstOther = Number(firstGame.charAt(2));

    let secondHome = Number(secondGame.charAt(0));
    let secondOther = Number(secondGame.charAt(2));

    let thirdHome = Number(thirdGame.charAt(0));
    let thirdOther = Number(thirdGame.charAt(2));

    if (firstHome > firstOther){
        won++;
    } else if (firstHome < firstOther){
        lost++;
    } else {
        draw++
    }
    if (secondHome > secondOther){
        won++;
    } else if (secondHome < secondOther){
        lost++;
    } else {
        draw++
    }
    if (thirdHome > thirdOther){
        won++;
    } else if (thirdHome < thirdOther){
        lost++;
    } else {
        draw++
    }
    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`)
    console.log(`Drawn games: ${draw}`);
    
}

solve(["4:2", "0:3", "1:0"])