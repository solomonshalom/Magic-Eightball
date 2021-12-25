// All the variables that's going to be used in the magic eight ball, for example the variable "userName" contains the name of the user that's asking the question

let userName = 'Solomon';
let useQuestion = 'Can I be an Software Engineer?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// Below I made a if/else statement that asking if the userName contains the name 'Solomon', if it does it will print 'Hi Solomon, Hope your doing great' else it will only print 'Hello'

// a simpler and shorter way of writing the if/else statement is like this - "userName ? console.log(`Hello ${userName} !`) : console.log('Hello!');"

if (userName === 'Solomon') {
  console.log(`Hi ${userName} Hope your doing great`)
}
else {
  console.log('Hello!');
}

// The below statement prints the question defined in the 'userQuestion' by the user defined in the variable 'userName'
console.log(`${userName} has asked: ${useQuestion}`);

// This statement prints out a random number through the 'randomNumber' variable and for example if the number printed is 0, then it will take the response under 'case 0' which is 'It is certain' and print it out in the console.
 switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall ='It is decidedly so';
    break;
  case 2:
    eightBall ='Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
//This variable will print out the answer given by the 'eightBall' variable and print it out in the console.
console.log(`The answer is: ${eightBall}`)
