function leaderB(user, user_score, your_score){
    var diff = user_score - your_score;
    
    if (diff < 0)
      return 'Winning!';
    
    if (diff == 0)
      return 'Only need one!'
    
    var beta = Math.floor(diff/3);
    var kyu = diff % 3;
    var total = beta + kyu;
    
    return 'To beat ' + user + "'s score, I must complete " + beta + ' Beta kata and ' + kyu + ' 8kyu kata.' + (total > 1000 ? ' Dammit!' : '');
  }