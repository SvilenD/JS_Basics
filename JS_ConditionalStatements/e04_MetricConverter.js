function metricConverter(input) {
    let units = Number(input[0]);
    let inputType = input[1];
    let outputType = input[2];

    if (inputType == "mm") {
        if (outputType == "cm") {
            units /= 10;
        }
        else if (outputType == "m") {
            units /= 1000;
        }
    }
    else if (inputType == "cm") {
        if (outputType == "mm") {
            units *= 10;
        }
        else if (outputType == "m") {
            units /= 100;
        }
    }
    else if(inputType == "m"){
        if (outputType == "mm") {
            units *= 1000;
        } 
        else if (outputType == "cm"){
            units *= 100;
        }
    }
    
    console.log(units.toFixed(3));
}