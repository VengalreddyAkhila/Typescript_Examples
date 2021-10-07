let a:string = "hello";
console.log(a);
function sum(a:number,b:number) : number | string{
         return a+b;
}
let result :number | string = sum(2,8);
console.log(result);

//*****************************************//

function sayHi(): void { 
    console.log('Hi!')
}
let speech: void = sayHi(); 
console.log(speech);

//******************************************//

var age: number = 32; 
var names: string = "John";
var Value: boolean = true;
console.log(age,names,Value);