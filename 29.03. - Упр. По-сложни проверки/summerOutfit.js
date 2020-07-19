function solve(num, day) {
    let grad = Number(num);
    let timeOfDay = day;


    
    if (timeOfDay == "Morning") {
        if(10 <= grad && grad <= 18) {
            console.log(`It's ${grad} degrees, get your Sweatshirt and Sneakers.`);
        } else if (18 < grad && grad <= 24) {
            console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
        } else if (grad >= 25) {
            console.log(`It's ${grad} degrees, get your T-Shirt and Sandals.`);
        }
    } else if (timeOfDay == "Afternoon") {
        if(10 <= grad && grad <= 18) {
            console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
        } else if (18 < grad && grad <= 24) {
            console.log(`It's ${grad} degrees, get your T-Shirt and Sandals.`);
        } else if (grad >= 25) {
            console.log(`It's ${grad} degrees, get your Swim Suit and Barefoot.`);
        }
    } else if (timeOfDay == "Evening") {
        console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
    }
}
solve([16, "Morning"]);
solve([22, "Afternoon"]);
solve([28, "Evening"]);