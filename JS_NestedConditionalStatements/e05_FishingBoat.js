function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = parseInt(input[2]);

    let boatPrice = 0;
    switch (season) {
        case "Winter":
            boatPrice = 2600;
            break;
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
    }
    if (fisherman <= 6) {
        boatPrice *= 0.9;
    }
    else if (fisherman <= 11) {
        boatPrice *= 0.85;
    }
    else {
        boatPrice *= 0.75;
    }

    if (season != "Autumn" && fisherman % 2 == 0) {
        boatPrice *= 0.95;
    }
    if (boatPrice <= budget) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
    }
}