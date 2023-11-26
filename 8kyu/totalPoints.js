// function points(games){

function calculatePoints(games) {
    return games.reduce((totalPoints, match) => {
      const [teamAScore, teamBScore] = match.split(':').map(Number);
  
      if (teamAScore > teamBScore) {
        totalPoints += 3;
      } else if (teamAScore === teamBScore) {
        totalPoints += 1;
      }
  
      return totalPoints;
    }, 0);
  }
