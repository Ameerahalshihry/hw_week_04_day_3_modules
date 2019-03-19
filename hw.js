// function sayHello(name){
//     console.log(`Hi, ${name}!`)
// }
const sayHello = name =>
    console.log(`Hi, ${name}!`);
// function getOlder(age){
//     return age+50
// }
const getOlder = age => {return age + 50};

const multiply = (num1, num2) => {console.log(num1 * num2)}; 

const subtractFive = num => {
	const diff = 5 - num; 
	console.log(diff)};

    const printName = name => function() {
        console.log(name)}
    

    module.exports = {
        sayHello: sayHello,
        getOlder : getOlder,
        multiply : multiply,
        subtractFive : subtractFive,
        printName : printName}