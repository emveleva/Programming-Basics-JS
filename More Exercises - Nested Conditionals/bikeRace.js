function solve(num1, num2, arg) {
    let juniorBikers = Number(num1);
    let seniorBikers = Number(num2);
    let field = arg;
    let taxJuniors = 0;
    let taxSeniors = 0;

    switch (field) {
        case "trail":
            taxJuniors = 5.50*juniorBikers;
            taxSeniors = 7*seniorBikers;
            
            break;
        case "cross-country":
            taxJuniors = 8*juniorBikers;
            taxSeniors = 9.50*seniorBikers;
            break;
        case "downhill":
            taxJuniors = 12.25*juniorBikers;
            taxSeniors = 13.75*seniorBikers;
            
            break;
        case "road":
            taxJuniors = 20*juniorBikers;
            taxSeniors = 21.50*seniorBikers;
        break;       
    }

    let totalMoney = taxJuniors+taxSeniors;
    

    if (juniorBikers + seniorBikers >= 50 && field == "cross-country") {
        let discount = totalMoney*0.25;
        totalMoney = totalMoney - discount;
    }
    let organization = totalMoney*0.05
    totalMoney = totalMoney - organization;
    console.log(totalMoney.toFixed(2));
}

solve(3, 40, "road")