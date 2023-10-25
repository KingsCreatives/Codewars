function sumIntervals(intervals) {
    // Sort intervals based on start values
    intervals.sort((a, b) => a[0] - b[0]);
  
    let totalLength = 0;
    let currentInterval = intervals[0];
  
    for (let i = 1; i < intervals.length; i++) {
      const nextInterval = intervals[i];
  
      // Check for overlap
      if (nextInterval[0] <= currentInterval[1]) {
        // Merge overlapping intervals
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      } else {
        // No overlap, add current interval length to total
        totalLength += currentInterval[1] - currentInterval[0];
        // Move to the next interval
        currentInterval = nextInterval;
      }
    }
  
    // Add the last interval length to total
    totalLength += currentInterval[1] - currentInterval[0];
  
    return totalLength;
  }
  

  