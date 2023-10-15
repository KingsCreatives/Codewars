function common(a,b,c){
    //console.log(a,b,c);
    var com = [];
    for (var i=0; i<a.length; i++){
      var temp = a[i];
      if (b.includes(temp) && c.includes(temp)){
        b.splice(b.indexOf(temp),1);
        c.splice(c.indexOf(temp),1);
        com.push(temp);
        }
      };
    
    return com.reduce((x,y)=>x+y,0);
 }
  
  