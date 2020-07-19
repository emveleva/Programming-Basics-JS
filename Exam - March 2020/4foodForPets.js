function solve(input){
    let days = Number(input.shift());
    let totalFood = Number(input.shift());
    let dogTotal = 0;
    let catTotal = 0;
    let cookies = 0;

    for (let i = 1; i <= days; i++){
        let dog = Number(input.shift());
        let cat = Number(input.shift());
        dogTotal += dog;
        catTotal += cat;
        if (i % 3 == 0){
            cookies = cookies + (dog + cat)*0.10;
        }
    }
    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
    let foodEaten = dogTotal + catTotal;
    let percentFoodEaten = foodEaten/totalFood*100;
    console.log(`${percentFoodEaten.toFixed(2)}% of the food has been eaten.`);
    let eatenDog = dogTotal/foodEaten*100;
    console.log(`${eatenDog.toFixed(2)}% eaten from the dog.`);
    let eatenCat = catTotal/foodEaten*100;
    console.log(`${eatenCat.toFixed(2)}% eaten from the cat.`);
}

solve([
    '3',   '1000',
    '300', '20',
    '100', '30',
    '110', '40'
  ])