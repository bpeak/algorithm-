function solution(array, commands) {
    const answer = commands.map(command => {
        const commandArray = array.slice(command[0] - 1, command[1]).sort((a, b) => {
            if(a >= b){
                return 1
            } else {
                return -1
            }
        })
        return commandArray[command[2] - 1]
    })
    return answer
}

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)