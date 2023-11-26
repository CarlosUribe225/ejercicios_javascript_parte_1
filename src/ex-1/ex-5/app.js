let button = document.getElementById('compare');

button.addEventListener('click',comparision);

function comparision() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    if(number1 == number2) {
        document.getElementById('show').innerHTML = `Los números son iguales`
    }
    else if(number2 > number1) {
        document.getElementById('show').innerHTML = `${number2} es mayor que ${number1}`
        }
        else {
        document.getElementById('show').innerHTML = `${number1} es mayor que ${number2}`
        }
    
}