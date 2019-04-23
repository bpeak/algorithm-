function solution(strings, n) {
    strings.sort((a, b) => {
        if(a[n] > b[n]){
            return 1
        } else {
            if(a[n] === b[n]){
                if(a >= b){
                    return 1
                }
            } else {
                return -1
            }
        }
    })    
    var answer = strings;
    return answer;
}

console.log(solution(["abaa", "aca", "aaaa", "aba", "qkd", "aaa", "aab", "czz", "abb"], 2))

console.log("aaa">"aaaa")
console.log("aaaa">"aba")