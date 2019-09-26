function usdToBgn(input) {
    let exchangeRate = 1.79549;

    let usd = Number(input[0]);
    let bgn = usd * exchangeRate;

    console.log(bgn.toFixed(2));
}

usdToBgn([20]);