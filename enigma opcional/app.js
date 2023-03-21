// ENIGMA OPCIONAL

var plainAlphabet =     "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var size = plainAlphabet.length;

var transformCharacter = (character, origineAlphabet, destinyAlphabet) => {
    var characterIndex = origineAlphabet.indexOf(character);
    var transformedCharacater = destinyAlphabet[characterIndex];
    return transformedCharacater;
}

var transformMessage = (message, origineAlphabet, destinyAlphabet) => {
    var messageLowerCase = message.toLowerCase();
    var encryptedMessage = "";
    console.log(messageLowerCase);
    for(var character of messageLowerCase) {
        console.log(character);
        if(origineAlphabet.indexOf(character) > -1) {
        encryptedMessage += transformCharacter(character, origineAlphabet, destinyAlphabet);
        } else {
            encryptedMessage += character;
        }
    }
    return encryptedMessage;
}

var printFunction = (message, origineAlphabet, destinyAlphabet, textAreaId) => {
    var transformMessage1 = transformMessage(message, origineAlphabet, destinyAlphabet);
    document.getElementById(textAreaId).value = transformMessage1;
}

var text1 = () => document.getElementById("text-area1").value;
const buttonEncrypt = document.getElementById("encrypt");
buttonEncrypt.addEventListener("click", () => printFunction(text1(), plainAlphabet, encryptedAlphabet, "text-area2"));

var text2 = () => document.getElementById("text-area2").value;
const buttonDecrypt = document.getElementById("decrypt");
buttonDecrypt.addEventListener("click", () => printFunction(text2(), encryptedAlphabet, plainAlphabet, "text-area1"));
