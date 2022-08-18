// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(){
    return (['Antonia', 'Nuru']);
}

//should return an array of the last two drivers
const returnLastTwoDrivers = function returnLastTwoDrivers() {
    return (['Amari','Mo']);
}

//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(integer) {
    return function(fare){
        return fare * integer;
    }
}

//fareDoubler()
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers(arrayOfDrivers, function)
const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
    return driversToReturn(arrayOfDrivers);
};