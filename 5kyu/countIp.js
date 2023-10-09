function ipsBetween(startIP, endIP) {
    // Convert IP addresses to numeric representation
    function ipToNumber(ip) {
      const parts = ip.split('.');
      return (parseInt(parts[0]) * 256 * 256 * 256 +
              parseInt(parts[1]) * 256 * 256 +
              parseInt(parts[2]) * 256 +
              parseInt(parts[3])) >>> 0;  // Use unsigned right shift to convert to unsigned 32-bit integer
    }
  
    const start = ipToNumber(startIP);
    const end = ipToNumber(endIP);
  
    // Calculate the number of addresses between start and end
    return end - start;
  }