//arrays can be declared and intialized separately//

let flowers: (string | number )[];
flowers = ['Rose', 'Sunflower', 23,'Lily', 'Marigold' , 9]; 

let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; 

flowers[1];
 for(let i=0; i<flowers.length; i++ ){
     console.log(flowers[i]);
 }



console.log(flowers)
console.log(flowers[2]);
console.log(ids)