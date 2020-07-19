function solve(input){
    
    let currentLine = input.shift();
    let gamesTotal = 0;
    let win = 0;
    let lost = 0;

    while (currentLine != "End of tournaments"){
        
        let rounds = Number(input.shift());
        gamesTotal += rounds;
        let homeTeam = 0;
        let otherTeam = 0;
        let games = 0;
        for (let i = 0; i < rounds; i++){
        games++;
        let tournamentName = currentLine;
        homeTeam = Number(input.shift());
        otherTeam = Number(input.shift());
       
        if (homeTeam > otherTeam){
            let points = homeTeam - otherTeam;
            win++;
            console.log(`Game ${games} of tournament ${tournamentName}: win with ${points} points. `)
        } else if (homeTeam < otherTeam){
            lost++;
            let points = otherTeam - homeTeam;
            console.log(`Game ${games} of tournament ${tournamentName}: lost with ${points} points.`)
        }
    }
        


        currentLine = input.shift();

    }
    if (currentLine == "End of tournaments"){
        console.log(`${(win/gamesTotal*100).toFixed(2)}% matches win`);
        console.log(`${(lost/gamesTotal*100).toFixed(2)}% matches lost`);
        
    }
}

solve([
    'Ballers',            '3',
    '87',                 '63',
    '56',                 '65',
    '75',                 '64',
    'Sharks',             '4',
    '64',                 '76',
    '65',                 '86',
    '68',                 '99',
    '45',                 '78',
    'End of tournaments', ''
  ]
  
  )