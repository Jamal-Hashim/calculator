const display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculator() {
    try {
        // display.value=eval(display.value);
        let expression = display.value;
        if (expression.includes("%")) {
            expression = handlePercentage(expression);
        }
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }

    function handlePercentage(expr) {
        return expr.replace(/(\d+)([+\-*/])(\d+)%/g, (match, num1, operator, num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            switch (operator) {
                case "+":
                    return `${num1}+(${num1}*${num2}/100)`;
                    break;
                case "-":
                    return `${num1}-(${num1}*${num2}/100)`;
                    break;
                case "*":
                    return `${num1}*(${num2}/100)`;
                    break;
                case "/":
                    console.log(match);

                    return `${num1}/${num2}/100)`;
                    break;
                default:
                    return match;
                    break;
            }
        });
    }
}
