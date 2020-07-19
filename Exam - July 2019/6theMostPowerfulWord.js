function solve(input){
    let word = input.shift();
    let bestPoints = 0;
    let currentWinner = "";
    
    while (word != "End of words"){
        let length = word.length;
        let points = 0;
        let current = 0;

        for (i = 0; i < length; i++){
            current = word.charCodeAt(i);
            points += current;
        }
            
                if (word[0] == "A" ||
                word[0] == "a" ||
                word[0] == "E" ||
                word[0] == "e" ||
                word[0] == "I" ||
                word[0] == "i" ||
                word[0] == "O" ||
                word[0] == "o" ||
                word[0] == "U" ||
                word[0] == "u" ||
                word[0] == "Y" ||
                word[0] == "y") {
                points = points * length;
                } else {
                    points = Math.floor(points/length);
        }
        if (points >= bestPoints){
            bestPoints = points;
            currentWinner = word;
        }
        word = input.shift();
    }
    console.log(`The most powerful word is ${currentWinner} - ${bestPoints}`)
}

solve([ 'But', 'Some', 'People', 'Say', "It's", 'LOVE', 'End of words' ]

  )