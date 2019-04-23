function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false
    } else {
        for(let i = 0; i < s.length; i++){
            if(isNaN(parseInt(s[i]))){
                return false
            } else {
                continue
            }
        }
        return true
    }
}
