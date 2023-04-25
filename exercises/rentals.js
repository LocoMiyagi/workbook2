var totalPeople = 38
var vanCost = 250 
var vanPerson = 15
var totalVan = totalPeople / vanPerson
var totalCost = totalVan * vanCost
var costperPerson = totalCost / totalPeople
console.log("Total van costs $" + totalCost.toFixed(2));
console.log("Each person will pay $" + costperPerson.toFixed(2));
