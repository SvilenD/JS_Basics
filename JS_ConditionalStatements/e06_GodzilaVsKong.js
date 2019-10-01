function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let mutesCount = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let expenses = budget * 0.1; /* decoration */
    
    if (mutesCount > 150) {
        clothesPrice *= 0.9;
    }

    expenses += mutesCount * clothesPrice;

    if (expenses <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - expenses).toFixed(2)} leva left.`);
    }
    else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expenses - budget).toFixed(2)} leva more.`);
    }
}