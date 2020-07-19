function solve(input){
    let men = Number(input.shift());
    let women = Number(input.shift());
    let maxTables = Number(input.shift());
    let tables = 0;
    let print = "";
    let more = false;

    for (let i = 1; i <= men; i++){
        for (let j = 1; j <= women; j++){
            print += `(${i} <-> ${j}) `;
            tables++;
            if (tables == maxTables){
                more = true;
                break;
                
            }
            
        }
        if (more){
            break;
        }
    }
    console.log(print);
}

solve(["2", "2", "3"])