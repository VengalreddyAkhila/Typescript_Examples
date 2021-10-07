let num1:number = 1; 
    
function obj() { 
    let num2:number = 2; 

    if (num2 > num1) { 
        var num3: number = 3;
        num3++; 
    } 
    let num4: number = 4;
    while(num1 < num2) { 
       
        num1++;
    }

    console.log(num1); 
    console.log(num2); 
    console.log(num3); 
    console.log(num4); 
}

obj();





//*****************************************//

//console.log(no1); 
let no1:number = 10 ;

console.log(no2); 
var no2:number = 10 ;


//*******************************************//

let num:number = 1; 

function demo() {
    let num:number = 2;

    if(true) { 
        let num:number = 3;
        console.log(num); 
    }

    console.log(num);
}
console.log(num); 
demo();

//********************************************//

function Demo(x: number ) { 
    let a:number = 10 ; 
    let b:number = 20 ; 

    return a + b ;
}
console.log(Demo)


//********************************************//

const p = { 
    p1 : 9, 
    p2 : 10, 
    p3 : 13, 
    p4 : 20
}; 
p.p4 = 11; 
p.p1 = 1
console.log(p)