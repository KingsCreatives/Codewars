function initializeNames(name){
    const names = name.split(' ');
  
      if (names.length <= 2) {
          // No middle name, return the original name
          return name;
      } else {
          // Initialize middle names with their initials
          for (let i = 1; i < names.length - 1; i++) {
              names[i] = names[i].charAt(0) + '.';
          }
          return names.join(' ');
      }
  }