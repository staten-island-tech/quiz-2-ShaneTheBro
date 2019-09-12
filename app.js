const johnFirstScore = 89;
const johnSecondScore = 120;
const johnThirdScore = 103;

const mikeFirstScore = 89;
const mikeSecondScore = 120;
const mikeThirdScore = 103;

let johnAverage = (johnFirstScore + johnSecondScore + johnThirdScore) / 3;
let mikeAverage = (mikeFirstScore + mikeSecondScore + mikeThirdScore) / 3;

console.log(`John's average is ${johnAverage}`);
console.log(`Mike's average is ${mikeAverage}`);

if (johnAverage > mikeAverage){
    console.log(`John wins with an average of ${johnAverage}!`);
} else if (mikeAverage > johnAverage){
    console.log(`Mike wins with an average of ${mikeAverage}!`);
} else{
    console.log('It is a tie!')
}