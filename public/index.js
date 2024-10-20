"use strict";
//infer types (implicit types)
// let userName = "afeefa"
// let subscribers = 3000
// subscribers = "s"
//defining types(explicit types)
// let userName:string = "debug media"
// let subscribers:number = 300
// let isTrue:boolean = true;
// let skilss: string[]= ["read","write"];
// let count:number[] = [1,2,3,4]
// interface Details{
//     name:string;
//     age:number;
//     getName:()=> void;
// }
// let users:Details ={
//     name:"afee",
//     age:12,
//     getName(){
//         console.log(this.name);
//     }
// }
//type
// type Details={
//     name:string;
//     age:number;
//     getName:()=> void;
// }
// let users:Details ={
//     name:"afee",
//     age:12,
//     getName(){
//         console.log(this.name);
//     }
// }
// console.log(users.getName);
9;
//union operator
// type Details={
//     name:string;
//     age:number | string;
//     getName:()=> void;
// }
// let users:Details ={
//     name:"afee",
//     age:"12",
//     getName(){
//         console.log(this.name);
//     }
// }
// let skilss: (string|number|boolean)[]= ["read","write",12,true];
//optional
// type Details={
//     name:string;
//     age?:number | string;
//     getName?:()=> void;
// }
// let users:Details ={
//     name:"afee",
//     age:"12",
//     getName(){
//         console.log(this.name);
//     }
// }
//functions
// type Details={
//     name:string;
//     age?:number | string;
//     getName?:()=> void;
// }
// let users:Details ={
//     name:"afee",
//     age:"12",
//     getName(){
//         console.log(this.name);
//     }
// }
// function getUserName(users:Details){
// return users.age
// }
// getUserName(users)
//inline(giving types in function parameteres)
// function getUserName({name,age}:{name: string,age:number}){
// return name
// }
// getUserName({name:"afeefa",age:19})
//giving types to return values
//  type Details={
//     name:string;
//     age:number | string;
//     getName?:()=> void;
// }
// let users:Details ={
//     name:"afee",
//     age:"12",
//     getName(){
//         console.log(this.name);
//     }
// }
// function getUserName(users:Details):string {
// return users.name
// }
// const newValue  = getUserName(users)
// newValue.length;
//use of void(if there is no return statement )
// type Details={
//     name:string;
//     age?:number | string;
//     getName?:()=> void;
// }
// let users:Details ={
//     name:"afee",
//     age:"12",
//     getName(){
//         console.log(this.name);
//     }
// }
// function getUserName(users:Details): void{
// console.log(users.name);
// }
// getUserName(users); 
// named types
// type statusType = "pending" | "completed" | "failed"
// let currentStatus: statusType  = "completed";
// //from api
// const response = "pending"
// if( response ==="pending"){
//     currentStatus = 'pending'
// }
//function overloading
// function add1 (num1:string|n/umber,num2:string|number):string|number{
//     if(typeof num1==="string"|| typeof num2==="string"){
//         return num1+""+num2
//     }
//     return num1+num2
// }
// function add(num1: string,num2:string):string;//here we overrride 
// function add (num1: number,num2:number):number
// function add (num1:any,num2:any):any{
//     return num1+num2
// }
// add(2,3)
// add("2","3")
// add([],[])
//generics
// function getAge<T>(age:T):T{
//     return age
// }
// getAge<number>(20);
// getAge<string>("20")
// type userDetails ={
//     name:string;
//     age:number;
// }
// type adminDetails = {
//     firstname:string;
//     role:string
// }
// const userDetails:userDetails = {
//     name :"afeefa",
//     age :19
// }
// const adminDetails={
//     firstname:"aff",
//     role:"admin"
// }
// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetails>(userDetails);
// const adminvalue = getDetails<adminDetails>(adminDetails);
// uservalue.age;
// adminvalue.firstname;
//another
// type userDetails ={
//     name:string;
//     age:number;
// }
// type adminDetails =userDetails& {
//     role:string;
// }
// const userDetails:userDetails = {
//     name :"afeefa",
//     age :19
// }
// const adminDetails={
//     name:"aff",
//     age:19,
//     role:"admin"
// }
// function getDetails<T>(details:T):T{
//     return details
// }
// const uservalue = getDetails<userDetails>(userDetails);
// const adminvalue = getDetails<adminDetails>(adminDetails);
// uservalue.age;
// adminvalue.role;
//enums
// type Statustype = "pending"|"completed"|"failed"
// enum Statustype{
//     PENDING,
//     COMPLETED,
//     FAILED
// }
//  function getStatus(id:string,status:Statustype){
//     console.log(id,"==",status);
//  }
//  getStatus("1223",Statustype.COMPLETED)
//as const(type casting)
// let userName = "afeefa" as const;
//key of /type of
// const Statustype={
//     PENDING:"pending",
//     COMPLETED:"completed",
//     FAILED:"failed"
// }
//  function getStatus(id:string,status:keyof typeof Statustype){
//     console.log(id,"==",Statustype[status]);
//  }
//  getStatus("1223","COMPLETED")
//utitlity types
// type Users = {
//     readonly name:string;
//     age:number;
// }
// const users:Users =  {
//     name:"afeefa",
//     age:19
// }
//   users.age =9;     
//readonly utility ytpe
// type Users = {
//     name:string;
//     age:number;
// }
// const users:Readonly<Users> =  {
//     name:"afeefa",
//     age:19
// }
//partial
// type Users = {
//     name:string;
//     age:number;
// } 
// const users:Partial <Users>={
//     age:19
// }
//required
// type Users ={
//     name:string;
//     age?:number;
// }
// const users:Required<Users> = {
//     name:"afe",
//     age:9
// }
//pick
// type Users = {
//     name:string;
//     age:number;
// }
// const users:Pick<Users,"name"> = {
//     name:"afee"
// }
//to pick more thane one
// type Users = {
//     name:string;
//     age:number;
// }
// const users:Pick<Users,"name"|"age"> = {
//     name:"afee",
//     age:9
// }
//omit
// type Users = {
//     name:string;
//     age:number;
// }
// const users:Omit<Users,"age"> = {
//     name:"afee",
// }
//EXCLUDE
// type statusType = "pending"|"completed";
// const status  : Exclude<statusType,"pending"> = "completed"
//record
// type food = Record<string,string>;
// const foood:food = {
//     chicken : "dnd"
// }
//another method
// type food={
//     [index:string]:string;
// }
// const foood : food={
//     chicken:"das"
// }
//extract 
// type statusType = "pending"|"failed"|"completed";
// const users : Extract<statusType,"pending"|"failed">="failed";
// console.log(users);
//returntype
// function user(){
//     return {id:1,name:"afee"}
// }
// type user = ReturnType<typeof user>;
//nonnullable
// type t = NonNullable<string|null>;
// const age:t = "afe"
// console.log(age);
//di
// class ServiceA{
//    doSomething():void{
//     console.log("serviceA does something");
//    }
// }
// class ServiceB{
//     private serviceA:ServiceA;
//     constructor(serviceA:ServiceA){
//         this.serviceA = serviceA
//     }
//     execute():void{
//         this.serviceA.doSomething()
//         console.log("sercvieeb executes");
//     }
// }
// const serviceA = new ServiceA;
// const serviceB = new ServiceB(serviceA);
// serviceB.execute()
//type assertion
// let code :any = 123;
// let mycode  = <number>code
// console.log(typeof(mycode));
// let code:any= 123;
// let mycode = code as number
// console.log(typeof(mycode));
// function add(...numbers:number[]){
//      const result = numbers.reduce((acc,curr)=>{
//          acc=acc+curr
//          return acc
//     },0)
//   return result
// }
// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3));
// class student{
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
//     greet():void{
//         console.log(this.name);
//     }
// }
// const students = new student("afeefa")
// students.greet()
class animal {
}
class dog extends animal {
    constructor() {
        super(...arguments);
        this.sounds = "bow";
    }
    sound() {
        console.log(this.sounds);
    }
}
const dogs = new dog();
dogs.sound();
