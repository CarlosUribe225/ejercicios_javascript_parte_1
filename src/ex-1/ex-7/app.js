
const counterVowel = () => {
    const phrase = document.getElementById('phrase').value.toLowerCase();

    let counter = 0;

    for(let i = 0; i < phrase.length; i++) {
        if(phrase[i] === 'a'){
            counter++
        }
    }
    document.getElementById('show').innerHTML = `En la frase aparece ${counter} veces la letra "a"`;

}
