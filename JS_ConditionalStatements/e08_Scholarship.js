function scholarship(input){
    let income = Number(input[0]);
    let gradesAverage = Number(input[1]);
    let minSalary = Number(input[2]);

    let scholarship = gradesAverage * 25;
    let social = minSalary * 0.35;

    if (gradesAverage >= 5.50)
    {
        if (scholarship >= social || income > minSalary)
        {
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarship)} BGN`);
        }
        else console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    }
    else if (gradesAverage >= 4.50 && income <= minSalary)
    {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    }
    else
    {
        console.log(`You cannot get a scholarship!`);
    }
}