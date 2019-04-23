function solution(s, n) {
    var answer = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            answer += " "
            continue
        }
        if(s[i] === "z"){
            answer += "a"
            continue
        }
        if(s[i] === "Z"){
            answer += "A"
            continue
        }
        answer += String.fromCharCode(s[i].charCodeAt(0) + 1)
    }
    
    if(n == 1){
        return answer
    }
    return solution(answer, n - 1)
}