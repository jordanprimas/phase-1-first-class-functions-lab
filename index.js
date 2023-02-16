// Code your solution in this file!



const returnFirstTwoDrivers = function (arrayOfDrivers) {
    console.log (arrayOfDrivers)
    console.log (arrayOfDrivers.slice (0,2))
    return arrayOfDrivers.slice (0,2)
}
returnFirstTwoDrivers([ 'Jessica', 'Ana', 'Carl', 'Sam' ])
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function () {
        return fare * 5
    }
}

const fareDoubler = (fare) => fare * 2

const fareTripler = (fare) => fare * 3

function selectDifferentDrivers(array, driverToReturn) {
    return driverToReturn(array)
}
