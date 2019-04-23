function solution(s) {
    const firstChar = s[0]
    const restChars = s.slice(1, s.length)
    let number
    if(firstChar === "+" || firstChar === "-"){
        if(firstChar === "+"){
            number = Number(restChars)
        } else {
            number = -Number(restChars)
        }
    } else {
        number = Number(firstChar + restChars)
    }
    return number
}

function a(s){
    console.log(Number(s))
}

a("1010")
