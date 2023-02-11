
// 0 => Rock
// 1 => Paper
// 2 => Scissors

export const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Draw";
    }
    if (userChoice === 0 && computerChoice === 1 || 
        userChoice === 1 && computerChoice === 2 || 
        userChoice === 2 && computerChoice === 0) {
            return "Computer Wins";
    }
    if (
      (computerChoice === 0 && userChoice === 1) ||
      (computerChoice === 1 && userChoice === 2) ||
      (computerChoice === 2 && userChoice === 0)
    ) {
      return "User Wins";
    }
}