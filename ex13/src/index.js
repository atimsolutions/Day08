function randomRageNumber(minNumber, maxNumber){
    return Math.floor(Math.random()*(maxNumber-minNumber))+minNumber;
    }

console.log(randomRageNumber(1,10));
module.exporst= randomRageNumber;  