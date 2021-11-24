// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let x= array.slice(0,2);
    return x;
}
const returnLastTwoDrivers = function(array){
    let y=array.slice(-2);
    return y;
}
function selectingDrivers(array){
    let newArr = [...returnFirstTwoDrivers,...returnLastTwoDrivers];
    return newArr;
}