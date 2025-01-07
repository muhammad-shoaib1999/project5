// alert('Hello World 2...');
// console.log("Hello World..");

// Data Type:

// 1) String 
// var txt = "Ali";

// 2) Number
// var numb = 567;

// 3) Boolean
// var bol = false;

// 4) Null
// var n = null;

// 5) Array 
// var arr = [23, 3454 , 545, "ali", true , null , -234];


// Comparsion Operators
// var numb1 = 4;
// var numb2 = 5;

// console.log(numb1 , " is greater Than " , numb2 ," : ",  numb1 > numb2);
// console.log(numb1 , " is less Than " , numb2 ," : ",  numb1 < numb2);
// console.log(numb1 , " is equal Than " , numb2 ," : ",  numb1 == numb2);


// var x = "ali";

// var num = 345;

// var bol = true;

// var arr = [3,6,8 ,2];

// var x = "7";
// var y = "23";

// var numb1 = Number(x);
// var numb2 = Number(y);

// console.log(numb1 + numb2);


// console.log(Number(x) + Number(y));

// alert("Message");

// var numb1 = prompt("Enter First Number: ");
// var numb2 = prompt("Enter Second Number: ");

// console.log("The Sum of " , numb1 , "&" , numb2 , "is: " ,Number(numb1) + Number(numb2));

// console.log(`The Sum of ${numb1} & ${numb2} is: ${Number(numb1) + Number(numb2)}`);
// console.log(`The Subtraction of ${numb1} & ${numb2} is: ${Number(numb1) - Number(numb2)}`);
// console.log(`The Multiplication of ${numb1} & ${numb2} is: ${Number(numb1) * Number(numb2)}`);
// console.log(`The Division of ${numb1} & ${numb2} is: ${Number(numb1) / Number(numb2)}`);
// console.log(`The Power of ${numb1} & ${numb2} is: ${Number(numb1) ** Number(numb2)}`);
// console.log(`The Reminder of ${numb1} & ${numb2} is: ${Number(numb1) % Number(numb2)}`);


// document.getElementById("box").innerHTML = `The Sum of ${numb1} & ${numb2} is: ${Number(numb1) + Number(numb2)}`;
// document.getElementById("box2").innerHTML = `The Subtraction of ${numb1} & ${numb2} is: ${Number(numb1) - Number(numb2)}`;


// IF Else:
// var marks = 40;

// if(marks > 80){
//     console.log("Congrats! You are Pass...");
// }else{
//     console.log("Congrats! You are Fail...");
// }

// var age =  10;

// if(age  > 18){
//     console.log("You can drive");
// }else{
//     console.log("You can not drive");
// }


// var Per = 8;

// if(Per > 80){
//     console.log("Grade: A");
// }else if(Per > 60){
//     console.log("Grade: B");
// }else if(Per > 50){
//     console.log("Grade: C");
// }else{
//     console.log("Grade: F");
// }






// Functions
// 1) Buildin Function / Pre-Build Function
// 2) User-Define Function


// function fun1(){
//     console.log("I am User define Function...");
// }


// function sum(){
//     var x = prompt("Enter First Number");
//     var y = prompt("Enter Second Number");

//     console.log(Number(x) + Number(y));
// }



























// function grade(){
//     var Per = prompt("Enter your marks to check Grade: ");

// if(Per > 80){
//     document.getElementById("grade_output").innerHTML = "Grade: A"
// }else if(Per > 60){
//     document.getElementById("grade_output").innerHTML = "Grade: B"
// }else if(Per > 50){
//     document.getElementById("grade_output").innerHTML = "Grade: C"
// }else{
//     document.getElementById("grade_output").innerHTML = "Grade: F"
// }
// }




// Variable Scope

// Global Variable
// let x = 67;

// function sum(){
//     // Local Variable
//     let y = 89;

//     console.log(y);
// }

// console.log(y);

// sum();




// Loop (for , While, Do While) 
// For 
// for(let a=0; a<10; a++){
//     console.log("Using For Loop", a);
// }

// While
// let b=0;
// while(b<5){
//     console.log("Using While Loop", b);
//     b++;
// }

// Do-While
// let c=0;
// do{
//     console.log("Using Do-While Loop", c);
//     c++;
// }while(c<5);




// function tableGenet(){

//     document.getElementById("pera").innerHTML = "";

//     let tableOf = prompt("Enter Number to generate table: ");

//     for(let a=1; a<11; a++){
//         // console.log(`${tableOf} x ${a} = ${tableOf*a}`);
//         document.getElementById("pera").innerHTML += `${tableOf} x ${a} = ${tableOf*a} <br>`
//     }
// }




function sum() {
    let num1 = document.getElementById("inp1").value
    let num2 = document.getElementById("inp2").value

    document.getElementById("result").value = Number(num1) + Number(num2);
}

function sub() {
    let num1 = document.getElementById("inp1").value
    let num2 = document.getElementById("inp2").value

    document.getElementById("result").value = Number(num1) - Number(num2);
}

function clr() {
    document.getElementById("result").value = "";
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
}




function addClass(){
    document.getElementById("box").classList.add("box");
}

function remClass(){
    document.getElementById("box").classList.remove("box");
}

function toggleClass(){
    document.getElementById("box").classList.toggle("box");
}


function accShow(){
    document.getElementById("acc_body").classList.toggle("active");
    document.getElementById("iconminus").classList.toggle("iconShow")
    document.getElementById("iconplus").classList.toggle("iconShow")
}


//  let per = document.getElementById("pera").innerHTML;

// let pera = document.getElementsByClassName("pera")[1].innerHTML;

// let qs = document.querySelectorAll("p");

//  console.log(qs)


let dummyBtn = document.getElementById("dummyBtn");

dummyBtn.addEventListener("click", dummyFun);


function dummyFun(){
    console.log("Clicked......!");
}


let StylingBtn = document.getElementById("StylingBtn");

StylingBtn.addEventListener("click", function(){
    document.getElementById("box5").style.color = "white"
    document.getElementById("box5").style.backgroundColor = "gray"

})


let craeteBtn = document.getElementById("craeteBtn");

craeteBtn.addEventListener("click", function(){

    let clr = document.getElementById("clr").value
    let wd = document.getElementById("wd").value
    let hg = document.getElementById("hg").value

    document.getElementById("newBox").style.backgroundColor = clr;
    document.getElementById("newBox").style.width = `${wd}px`;
    document.getElementById("newBox").style.height = `${hg}px`;

})