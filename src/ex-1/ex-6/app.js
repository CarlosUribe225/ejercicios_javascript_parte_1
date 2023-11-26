
const comparision = () =>{
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let number3 = parseFloat(document.getElementById('number3').value);

    let greater = (number1 > number2) 
    ? ((number1 > number3) ? number1 : number3) 
    : ((number2 > number3) ? number2 : number3);

    document.getElementById('show').innerHTML = `El número mayor es ${greater}`;
}