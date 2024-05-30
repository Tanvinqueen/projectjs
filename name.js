//1st q
let carName = "Volvo";
//2nd q
let firstName = "John",lastName = "Doe",age = 35;
//3rd q
let x = 10;
let y = 5;
let X =x*y;
//4th q
 let length = 16;//number data type

 let lastName2= "Johnson"; //strings data type
 const x2 = {
    firstName = "John",
    lastName = "Doe"
 };//object data type
 //5th q
 function myFnction(){
    alert("Hellow world!")
 }
 myFunction();

 //6th q
 const person2 = {
    firstName = "John",
    Age = 50
 } ;
 alert("John is 50");
 //7th q

 function myFnction{
    let x = document.getElementById("demo").valu;
    let massage = document.getElementById("ptag");
    try {
        if (x.trim()=="")throw "input fild is Empty";
        else if(x>10)throw "number is high";
        else if(x<5)throw "number is low";
        else {
            throw "every think is ok"
        };

    }
    catch(err){
        massage.innerHTML = err;
    }
 }
 //8th q

 const  cars = [" Volvo","Jeep","Mercedes"];
 cars[0] = "Ford";

 //9th q
 let ran = Math.random();
 console.log(ran)//random  valu select
 let maxmath = Math.max(10,11,12,13,14,15,16,17,18,19,20);
 console.log(maxmath)
 let square = Math.sqrt(9);
 console.log(sqare)
 //10th q
 let a = 10;
 let b = 5;
 if (a>b){
    console.log("a is geater then b")
 }
 let age1 = 17;
 let massage1 = age <18?"Too young":"old enough";

