function validatePassword(password) {
    // Check the length
    if (password.length < 6) {
      return false;
    }
  
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
  
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // Check for at least one digit
    if (!/\d/.test(password)) {
      return false;
    }
  
    // Check for non-alphanumeric characters (excluding underscore)
    if (/[^A-Za-z0-9]/.test(password)) {
      return false;
    }
  
    // If all conditions pass, the password is valid
    return true;
  }
  
