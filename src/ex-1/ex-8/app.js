
const findVowels = () => {
    const phrase = document.getElementById('phrase').value.toLowerCase();

    let counterA = 0;
    let counterE = 0;
    let counterI = 0;
    let counterO = 0;
    let counterU = 0;

    for(let i = 0; i < phrase.length; i++) {
        if(phrase[i] === 'a'){
            counterA++
        }
        if(phrase[i] === 'e'){
            counterE++
        }
        if(phrase[i] === 'i'){
            counterI++
        }
        if(phrase[i] === 'o'){
            counterO++
        }
        if(phrase[i] === 'u'){
            counterU++
        }
    }
    document.getElementById('show').innerHTML = `En la frase aparecen las siguientes vocales: a: ${counterA},  e: ${counterE},  i: ${counterI},  o: ${counterO},  u: ${counterU} `;

}