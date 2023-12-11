const isDivisibleBy = () => {
    let number = parseInt(document.getElementById('number').value);

    if(number % 2 === 0) {
        document.getElementById('divisibleBy2').innerHTML = ` Es divisible por 2.`;
    }
    if(number % 3 === 0) {
        document.getElementById('divisibleBy3').innerHTML = ` Es divisible por 3.`;
    }
    if(number % 5 === 0) {
        document.getElementById('divisibleBy5').innerHTML = ` Es divisible por 5.`;
    }
    if(number % 7 === 0) {
        document.getElementById('divisibleBy7').innerHTML = ` Es divisible por 7.`;
    }
    if(number % 2 !==0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
        document.getElementById('isNotDivisible').innerHTML = 'El número no es divisible por 2, 3, 5 o 7'
    }
}

