function petShop(input) {
    let dogsCount = Number(input.shift());
    let animalsCount = Number(input.shift());

    let sum = (dogsCount * 2.5) + (animalsCount) * 4; 
    console.log(`${sum.toFixed(2)} lv.`);
}

zooShop([5, 4]);