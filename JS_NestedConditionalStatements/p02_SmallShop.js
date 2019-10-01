function shop(input) {
    let productName = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let price = 0;
    switch (productName) {
        case "coffee":
            switch (city) {
                case "Sofia": price = 0.5;
                    break;
                case "Plovdiv": price = 0.4;
                    break;
                case "Varna": price = 0.45;
                    break;
            }
            break;
        case "water":
            switch (city) {
                case "Sofia": price = 0.80;
                    break;
                case "Plovdiv": price = 0.70;
                    break;
                case "Varna": price = 0.70;
                    break;
            }
            break;
        case "beer":
            switch (city) {
                case "Sofia": price = 1.20;
                    break;
                case "Plovdiv": price = 1.15;
                    break;
                case "Varna": price = 1.10;
                    break;
            }
            break;
        case "sweets":
            switch (city) {
                case "Sofia": price = 1.45;
                    break;
                case "Plovdiv": price = 1.30;
                    break;
                case "Varna": price = 1.35;
                    break;
            }
            break;
        case "peanuts":
            switch (city) {
                case "Sofia": price = 1.60;
                    break;
                case "Plovdiv": price = 1.50;
                    break;
                case "Varna": price = 1.55;
                    break;
            }
            break;
    }
    price *= quantity;

    console.log(price);
}