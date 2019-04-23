function solution(s){
    const uString = s.toUpperCase()
    let PCount = 0
    let YCount = 0
    for(let i = 0; i < uString.length; i++){
        if(uString[i] === "P"){
            PCount++
            continue
        }
        if(uString[i] === "Y"){
            YCount++
            continue
        }
    }
    return PCount === YCount
}

console.log(solution("yYppp2"))