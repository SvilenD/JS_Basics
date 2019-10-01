function numsOperations(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let operation = input[2];

    let output = `${firstNum} ${operation} ${secondNum} = `;
    switch (operation) {
        case '+':
        case '-':
        case '*':
            let result = 0;
            switch (operation) {
                case '+':
                    result = firstNum + secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case '*':
                    result = firstNum * secondNum;
                    break;
                default:
                    break;
            }
            output += result;
            if (result % 2 == 0) {
                output += " - even"
            } 
            else {
                output += " - odd";
            }

            console.log(output);
            break;

        case '/': 
        case '%':
            if (secondNum == 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            }
            else if (operation == '/') {
                console.log(output + (firstNum / secondNum).toFixed(2));
            }
            else {
                console.log(output + (firstNum % secondNum));
            }
            break;
    }
}