frontDoorResponse = (sentence) => {
    sentence = sentence.trim()
    sentence = sentence.toLowerCase()
    sentence = sentence[0].toUpperCase() + sentence.slice(1)
    return sentence
}

console.log(frontDoorResponse('SHALLALA'))

backDoorResponse = (password) => {
    password = password.trim()
    password = password.toLowerCase()
    password = password[0].toUpperCase() + password.slice(1)
    var polite = ", please"
    if (password.slice(-8) != polite)
        return password + ", please";
    else
        return password
}

console.log(backDoorResponse("HHUHUHHU, please"))
console.log(backDoorResponse("HHUHUHUHUHUHU                 "))