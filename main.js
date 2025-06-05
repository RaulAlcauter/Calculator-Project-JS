let num = document.querySelector(".number-text");
let histNum = document.querySelector(".history");
let num1 = 0;
let num2 = 0;
let ended = true;
let oper = "";
let commaExists = false;

const elems = document.querySelectorAll(".button");
elems.forEach((domElem) => {
    domElem.addEventListener("click", keyPressed);
});

function keyPressed(ev){
    let elem = ev.target;
    switch(elem.textContent){
        case "C":
            num.textContent = "";
            num1 = 0;
            num2 = 0;
            op = "";
            histNum.textContent = "";
            ended = true;
            commaExists = false;
            break;
        case "+":
            if(oper == ""){
                if(num.textContent.split(".").length > 1){
                    num1 = parseFloat(num.textContent);
                }else{
                    num1 = parseInt(num.textContent);
                }
                oper = "+";
                num.textContent += "+";
                ended = false;
                commaExists = false;
            }
            break;
        case "-":
            if(oper == ""){
                if(num.textContent.split(".").length > 1){
                    num1 = parseFloat(num.textContent);
                }else{
                    num1 = parseInt(num.textContent);
                }
                oper = "-";
                num.textContent += "-";
                ended = false;
                commaExists = false;
            }
            break;
        case "*":
            if(oper == ""){
                if(num.textContent.split(".").length > 1){
                    num1 = parseFloat(num.textContent);
                }else{
                    num1 = parseInt(num.textContent);
                }
                oper = "*";
                num.textContent += "*";
                ended = false;
                commaExists = false;
            }
            break;
        case "/":
            if(oper == ""){
                if(num.textContent.split(".").length > 1){
                    num1 = parseFloat(num.textContent);
                }else{
                    num1 = parseInt(num.textContent);
                }
                oper = "/";
                num.textContent += "/";
                ended = false;
                commaExists = false;
            }
            break;
        case "=":
            histNum.textContent = num.textContent;
            if(oper != ""){     
                let aux = getSecondOperand(oper, num.textContent);
                if(aux.split(".").length > 1){
                    num2 = parseFloat(aux);
                }else{
                    num2 = parseInt(getSecondOperand(oper, num.textContent));
                }
                num.textContent = toFixedIfNecessary(operate(oper, num1, num2), 3);
                num1 = 0;
                num2 = 0;
                oper = "";
            }
            ended = true;
            commaExists = false;
            break;
        case "⌫":
            let arr = num.textContent.split("");
            if(isOperation(arr[num.textContent.length - 1])){
                num1 = 0;
                oper = "";
            }else if(arr[num.textContent.length - 1] == '.'){
                commaExists = false;
            }
            let aux = "";
            for(let i = 0; i < num.textContent.length - 1; ++i){
                aux += arr[i];
            }
            num.textContent = aux;
            break;
        case ".":
            if(!commaExists){
                commaExists = true;
                if(ended){
                    num.textContent = elem.textContent;
                    ended = false;
                }else{
                    num.textContent += elem.textContent;
                }
            }
            break;
            
        default:
            if(ended){
                num.textContent = elem.textContent;
                ended = false;
            }else{
                num.textContent += elem.textContent;
            }
            break;
    }

}

function toFixedIfNecessary( value, dp ){
  return +parseFloat(value).toFixed( dp );
}

function isOperation(c){
    return c == "+" || c == "-" || c == "*" || c == "/";
}

function getSecondOperand(op, str){
    let aux;
    switch(op){
        case "+":
            aux = str.split("+");
            return aux[1];
        case "-":
             aux = str.split("-");
            return aux[1];
        case "*":
             aux = str.split("*");
            return aux[1];
        case "/":
             aux = str.split("/");
            return aux[1];
    }
}

function operate(operation, a, b){
    switch(operation){
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}


function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return (a / b);
}

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}