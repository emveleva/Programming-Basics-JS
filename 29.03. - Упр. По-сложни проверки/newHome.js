function solve(flower, number, number2) {
    let count = Number(number);
    let budget = Number(number2);
    let total = 0;

    if (flower == "Roses") {
        total = count * 5;
        if (count > 80) {
            total = total - total * 0.10;
        }
            
    } else if (flower == "Dahlias") {
        total = count * 3.80;
        if (count > 90) {
            total = total - total * 0.15;
        }       
    }  else if (flower == "Tulips") {
        total = count * 2.80;
        if (count > 80) {
            total = total - total * 0.15;      
        } 
    }   else if (flower == "Narcissus") {
        total = count * 3;
        if (count <120) {
            total = total + total * 0.15;
        }   
    } else if (flower == "Gladiolus") {
            total = count * 2.50;
            if (count <80) {
                total = total + total * 0.20;
            }
    } if (total <= budget) {
    let moneyLeft = budget - total;
    console.log(`Hey, you have a great garden with ${count} ${flower} and ${moneyLeft.toFixed(2)} leva left.`)
} else if (total > budget){
    let moneyNeeded = total -budget;
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
}
    
} 
 





solve("Roses", 55, 250);
solve("Tulips", 88, 260);
solve("Narcissus", 119, 360);
solve("Gladiolus", 64, 160);
