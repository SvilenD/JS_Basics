function fishTank(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percentage = Number(input.shift()) / 100;

    let litersCapacity = length * width * height / 1000;
    let litersRequired = litersCapacity * (1 - percentage);

    console.log(litersRequired.toFixed(3));
}

fishTank([85, 75, 47, 17]);