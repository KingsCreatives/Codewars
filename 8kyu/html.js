function htmlspecialchars(input) {
    if (typeof input !== "string") {
      return input;
    }
  
    return input.replace(/[<>"&]/g, function(match) {
      switch (match) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "\"":
          return "&quot;";
        case "&":
          return "&amp;";
        default:
          return match;
      }
    });
  }