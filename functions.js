
// let numbers=printVarialbles(6,7);
// console.log (printVarialbles(45,546,456,67,3))
// console.log (localVar);


// function printVarialbles(value1,value2,value3=5){
//     let arrayOfValues =[value1,value2,value3];
//     let localVar=3;
//     var testinVar=5;
//     console.log(localVar);
//     return arrayOfValues;
// }
// let localVar=10;
// console.log(localVar)
// //console.log(arrayOfValues);
// //console.log(value1);
function fun (){
let input = prompt("massege");
while(input==null||Number(input)==0){

input=prompt("massege");

}
}

function twoNumber(){
    do{
        var num1= prompt("enter nember 1 ");        
        var num2=  prompt("enter number 2 ");
        if(num1!=null&&num2!=null)
        sum=Number(num1)+Number(num2);
        console.log (`${num1}+${num2}=${sum}`);
    }
    while(num1==null&&num2==null){
    }
}