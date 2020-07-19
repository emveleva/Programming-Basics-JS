function solve(input) {
    let stadium = Number(input.shift());
    let allFans = Number(input.shift());
    let sector = input.shift();
    let counter = 0;
    let aSector = 0;
    let bSector = 0;
    let vSector = 0;
    let gSector = 0;

    while (counter <= allFans){
        counter++;
        if (sector === "A"){
            aSector++;
        } else if (sector === "B"){
            bSector++;
        } else if (sector === "V"){
            vSector++;
        } else if (sector === "G"){
            gSector++;
        }


        sector = input.shift();
    }
    console.log(`${(aSector/allFans*100).toFixed(2)}%`);
    console.log(`${(bSector/allFans*100).toFixed(2)}%`);
    console.log(`${(vSector/allFans*100).toFixed(2)}%`);
    console.log(`${(gSector/allFans*100).toFixed(2)}%`);
    console.log(`${(allFans/stadium*100).toFixed(2)}%`);
}

solve([
    '1000', '12', 'A',
    'A',    'V',  'V',
    'A',    'G',  'A',
    'A',    'V',  'G',
    'V',    'A'
  ])