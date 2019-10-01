function onTime(input) {
    let examHour = parseInt(input[0]);
    let examMinutes = parseInt(input[1]);
    let arrivalHour = parseInt(input[2]);
    let arrivalMinutes = parseInt(input[3]);

    let examTimeInMinutes = 60 * examHour + examMinutes;
    let arrivalTimeInMinutes = 60 * arrivalHour + arrivalMinutes;
    let hours = 0;
    let minutes = 0;

    if (examTimeInMinutes > arrivalTimeInMinutes + 30) {
        console.log('Early');

        minutes = examTimeInMinutes - arrivalTimeInMinutes;

        while (minutes > 59) {
            hours++;
            minutes -= 60;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours > 0) {
            console.log(`${hours}:${minutes} hours before the start`)
        }
        else {
            console.log(`${minutes} minutes before the start`)
        }
    }

    else if (examTimeInMinutes >= arrivalTimeInMinutes) {
        console.log('On time');
        console.log(`${examTimeInMinutes - arrivalTimeInMinutes} minutes before the start`)
    }
    else {
        console.log('Late');
        minutes = arrivalTimeInMinutes - examTimeInMinutes;

        while (minutes > 59) {
            hours++;
            minutes -= 60;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours > 0) {
            console.log(`${hours}:${minutes} hours after the start`)
        }
        else {
            console.log(`${minutes} minutes after the start`)
        }
    }
}

onTime([10,
    00,
    10,
    00])