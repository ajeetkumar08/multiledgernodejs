

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }
console.log("PI" + between(10000, 99999));



