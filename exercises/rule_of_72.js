var interestRate = 8
var rule72 = 72
var years = rule72 / interestRate
var savingsAccount = 10000
var investments = 1000
var growthperYear = investments / years
var investmentsTotal = years * growthperYear
var savingsaccountFinal = savingsAccount + investments + investmentsTotal



console.log("At " + interestRate + "% interest rate, your savings account will be worth $" + savingsaccountFinal.toFixed(2) + " in " + years + " years");
