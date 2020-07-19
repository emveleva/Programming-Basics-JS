function solve(input){
    let currentLine = input.shift();
    let movies = 0;
    let bestPoints = 0;
    let bestMovie = "";

    

    while (currentLine != "STOP"){
        movies++;
        if (movies >= 7){
            break;
        }
        let points = 0;
        for (let i = 0; i < currentLine.length; i++) {
            let score = currentLine.charCodeAt(i);
            if (score > 96){
                score = score - 2*currentLine.length;
            } else if (score < 91 && score > 64){
                score = score - currentLine.length;
            }
            points += score;

        }
        if (points > bestPoints){
            bestPoints = points;
            bestMovie = currentLine;
        }
        currentLine = input.shift();
    }
    if (movies >= 7){
        console.log(`The limit is reached.`)
    }
    console.log(`The best movie for you is ${bestMovie} with ${bestPoints} ASCII sum.`)

}

solve([ 'The maze', 'School story 2', 'Shrek 2', 'Ice age', 'STOP' ]
  )