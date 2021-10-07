class Demo{
    a:string;
    b:number;
    c:boolean;
    d:any;
    constructor(a: string, b: number, c:boolean , d:any) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
}
interface Animal{
    a:string;
    b:number;
    c:boolean;
    d:any;
}

const Demo1: Animal = new Demo("Akhila", 1,false,"hi");
console.log(Demo1)
