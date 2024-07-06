// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const hqBlock = 42;
    return Math.abs(blocks - hqBlock);
  }
  
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(blocks) * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(start - destination) * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  

  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };

  console.log('Distance from HQ in blocks:', distanceFromHqInBlocks(50));
console.log('Distance from HQ in feet:', distanceFromHqInFeet(50));
console.log('Distance travelled in feet:', distanceTravelledInFeet(20, 50));
console.log('Fare price:', calculatesFarePrice(20, 50));