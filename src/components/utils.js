// Calculate Mean
export const calculateMean = (data) => {
    const sum = data.reduce((acc, curr) => acc + curr, 0);
    return sum / data.length;
  };
  
  // Calculate Median
 export const calculateMedian = (data) => {
    const sortedData = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  };
  
  // Calculate Mode
 export const calculateMode = (data) => {
    const frequencyMap = {};
    data.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });
    let maxFrequency = 0;
    let modes = [];
    for (const key in frequencyMap) {
      if (frequencyMap[key] > maxFrequency) {
        maxFrequency = frequencyMap[key];
        modes = [Number(key)?.toFixed(3)];
      } else if (frequencyMap[key] === maxFrequency) {
        modes.push(Number(key)?.toFixed(3));
      }
    }
    return modes;
  };
  