//**********************//

  interface User {
    name: string;
    id: number;
  }

  const user: User = {
    name: "Hayes",
    id: 0,
  };
  console.log(user)

//*************************************//

  interface Student { 
    firstName:string, 
    lastName:string,
    id:number,
    phonenumber:number 
   
} 
  
var customer:Student = { 
    firstName:"Akhila",
    lastName:"Reddy",
    id:23,
    phonenumber:9876543233 
}
console.log(customer.firstName,customer.lastName); 
console.log(customer.id,customer.phonenumber);



//******************************************//
interface Obj {
    name: string;
    id: number;
  }
   
interface Obj{
    phonenumber: number;
    emailid: string;
}
 
const demo : Obj = {
    name : "Akhila",
    id: 12,
    phonenumber:9456712345,
    emailid:"akhila@gmail.com"
}
console.log(demo);