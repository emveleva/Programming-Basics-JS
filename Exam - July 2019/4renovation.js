function solve(input){
    let height = Number(input.shift());
    let width = Number(input.shift());
    let percent = Number(input.shift());
    let currentLine = input.shift();
    let area = height *width * 4;
    area = Math.ceil(area - area * percent / 100);
    let paint = 0;

    while (currentLine != "Tired!"){
        paint = Number(currentLine);
        area -= paint;
        if (area <= 0){
            break;
        }

        currentLine = input.shift();
    }
    if (area == 0){
        console.log("All walls are painted! Great job, Pesho!");
    } else if (area < 0){
        area = Math.abs(area);
        console.log(`All walls are painted and you have ${area} l paint left!`);
    } else {
        console.log(`${area} quadratic m left.`)
        
    }
}

solve([ '2', '3', '25', '6', '7', '8' ]
)