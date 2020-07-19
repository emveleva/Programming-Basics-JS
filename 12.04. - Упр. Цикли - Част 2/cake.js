function solve(input) {
    let widthCake = Number(input.shift());
    let heightCake = Number(input.shift());
    let cakePieces = input.shift();

    let pieces = 0;

    let cake = widthCake*heightCake;

    while (cake > pieces || cakePieces == "STOP") {
        if (cakePieces == "STOP") {
            break;
        }
        cakePieces = Number(cakePieces)
        pieces = pieces + cakePieces;
        cakePieces = input.shift();
        

    }
    if (cake >= pieces) {
        let piecesLeft = cake - pieces;
        console.log(`${piecesLeft} pieces are left.`)
    } else {
        let piecesNeeded = pieces - cake;
        console.log(`No more cake left! You need ${piecesNeeded} pieces more.`)
    }

}

solve([10, 2, 2, 4, 6, "STOP"])