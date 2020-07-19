function solve(input){
    let n = Number(input.shift())
    let stars = 1;
    if(n % 2 === 0){
        stars++;
    }

    let roofLength = Math.ceil(n/2);

    
    for (i = 0; i < roofLength; i++){

        let padding = (n-stars)/2;
        let line = "-".repeat(padding)
        line += "*".repeat(stars);
        line += "-".repeat(padding);

        console.log(line);
        stars+=2;
    }
    for (i = 0; i < (n-1)/2; i++){
        let line = "|" + "*".repeat(n-2)+"|";
        console.log(line);


    }
}


solve([ '8' ])

