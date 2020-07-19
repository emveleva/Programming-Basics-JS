function solve(input){
    let destination = input.shift();
    while(destination != "End"){
    let target = destination;
    let budget = Number(input.shift());
    let sum = 0;
    
    
    while (sum <= budget){
    let amount = Number(input.shift());
    sum += amount;
    if (sum >= budget){
        break;
    }

    }
    destination = input.shift();

    console.log(`Going to ${target}!`)
}
}

solve([
    'France',   '2000',  '300',
    '300',      '200',   '400',
    '190',      '258',   '360',
    'Portugal', '1450',  '400',
    '400',      '200',   '300',
    '300',      'Egypt', '1900',
    '1000',     '280',   '300',
    '500',         'Egypt', '1900',
    '1000',     '280',   '300',
    '500',      'End',   
  ]
  )

