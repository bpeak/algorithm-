const participant = ["rlgus", "wlgud", "ehddms", "dlrtn", "rlgus"]
const completion = ["rlgus", "wlgud", "ehddms", "rlgus"]

function solution2(participant, completion){
    const participantObj = {}
    for(let i = 0; i < participant.length; i++){
        if(participantObj[participant[i]]){
            participantObj[participant[i]] += 1
        } else {
            participantObj[participant[i]] = 1
        }
    }
    for(let i = 0; i < completion.length; i++){
        participantObj[completion[i]]--
    }
    for(let key in participantObj){
        if(participantObj[key] !== 0){
            return key
        }
    }
}

function solution(participant, completion) {
    completion.forEach(compli => {
        const partiIndex = participant.findIndex((parti) => {
            return parti === compli
        })
        if(partiIndex !== -1){
            participant.splice(partiIndex, 1)
        }
    })
    return participant[0]
}

console.log(solution2(participant, completion))

// console.log(participant.findIndex((v) => {
//     return v === "dlrtndfdsfdsf"
// }))