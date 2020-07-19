function solve(input){
    let soldGames = Number(input.shift());
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= soldGames; i++){
        let game = input.shift();

        if (game == "Hearthstone"){
            hearthstone++;
        } else if (game == "Fornite"){
            fornite++;
        } else if (game == "Overwatch"){
            overwatch++;
        } else {
            others++;
        }
    }
    console.log(`Hearthstone - ${(hearthstone/soldGames*100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite/soldGames*100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch/soldGames*100).toFixed(2)}%`);
    console.log(`Others - ${(others/soldGames*100).toFixed(2)}%`);
}

solve([ '3', 'Hearthstone', 'Diablo 2', 'Star Craft 2' ])