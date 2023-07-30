function uefaEuro2016(teams, scores){
    let result ;
    if(scores[0] == scores[1]){
      result = "teams played draw."
    }else if(scores[0] > scores[1]){
      result = teams[0] + " " + "won!"
    }else{
      result = teams[1] + " " + "won!"
    }
    return `At match ${teams[0]} - ${teams[1]}, ${result}`
  }