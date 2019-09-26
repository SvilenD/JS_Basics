function tailoringWorkshop(input) {
    let tablesCount = Number(input[0]);
    let tableLength = Number(input[1]);
    let tableWidth = Number(input[2]);
    let exchangeRate = 1.85;

    let coversArea = tablesCount * (tableLength + 2 * 0.3) * (tableWidth + 2 * 0.3);
    let squaresArea = tablesCount * (tableLength / 2) * (tableLength / 2);

    let usdPrice = coversArea * 7 + squaresArea * 9;
    let bgnPrice = usdPrice * exchangeRate;

    console.log(usdPrice.toFixed(2) + " USD");
    console.log(bgnPrice.toFixed(2) + " BGN");
}

tailoringWorkshop([5, 1, 0.5])