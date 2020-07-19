function solve(num1, num2) {
 let startingPopulation = Number(num1);
 let years = Number(num2);
 let currentPopulation = startingPopulation;
 

 for (let i = 1; i <= years; i++){
    currentPopulation = currentPopulation + Math.floor(currentPopulation / 10) * 2;
    if (i % 5 == 0){
        currentPopulation = currentPopulation - Math.floor(currentPopulation / 50) * 5;
    }
    currentPopulation = currentPopulation - Math.floor(currentPopulation / 20) * 2;


 }
 console.log(`Beehive population: ${Math.round(currentPopulation)}`)
}

solve("1000", "23")