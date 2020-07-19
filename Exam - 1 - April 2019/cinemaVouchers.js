function solve(input){
    let voucher = Number(input.shift());
    let currentLine = input.shift();
    let sum = 0;
    let movieCount = 0;
    let stuff = 0;

    while (currentLine != "End" || voucher <= 0){
        let symbols = currentLine.length;
        let sum = 0;
        if (symbols > 8){
            sum = currentLine.charCodeAt(0) + currentLine.charCodeAt(1);
            if (sum <= voucher){
                movieCount++;
                voucher = voucher - sum;
            } else {
                break;
            }
            
        } else if (symbols <= 8 ){
            sum = currentLine.charCodeAt(0)
            if (sum <= voucher){
                stuff++;
                voucher = voucher - sum;
            
        } else {
            break;
        }}
        
        currentLine = input.shift();
        
    }
    console.log(movieCount);
    console.log(stuff);
}

solve(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"])