function solve(input){
    let eggs = Number(input.shift());
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxEggs = 0;
    let colorEggs = "";


    for (i = 1; i <= eggs; i++){
        let color = input.shift();
        if (color == "red"){
            red++;
        } else if (color == "orange"){
            orange++;
        } else if (color == "blue"){
            blue++;
        } else {
            green++;
        }
        
    }
    maxEggs = Math.max(red, orange, blue, green);
    if (maxEggs == red){
        colorEggs = "red";
    } else if (maxEggs == orange){
        colorEggs = "orange";
    } else if (maxEggs == blue){
        colorEggs = "blue";
    } else {
        colorEggs = "green";
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${colorEggs}`)
    
        
    
}

solve([
    '7',     'orange',
    'blue',  'green',
    'green', 'blue',
    'red',   'green',
    ''
  ]
  )