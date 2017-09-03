window.onload = function () {
    var result,
        number,
        op,
        firstNum = 0,
        secondNum = 0,
        operator,
        bool = false;
    //Result screen
    result = document.getElementById("result");
    //Numbers
    number = document.getElementsByClassName("num");
    //Operators
    op = document.getElementsByClassName("operator"); 
    //All clear function
    document.getElementById("clear").addEventListener("click", function clear() {
        result.innerHTML = "0";
        firstNum = 0;
        secondNum = 0;
    });
    //Write numbers to the screen
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener("click", function () {
            if (result.innerHTML == "0" || bool == true) {
                result.innerHTML = this.textContent;
                bool = false;
            }
            else if (result.innerHTML != "0" && result.innerHTML.length < 15) {
                result.innerHTML += this.textContent;
            }
        });
    };
    //Select operator
    for (var i = 0; i < op.length; i++) {
        op[i].addEventListener("click", function () {
            if (firstNum == 0) {
                firstNum = eval(result.innerHTML);
            }
            else {
                equal();
                firstNum = eval(result.innerHTML);
            }
            bool = true;
            switch (this.textContent) {
                case "/": operator = "/";
                    break;
                case "x": operator = "x";
                    break;
                case "-": operator = "-";
                    break;
                case "+": operator = "+";
                    break;
            }
        });
    };
    //Max length function
    function lengthCheck(num) {
        if (num.toString().length > 15) result.innerHTML = num.toPrecision(11);
        else result.innerHTML = num;
    };
    //Function of equals button
    function equal() {
        secondNum = eval(result.innerHTML);
        if (operator == "/") {
            output = firstNum / secondNum;
            lengthCheck(output);
        }
        if (operator == "x") {
            output = firstNum * secondNum;
            lengthCheck(output);
        }
        if (operator == "-") {
            output = firstNum - secondNum;
            lengthCheck(output);
        }
        if (operator == "+") {
            output = firstNum + secondNum;
            lengthCheck(output);
        }
        firstNum = 0;
        secondNum = 0;
    };
    //Add click event for equal button
    document.getElementById("equals").addEventListener("click", equal);
    //Add only one dot
    document.getElementById("dot").addEventListener("click", function () {
        if (result.innerHTML.indexOf(".") == -1) result.innerHTML += ".";
    });
    //Square root function
    document.getElementById("sqrt").addEventListener("click", function () {
        output = Math.sqrt(eval(result.innerHTML));
        lengthCheck(output);
    });
    //Plus-Minus function
    document.getElementById("plusminus").addEventListener("click", function () {
        if (result.innerHTML.indexOf("-") == -1) result.innerHTML = "-" + result.innerHTML;
        else result.innerHTML = Math.abs(eval(result.innerHTML));
    });
};

