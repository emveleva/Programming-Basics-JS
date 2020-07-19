function solve(num){
    let n = Number(num);
    let startNumber = 1;

    
   
    if (n % 2 == 0) {
        startNumber = 2;
    }
        for (let i = startNumber; i <= n; i+=2) {
        console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
    } 
}


solve(6)