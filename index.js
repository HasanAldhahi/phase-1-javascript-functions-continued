// code your solution here



function saturdayFun(str = 'roller-skate') {


    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = 'go to the office') {

    return `This Monday, I will ${str}.`
}

function wrapAdjective(sign) {

    return function result(str) {
        return `You are ${sign}${str}${sign}!`
    }
}