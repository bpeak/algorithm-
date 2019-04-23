function solution(n) {
    let count = 1
    let numbers = []
    for(let i = 2; i <= n; i++){
        numbers.push(i)
    }
    let primeNumbers = [2]

    for(let i = 3; i <= n; i++){
        let isPrimeNumber = true
        for(let j = 2; j <= i - 1; j++){
            const remain = i % j
            if(remain === 0){
                isPrimeNumber = false
                break;
            }
        }
        if(isPrimeNumber === true){
            primeNumbers.push(i)
            numbers.filter((v) => {

            })
        }
    }
    console.log(primeNumbers)
    return count
}


console.log(solution(10))