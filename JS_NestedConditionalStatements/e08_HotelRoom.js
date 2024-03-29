function hotelRoom(input) {
    let month = input[0];
    let nights = parseInt(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month == "May" || month == "October") {
        studioPrice = 50 * nights;
        apartmentPrice = 65 * nights;

        if (nights > 14) {
            studioPrice *= 0.7;
        }
        else if (nights > 7) {
            studioPrice *= 0.95;
        }
    }
    else if (month == "June" || month == "September") {
        studioPrice = 75.2 * nights;
        apartmentPrice = 68.7 * nights;

        if (nights > 14) {
            studioPrice *= 0.8;
        }
    }
    else if (month == "July" || month == "August") {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights;
    }

    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}