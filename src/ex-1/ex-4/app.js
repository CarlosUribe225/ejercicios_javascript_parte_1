let result = document.getElementById('result');
let button = document.getElementById('addition');

button.addEventListener('click',add);

function add() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let toAdd = number1 + number2;
    result.innerHTML = `La suma de ${number1} y ${number2} es ${toAdd}`;


}
