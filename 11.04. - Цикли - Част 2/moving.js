function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let line = input.shift(); 
    let spaceTotal = width*length*height;
    
    let spaceBoxes = 0;

    while (line != "Done") {
        let boxes = Number(line);
        spaceBoxes += boxes;
        if (spaceTotal <= spaceBoxes) {
            let spaceNeeded = spaceBoxes - spaceTotal;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
            break;
        
        }
        
        line = input.shift();
    }
    if (spaceTotal > spaceBoxes) {
        let spaceLeft = spaceTotal - spaceBoxes;
        console.log(`${spaceLeft} Cubic meters left.`)
    }
   
}

solve([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122', ''
  ])