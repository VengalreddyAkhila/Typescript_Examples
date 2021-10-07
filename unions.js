var Animals;
Animals = "tiger";
Animals = 23;
Animals = true;
console.log(Animals);
//***********************************************//
function obj(animlas) {
    if (typeof (animlas) === "number")
        console.log('Is a number');
    else if (typeof (animlas) === "string")
        console.log(' Is a string.');
}
obj(23);
obj("elephant");
