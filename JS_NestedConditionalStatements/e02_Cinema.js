function cinema(input) {
    let type = input[0];
    let rows = parseInt(input[1]);
    let cols = parseInt(input[2]);

    let price = rows * cols;
    switch (type) {
        case "Premiere":
            price *= 12;
            break;
        case "Normal":
            price *= 7.5;
            break;
        case "Discount":
            price *= 5;
            break;
    }

    console.log(price.toFixed(2));
}