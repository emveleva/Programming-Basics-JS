function solve(input){
    let a1 = Number(input.shift());
    let a2 = Number(input.shift());
    let n = Number(input.shift());

    for (let s1 = a1; s1 <= a2-1; s1++){
        if (s1 % 2 != 0){
        for (let s2 = 1; s2 <= n-1; s2++){
            for (let s3 = 1; s3 <= n/2-1; s3++){
                let s4 = s1;
                if ((s2 + s3 + s4) % 2 != 0){
                console.log(`${String.fromCharCode(s1)}-${s2}${s3}${s4}`);
            }}
        }
        

            
        
    }
}

}

solve(["69", "72", "4"])