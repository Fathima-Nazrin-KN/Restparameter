//--REST PARAMETERS
function sum(a,b,...args){
  console.log(a+b); //
  console.log(args); //rest of the arguments are array
    console.log(arguments.length);
}
sum(2,3,4,5,6);


// 

 let arr=[10,20,30]
 let arr1=[101,210,130]
let ress= Math.max(arr)
let res1 = (...arr,...arr1)

console.log (res);


//Asssignment
// 30-3-23

// //Find the index of the first word 'India' in the above string

let string = "India is my country, I love India";
let res = string.indexOf('India');
console.log(res);

// //Find the index of the last word 'India' in the above string
let str1 = "India is my country, I love India";
let res1 = str1.lastIndexOf('India');
console.log(res1);

// //Find the all the matches of the word 'india' in the above string
let str2 = "India is my country, I love India";
let res2 = str2.match('India');
console.log(res2);

// //Check the word 'India' included in the above string
let str3 = "India is my country, I love India";
let res3 = str3.includes('India');
console.log(res3);

// //Check above string start with the word 'India'
let str4 = "India is my country, I love India";
let res4 = str4.startsWith('India');
console.log(res4);

// //Check the above string end with the word 'India'
let str5 = "India is my country, I love India";
let res5 = str5.endsWith('India');
console.log(res5);


// //Define a function to find the sum of any number of arguments we pass to it.

function sum(...args){
  let total=0;
  for(const a of args){
    total += a;
   }
 console.log(total);
}
sum(10,20,30,40);

// //Merge 2 arrays using spread operator
let arr2=[1,2,3,4];
let arr3=[10,20,30,40];
let res3 = [...arr2,...arr3];
console.log(res3);
//Create a deep clone of an array
let arr4 = [3,4,5];
let newArr = [...arr4];
arr[0] = 10;
console.log( arr);
console.log( newArr)