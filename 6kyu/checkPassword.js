function validPass(password){
    if(password.length < 4 || password.length > 19){
      return "INVALID"
    }
    
    if(!/^[a-zA-Z0-9]+$/.test(password)){
      return "INVALID"
    }
    
    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      return "INVALID";
    }
    
    return "VALID"
  }