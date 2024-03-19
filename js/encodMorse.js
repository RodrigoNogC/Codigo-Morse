
const lettersMorse = {
    //Letras Maiusculas
    'A': '.- ', 
    'B': '-... ', 
    'C': '-.-. ', 
    'D': '-.. ', 
    'E': '. ', 
    'F': '..-. ',
    'G': '--. ',
    'H': '.... ',
    'I': '.. ',
    'J': '.--- ',
    'K': '-.- ',
    'L': '.-.. ',
    'M': '-- ',
    'N': '-. ',
    'O': '--- ',
    'P': '.--. ',
    'Q': '--.- ',
    'R': '.-. ',
    'S': '... ',
    'T': '- ',
    'U': '..- ',
    'V': '...- ',
    'W': '.-- ',
    'X': '-..- ',
    'Y': '-.-- ',
    'Z': '--.. ',
    ' ': '/ ',
    //Números
    '0': '----- ',
    '1': '.---- ',
    '2': '..--- ',
    '3': '...-- ',
    '4': '....- ',
    '5': '..... ',
    '6': '-.... ',
    '7': '--... ',
    '8': '---.. ',
    '9': '----. ',
    //Pontuações
    '.': '.-.-.- ',
    ',': '--..-- ',
    '?': '..--.. ',
    '!': '-.-.-- ',
    ';': '-.-.-. ',
    ':': '---... ',
    "'": '.----. ',
    '"': '.-..-. ',
    '_': '..--.- ',
    '-': '-....- ',
    '/': '-..-. ',
    '(': '-.--. ',
    ')': '-.--.- ',
    //Simbolos
    '$': '...-..- ',
    '@': '.--.-. ',
    '=': '-...- ',
}

function EncoderMorse(){
textConvert.forEach(el=>{
    el = el.toUpperCase()
    switch (el){
        case 'Ã':
            el = 'A'
            break
        case 'Ê':
            el = 'E'
            break
        case 'Ç':
            el = 'C'
            break
        default:
            break
    }
    if(lettersMorse[el] !== undefined){
        outputText.innerHTML += lettersMorse[el]  
    }else{
        outputText.innerHTML = 'Certos caracteres não existem para código morse. Verifique o que você digitou.'
    }
    
}) 
}