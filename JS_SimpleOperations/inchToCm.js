function inchToCm(input) {
    let inches = Number(input.shift());

    let result = inches *2.54;
    console.log(result.toFixed(2));
}

inchToCm([10]);