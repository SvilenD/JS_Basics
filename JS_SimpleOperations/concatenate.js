function concatenateStrings(input) {
    let firstName = input.shift();
    let lastName = input.shift();
    let age = input.shift();
    let town = input.shift();

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concatenateStrings([`gosho`, 'goshev', `20`, `Similti`]);