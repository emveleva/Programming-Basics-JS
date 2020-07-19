function solve(input){
    let countPens = Number(input.shift());
    let countMarkers = Number(input.shift());
    let literCleaner = Number(input.shift());
    let percentDiscount = Number(input.shift());

    let pensTotal = countPens * 5.80;
    let markersTotal = countMarkers * 7.20;
    let cleanerTotal = literCleaner * 1.20;
    
    let total = pensTotal + markersTotal + cleanerTotal;
    total = total - total * percentDiscount/100;

    console.log(total.toFixed(3))
}

solve(["2", "3", "2.5", "25"])