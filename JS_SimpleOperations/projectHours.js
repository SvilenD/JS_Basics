function projectHours(input) {
    let name = input.shift();
    let projectsCount = Number(input.shift());
    let hoursRequired = projectsCount * 3;

    console.log(`The architect ${name} will need ${hoursRequired} hours to complete ${projectsCount} project/s.`)
}

projectHours([`gosho`, 5]);