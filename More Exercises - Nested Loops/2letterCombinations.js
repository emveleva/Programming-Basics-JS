function solve(input){
    let start = input.shift();
    let end = input.shift();
    let skip = input.shift();
    let print = "";
    let printCount = 0;
    let startHumber = start.charCodeAt(0);
    let endNumber = end.charCodeAt(0);
    let skipNumber = skip.charCodeAt(0);

    for (let i = startHumber; i <= endNumber; i++){
        if (i != skipNumber){
        for (let j = startHumber; j <= endNumber; j++){
            if(j != skipNumber){
            for (let k = startHumber; k <= endNumber; k++){
                if (k != skipNumber){
                    let s1 = String.fromCharCode(i);
                    let s2 = String.fromCharCode(j);
                    let s3 = String.fromCharCode(k)
        print += `${s1}${s2}${s3} `;
        printCount++;
        
    }
    
}
}


}
        }
    }
console.log(print+printCount)
}

solve([ 'a', 'c', 'z', '' ])