function solve(input){
    let currentLine = input.shift();
    let prime = 0;
    let nonPrime = 0;

     while (currentLine !== "stop"){
         let number = Number(currentLine);

        if (number < 0) {
            console.log("Number is negative.");
            currentLine = input.shift();
            continue;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0){
                isPrime = false;
              
                break;
            } 
            }
            if (isPrime){
                prime += number;
            } else {
                nonPrime += number;
            }
            currentLine = input.shift();
        }
        console.log(`Sum of all prime numbers is: ${prime}`);
     console.log(`Sum of all non prime numbers is: ${nonPrime}`);
    
     }
     


solve([ '0', '-9', '0', 'stop' ]
  )