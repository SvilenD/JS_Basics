function timeAdd15(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes >= 60) {
        hours++;
        minutes -= 60;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours > 23) {
        hours -= 24;
    }

    console.log(hours + ':' + minutes);
}