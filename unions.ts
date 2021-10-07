let Animals : string | number | boolean;
Animals = "tiger";
Animals = 23;
Animals = true;
console.log(Animals)



//***********************************************//

function  objs(animlas:string | number) {
    if(typeof(animlas) === "number")
        console.log('Is a number')
    else if(typeof(animlas) === "string")
        console.log(' Is a string.')
}
objs(23);
objs("elephant");

