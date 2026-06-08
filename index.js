const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passFieldOneEl = document.getElementById("passfield-one")
let passFieldTwoEl = document.getElementById("passfield-two")


let passwordLength = 15

function genRandom() {
    let rand = Math.floor(Math.random() * characters.length)
    return characters[rand]
}

function genPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += genRandom()
    }
    return randomPassword
}

function clickButton() {
    passFieldOneEl.textContent = genPassword()
    passFieldTwoEl.textContent = genPassword()
}