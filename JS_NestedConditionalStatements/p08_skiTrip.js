function skiTrip(input) {
    let days = parseInt(input[0]) - 1;
    let type = input[1];
    let rating = input[2];

    let price = 0;
    if (type == "room for one person") {
        price = 18 * days;
    }
    else if (type == "apartment") {
        price = 25 * days;
        if (days < 10) {
            price *= 0.7;
        }
        else if (days < 15) {
            price *= 0.65;
        }
        else {
            price *= 0.5;
        }
    }
    else if (type == "president apartment") {
        price = 35 * days;
        if (days < 10) {
            price *= 0.9;
        }
        else if (days < 15) {
            price *= 0.85;
        }
        else {
            price *= 0.8;
        }
    }

    if (rating == "positive") {
        price *= 1.25;
    }
    else {
        price *= 0.9;
    }

    console.log(price.toFixed(2));
}