function solve(length, width, wardrobe) {
    let wardrobeCm = Number(wardrobe)*100;
    let lengthCm = Number(length)*100;
    let widthCm = Number(width)*100;
    let area = lengthCm*widthCm;
    let wardrobeArea = wardrobeCm*wardrobeCm;
    let bench = area/10;
    let freeArea = area-wardrobeArea-bench;
    let dancers = freeArea/(40+7000);
    console.log(Math.floor(dancers))
}

solve("50", "25", "2")