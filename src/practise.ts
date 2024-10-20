// interface  details{
//     name:string;
//     getname:()=>void;
// }
// const users:details={
//     name :"afeefa",
//     getname() {
//         console.log(this.name);
        
//     },
// // }

// type details = {
//     name?: string;
//     getname?:()=>void;
// }
// const users:details = {
//     name : "afeefa",
//     getname(){
//         console.log(this.name);
        
//     }
// }
// function getusers(users:details){
//     console.log(users.name);

// }
// getusers(users);


// function users(name:string):void{
//     console.log(name);
    
// }
// users("afeefa")

// function getAge<T>(arg:T):T{
// return arg

// }
// console.log(getAge<string>("afee"));


// type name =string;
// let users:name = "afeefa"
// console.log(users);


// type userDetails ={
//     age:number;
//     name:string;
// }
// type adminDetails =userDetails & {
//     role:string;

// }
// const users  ={
//     name:"afeefa",
//     age:15
// }
// const admins = {
//     name:"ha",
//     role:"loo",
//     age:17
// }
// function user<T>(admins:T):T{
//     return admins

// }
// console.log(user<adminDetails>(admins));




//generic classes

// class generic<T>{
//     content:T
//     constructor(content:T){
//         this.content = content
//     }
//     get():T{
//         return this.content
//     }
// }
// const genrics = new generic<string>("123")
// console.log(genrics.get());


//genric interaces
// interface user<T>{
//     name:T
// }
// let users:user<string> ={
//     name:"afe"
// } 
// console.log((users));


//geenrics i type aliases
// type genrics<T>={
//     name:T;
//     age:
// }
// const users :genrics<string>={
//     name:"aff",
//     age:60
// }
// console.log(users);


//genrics in multiple type parametrs

// function pair<T,U>(first:T,second:U):[T,U]{
//     return [first,second]
// }
// console.log(pair<string,number>("afe",13));


// function user(){
//     return {id:1,name:"afee"}

// }

// type users = ReturnType<typeof user>

// type t = NonNullable<string|null>;
// const age:t = "afe"
// console.log(age);


//type intersection

// type employee = {
//     name:string;
// }
// type manager = {
//     id:number
// }

// type team = employee & manager;

// let user:team={
//     name:"af",
//     id:2

// }
