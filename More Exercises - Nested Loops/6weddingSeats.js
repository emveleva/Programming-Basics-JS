function solve(input){
    let lastSector = input.shift();
    let rowsFirstSector = Number(input.shift());
    let oddSeats = Number(input.shift());
    let places = 0;
    let sectorCounter = 0;


    for (let i = 65; i <= lastSector.charCodeAt(0); i++){
        sectorCounter++;
        for (let j = 1; j < rowsFirstSector + sectorCounter; j++){
            if (j % 2 != 0){
                for (let k = 97; k < 97 + oddSeats; k++){
                    let seat = String.fromCharCode(i);
                    let letter = String.fromCharCode(k);
                    console.log(`${seat}${j}${letter}`);
                    places++;
                }
            } else {
                for (let k = 97; k < 97 + oddSeats + 2; k++){
                    let seat = String.fromCharCode(i);
                    let letter = String.fromCharCode(k);
                    console.log(`${seat}${j}${letter}`);
                    places++;
                }
            }
            
        }
    }
    console.log(places);
}

solve(["C", "4", "2"])