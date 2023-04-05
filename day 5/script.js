// const a=20 // global scope
// function say()
// { 
//     const a=10 // local scope

//     function say1(){  // outer block
//         const a=40
//         {//inner block
//             const a=30
//             console.log(a)
//         }
//     }
// }
// say()
// console.log(a)

function say(){
    console.log(message)
}

let message ="HI"
say()

// function getCounter() {
//     //'use strict'
//     counter = 10; 
//     return counter;
// }
// console.log(getCounter());

// function say(message) {
//     if(!message) {
//         var greeting = 'Hello'; // block scope
//         console.log(greeting);
//     }
//     // say it again ?
//     console.log(greeting); // ReferenceError
// }

// say();

// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
//     console.log(text);

// };
// logIt();


function foo() {
    var a = b = 0;
    b++;
    return b;
   }

foo();
    //console.log(a); // => ???
    console.log(b); // => ???