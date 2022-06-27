
//Explain the below how it works

alert("I'm JavaScript!");  //  == First display in alert box output is - I'm JavaScript!
alert('Hello')   //( this line is not having semicolon) === Enter ok means Second Print in Alert box in - Hello
alert(`Wor   
 ld`)   // === after enter ok means print first line  -Wor and second line print - Id 
alert(3 +    // === yes, it will add the value and print in the alert box answer is - 6.
1      // === this is how the js alert box is run threw the browser.
+ 2); // this is multiple line code and its working


//Fix the below to alert Guvi geek

let admin=9, fname=10.5; // === variable let - reassign the value
fname = "Guvi";
lname = "geek"
//admin = fname+lname; // === There is no space b/w fname and lname
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"


//Fix the below to alert hello Guvi geek

let fname1=10.5; // === variable let - reassign the value
fnam1 = "Guvi";
lname1 = "geek";
let name1 = fname1+" "+lname1; // === and not given space also
//alert( 'hello ${name}' ); // === Not using Tiled symbol
alert( `hello ${name1}` );


//Fix the below to alert sum of two numbers

let a = prompt("First number?");
let b = prompt("Second number?");
//alert(a+b); // === Just convert string to Number and sum the values 
alert(Number(a) + Number(b));


//Fix the below to alert sum of two numbers

let a1 = prompt("First number?");
let b1 = prompt("Second number?");
alert(parseInt(a1) + parseInt(b1)); // === Another parseInt method to convert string to Number and sum of two numbers



//If you run the below scritpt you will get “Code is Blasted”

//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

//var a = "2" > "12";  // === In this case we assign the value b/w the "", It will get "a" means condition is true and the output will be print in "Code is Blasted" 
var a2 = 2 > 12;  // === Want output  "Diffused" means just remove the "" quotes and the condition will be false ,So the output is "Diffused"
//Don't touch below this
if (a2) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


//How to get the success in console.

//let a = prompt("Enter a number?"); // === Just declare the variable dont assign, If u got output - Success. 
  let a3; 
//Don't modify any code below this
if (a3) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}


//How to get the correct score in console.

let value = prompt('How many runs you scored in this ball');
if (Number(value) === 4) {         // === Just the given value to change Number(value) got output
      console.log("You hit a Four");
} else if (Number(value) === 6) {       // === Just the given value to change Number(value) got output
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}


//Fix the code to welcome the Employee

let login = 'Employee';
let message1 = (login == 'Employee') ? "Welcome!":  // === Just After Question mark add - Welcome!
  (login == 'Director') ? 'Greetings': 
  (login == '') ? 'No login' : '';
console.log(message1);


//Fix the code to welcome the boss

// You cant change the value of the msg
let message2;
if (null || 2 ||undefined )
{
  message2 = "welcome boss";  // === Just delete the declaraion
}
else
{
 message2 = "Go away";  // === Just delete the declaraion
}
  console.log(message2);


//Fix the code to welcome the boss
  
  let message3;
  //let lock = 2;  // === Just only declare the variable not assign the value
  let lock;
  //Dont change any code below this 
  if (null || lock || undefined )
  {
    message3 = "Go away";
  }
  else
  {
   message3 = "welcome";
  }
    console.log(message3);


//Fix the code to welcome the boss

let message;
//let lock = 2;  // === Just only declare the variable not assign the value
let lock2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


//Change the code to print

3

2

1

//You can change only 2 characters
let i = 3;
while (i) {
  //console.log(--i);   // === Just change --i to i--
  console.log(i--);
  
}


//Change the code to print 1 to 10 in 4 lines

let nNum = 4; 
let stringNum = "";
let count = 1;
for (let i = 1; i <= nNum; i++) {
 for (let j = 1; j <= i; j++) {
    stringNum += count+" ";
    count++;
  }
  stringNum += "\n";
}
console.log(stringNum);

//Change the code to print even numbers

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  if(num%2 === 0){
    console.log(num);
    }
  }


//Change the code to print all the gifts


let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}



//Fix the code to disarm the bomb

let countdown = 0;
while (countdown >= 0) {
  countdown--;
  if(countdown> 0)
  {
   console.log("bomb triggered");
  }else{
    console.log("Disarm the Bomb");
  }
}


//Whats the msg printed and why?

var lemein = '0';
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += 'hi';   // === Output is hi only because if condition check string or not , lemein is string, lemeout is Number
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);


//Whats the msg printed and why? Guess you answer before running it.

var lemein = '0';
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += 'hi';
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);


// first I got an error because of "" and ''quotation not support after i change the string typ.
// My guess is hi is the output.Output is hi only because if condition check string or not , lemein is string, lemeout is Number
