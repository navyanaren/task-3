var x=1; //variable x declared globally
let y=2; //variable y declared
const z=3; //constant variable z declared

console.log("variable x=",x); //variable x is printed
console.log("variable y=",y); //variable y is printed
console.log("constant variable z=",z); //variable z is printed 

function newChanges() {
  //here we are changing the variables to see the scenarios if they can be changeed or wheather they are constant variables.
  var x=10;//changing valuse of x inside a function
  console.log("After reassigning the value of variable x=", x); // prints the value 10

  let y=20; //changing y value
  console.log("After reassigning, the value of y =", y); // prints the value 20

  const z=30; // changing z values
  console.log("After reassigning, the value of z=",z); // this will throw an error as it is a constant variable
}
newchanges();