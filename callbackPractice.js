/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// function first(names) {
//   function firstName(){
//     for(var i = 0; i < 1; i++)
//   console.log('The first name in names is ' + names[i]);
//   }
//   return firstName
// }
// ^^^ This produces the desired outcome "The firts name in names is Tyler.""

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first(array, fn) {
  for(var i = 0; i < array.length; i++){
    array[i] = fn(array[i]);
  }
}

first(names, function(firstName){
  
  console.log('The first name in names is ' + firstName)
});
// ^^^This worked and I don't know why. I understand the the index of my array is the parameter of my function,
// but I never tell the function firstName what it is to be doing with that parameter. And it actually returns all 
// of the first names, rather than just the first. 
// If I wanted to restrict it to the first index, how would I do that in the invocation?


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var names = ['Smith', 'Jones', 'Thomas', 'Smith', 'Jones', 'Thomas',];

function last(array, fn) {
  for(var i = 0; i < array.length; i++){
    array[i] = fn(array[i]);
  }
}


last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(num1, num2, fn) {
  return fn(num1 * num2);
}
// ^^I have to declare what I want to do with "fn" here.

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})
// ^^^This one makes a little more sense to me because when I describe the function of fn in "multiply" I actually tell it to do something.




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
var names = ["Colt", "Buck", "Swan"]

function contains(array, str, fn) {
  var result = false;
  for(var i = 0; i < array.length; i++) {
    if (array[i] === str) {
    	result = true;
    }
  }
  fn(result);
}


contains(names, "Colt", function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
var names = ["jim", "sam", "george", "jim", "sam", "john"];

function uniq(array, fn) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
      if (newArray.indexOf(array[i]) === -1) {
          newArray.push(array[i]);
    }
  }
  return fn(newArray);
}
// my function^^ is going to find the duplicate items and ease them. 


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
var names = ['Smith', 'Jones', 'Thomas', 'Smith', 'Jones', 'Thomas',];

function each(array, fn) {
 for ( var i = 0; i < array.length; i++) {
   fn(array[i], i);
 }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
function getUserById(array, x, fn) {
  for (var i = 0; i < array.length; i++) {
    if(array[i].id === x) {
      fn(array[i]);
    }
  }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
