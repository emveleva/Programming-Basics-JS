function solve(input) {
let userName = input.shift();
let password = input.shift();

let loginAttempt = input.shift();

while (loginAttempt != password) {
    
    loginAttempt = input.shift();        
    }
    console.log(`Welcome ${userName}!`)
    }

solve(["Nakov", "1234", "pass", "1324", "1234"])
