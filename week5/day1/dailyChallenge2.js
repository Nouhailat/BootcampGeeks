const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
function toJs() {
    return new Promise((resolve, reject) => {
        const morseObj = JSON.parse(morse); // Convertit string vers objet
    
        if (Object.keys(morseObj).length === 0) {
          reject(" Erreur : l’objet Morse est vide !");
        } else {
          resolve(morseObj);
        }
      });
}



function toMorse(moreJS) {
    return new Promise((resolve,reject) => {

    const userInPUT=prompt("entre un mot au prase a traduire")
    const moreArray=[]
    for (let char of userInPUT) {
        if (!moreJS[char]) {
            reject(`caractere non valid"${char}"`)
            return
            
        }
        moreArray.push(moreJS[char])
       
        
    }
    resolve(moreArray);
    })
    
}
function joinWord(morseTRanslation) {
    const resultContainer=document.createElement('div')
morseTRanslation.forEach(code => {
    const line=document.createElement('p')
    line.textContent=code
    resultContainer.appendChild(line)
    
});    
document.body.appendChild(resultContainer)
}
toJs()
.then(morseObj=>toMorse(morseObj) )
.then(morseresult =>joinWord(morseresult))
.catch(error => console.log(error)

)