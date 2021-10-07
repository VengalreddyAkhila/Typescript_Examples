//*****************************//
//it takes all numbers like octal,hexadecimal,binar//

let first:number = 1234; // number 
let second: number = 0x37CF;  // hexadecimal number
let third:number=0o377 ;      // octal
let fourth: number = 0b111011; // binary  

let fifth:number = 1234567;
fifth.toExponential(1);

let myNumber: number = 123456;
myNumber.toExponential(); 


let Numbers: number = 123456.234;
myNumber.toFixed(2); 

let object: number = 123;
object.toString(4);

console.log(first);  
console.log(second); 
console.log(third);  
console.log(fourth); 
console.log(fifth) ;
console.log(myNumber);
console.log(Numbers)
console.log(object);