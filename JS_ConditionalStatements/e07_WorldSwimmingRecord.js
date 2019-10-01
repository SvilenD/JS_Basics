function record(input){
    let currentRecord = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsForOneMeter = Number(input[2]);

    let delay = parseInt(distanceMeters / 15) * 12.5;

    let time = distanceMeters * secondsForOneMeter + delay;

    if (time < currentRecord ) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No, he failed! He was ${(time - currentRecord).toFixed(2)} seconds slower.`);
    }
}