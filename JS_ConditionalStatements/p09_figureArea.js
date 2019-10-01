function figureArea(input) {
    let figureType = input[0];
    let sideA = Number(input[1]);
    let area = 0;
    if (figureType === "square") {
        area = sideA * sideA;
    }
    else if (figureType === "circle") {
        area = sideA * sideA * Math.PI;
    }
    else if (figureType === "triangle" || figureType === "rectangle") {
        let height = Number(input[2]);
        if (figureType === "triangle") {
            area = sideA * height / 2;
        } 
        else {
            area = sideA * height;
        }
    }

    console.log(area.toFixed(3));
}