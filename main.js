document.getElementById("calculate").onclick = function(){
    let num1 = document.getElementById("num1").value;
    let operator = document.getElementById("operator").value;
    let num2 = document.getElementById("num2").value;
    if (!isNaN(num1) && !isNaN(num2) && isNaN(operator)){
        if (operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%" || operator == "**"){
            let test = eval(num1 + operator + num2);
            alert(test);
        } else {
            alert("invalid operator")
        }
    } else {
        alert("Input not valid");
    }
};