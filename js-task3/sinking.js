// function participantsLeft(initalParticipants, rounds) {
//     let remainingParticipants = initalParticipants

//     for (const groupSize of rounds) {
//         remainingParticipants = Math.floor(remainingParticipants - remainingParticipants % groupSize)
//     }
//     return remainingParticipants
// }

// const initalParticipants = 15;
// const rounds = [4, 2, 5, 3, 2];
// const result = participantsLeft(initalParticipants, rounds);

// console.log(result)

function sinking(participant,rounds){
    //codehere
    let remainingParticipants = participant
       
       for (const groupSize of rounds) {
           remainingParticipants = Math.floor(remainingParticipants - remainingParticipants % groupSize)
       }
       return remainingParticipants
   }
   
   const participant = 32;
   const rounds = [3,24,2,6,1,3,5];
   const result = sinking(participant, rounds);
   
   console.log(result)