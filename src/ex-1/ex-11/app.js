
const isDivisibleBy = () => {
    let number = parseInt(document.getElementById('number').value);

    if(number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
        document.getElementById('show').innerHTML = `El número ${number} SI es divisible por uno de los cuatro números`;
    }else
    document.getElementById('show').innerHTML = `El número ${number} NO es divisible por ninguno de los cuatro números`;
}
