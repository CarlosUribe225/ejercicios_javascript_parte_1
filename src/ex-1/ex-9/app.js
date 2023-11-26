
const counterVowels = () => {
    let phrase = document.getElementById('phrase').value.toLowerCase();

    let counter = 0;

    for(let i = 0; i < phrase.length; i++) {
        let vowel = phrase[i];
        if('aeiou'.includes(vowel)) {
            counter++;
        }
    }

    document.getElementById('show').innerHTML = `Hay ${counter} vocales en la frase.`
}