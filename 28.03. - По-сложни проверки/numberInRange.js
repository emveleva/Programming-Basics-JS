// function solve([num]) {
//     let number = Number(num);

//     if (number > -100 && number < 100 && number != 0) {
//         console.log('Yes')
//     } else {
//         console.log('No')
//     }

// }

// solve(0)
// solve(-100)

function solve(num) {
    let number = Number(num);

    if (number <= 100 && number != 0) {
        if (number >= -100 ) {
            console.log("Yes")
        } else {
            console.log("No")
    } 
} else {
        console.log("No")
    }
}

solve(-25)