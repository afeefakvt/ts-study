"use strict";
//class and objects
// class person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`my name is ${this.name}`);
//     }
// }
// const person1 = new person("afff",12);
// person1.greet()
//another
// class car{
//     name:string;
//     price:number;
//     constructor(){
//         this.name = "aff";
//         this.price = 202;
//     }
// }
// const instance = new car()
// console.log("car price: "+instance.price);
//encapsulation
//public
// class car{
//     public print(name:string){
//         console.log(name)
//     }
// }
// const carr = new car()
// carr.print("aff")
//private
// class car{
//     private print(name:string){
//         console.log(name);
//     }
// }
// const carr = new car()
// carr.print("aff")//not accessible
//protected
// class car{
//     protected print(name:string){
//         console.log(name);
//     }
// }
// const carr = new car()
// carr.print("aff")//not access
//getter and setter
// class car{
//     private price = 100
//     private name ="audi"
//     get Price(){
//         return this.price
//     }
//     get Name(){
//         return this.name
//     }
//     set Price(pricee:number){
//         this.price = pricee
//     }
// }
// const instance  = new car()
// console.log(instance.Price);
// console.log(instance.Name);
// instance.Price = 300
// console.log(instance.Price);
//static properties
// class car{
//     public static carName = "audi"
//     busName = "volvo"
// }
// console.log(car.carName);
// console.log(car.busName);//error
// const instance = new car()
// console.log(instance.busName);
//inheritance
// class parent{
//     id=4;                  
// }
// class child extends parent{
//     constructor(){
//         super()
//         console.log(this.id);
//     }
// }
// const instance = new child()
//abstraction
// abstract class animal{
//     abstract makeSound():void;
// }
// class dog extends animal {
//     makeSound(): void {
//         console.log("bow");
//     }
// }
// const dogs = new dog();
// dogs.makeSound()
//interface
// interface car{
//     move():void;
// }
// class bmv implements car{
//     speed:number= 120;
//     move(): void {
//         console.log(this.speed);
//     }
// }
// interface animal{
//     name:string ;
//     speak():void;
// }
// class dog implements animal{
//     constructor(public name:string){}
//     speak(): void {
//         console.log(this.name);
//     }
// }
//check even or odd
// interface evenorodd{
//     check(x:number):boolean;
// }
// class iseven implements evenorodd{
//     check(x: number): boolean {
//         return x%2==0
//     }
// }
// const even = new  iseven();
// console.log(even.check(3));
//area of rectangle using clas and objct
// class rectangle{
//     length:number;
//     breadth:number
//     constructor(length:number,breadth:number){
//         this.length = length;
//         this.breadth = breadth
//     }
//     area():number{
//         return this.length*this.breadth
//     }
// }
// const rectangles = new rectangle(2,3);
// console.log(rectangles.area());
//using abstraction
// abstract class area{
//     abstract findArea():number;
// }
// class rectangle extends area{
//     length:number;
//     breadth:number;
//     constructor(length:number,breadth:number){
//         super()
//         this.length = length;
//         this.breadth = breadth;
//     }
//     findArea(): number {
//         return this.length*this.breadth
//     }
// }
// const rectangles = new rectangle(2,3);
// console.log(rectangles.findArea());
//area using methos over riding in polymorphism
// abstract class shape{
// Abstract method to calculate area, to be overridden by subclasses
//     abstract calculateArea():number;
// }
// class rectangle extends shape{
//     constructor(private length:number,private breadth:number){
//         super()
//     }
//     calculateArea(): number {
//         return this.length*this.breadth
//     }
// } 
// class circle extends shape{
//     constructor(private radius:number){
//         super()
//     }
//     calculateArea(): number {
//         return Math.PI*this.radius*this.radius
//     }
// }
// const shapes: shape[]  = [new rectangle(2,3),new circle(3)] 
// shapes.forEach((shape)=>{
//     console.log(`area:${shape.calculateArea()}`);
// })
//method overriding
// class animal{
//     speak():void{
//         console.log("the animal");
//     }
// }
// class dog extends animal{
//     speak(): void {
//         console.log("bow");
//     }
// }
// class cat extends animal{
//     speak(): void {
//         console.log("meow");
//     }
// }
// const animals:animal[] = [new dog(),new cat()]
// animals.forEach(animal=>{
//     animal.speak()
// })
// class shape{
//     area(length:number,breadth:number):number;
//     area(side:number):number;
//     area(radius:number):number;
//     area(length:number,breadth:number):number{
//         if(breadth!==undefined){
//             return length*breadth;
//         }else if(length>0&&breadth==undefined){
//             return length*length
//         }else{
//             return Math.PI*length*length
//         }
//     }
// }
// const shapes = new shape()
// console.log(shapes.area(2,4));
// console.log((shapes.area(4)));
// console.log((shapes.area(6)));
