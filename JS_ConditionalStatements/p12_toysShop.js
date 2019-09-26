function toysShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
    
    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2;
    
    let income = puzzlesCount * puzzlePrice 
    + dollsCount * dollPrice
    + bearsCount * bearPrice
    + minionsCount * minionPrice
    +   trucksCount * truckPrice;
    
    if (totalCount >= 50) {
        income *= 0.75;
    }
    
    income *=0.9;
    
    let balance = income - excursionPrice;
    
    if (balance >= 0) {
        console.log(`Yes! ${balance.toFixed(2)} lv left.`);
    } 
    else {
        console.log(`Not enough money! ${Math.abs(balance).toFixed(2)} lv needed.`);
    }
}