document.getElementById("calculate").onclick = function(){
    let num1 = document.getElementById("num1").value
    let operator = document.getElementById("operator").value
    let num2 = document.getElementById("num2").value
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(operator)){
        alert("works")
    } else {
        alert("Input not valid")
    }
};