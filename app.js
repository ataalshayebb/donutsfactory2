// let name = prompt("Please Enter Your Name");
// console.log(name);


// while(true){
//     var gender =prompt("please enter gender");
// var s ;
// if(gender === "male"){
//     console.log(gender);
//     s= "mr." ;
//     // alert("hey ,"+s+""+name);
//     break;
// } else if(gender === "female")
//     {console.log(gender);
//         s ="ms.";
//         // alert("hey ,"+s+""+name);
//         break;
//     }
// else {
//     alert("Gender should be either male or female");
// }
// }

// alert("hey ,"+s+""+name);

// let order = prompt("do you want donuts, ice cream or coffe");
// // console.log(order)
// const ordarr = [name , gender , order];
// let info="" ;
// for(let i =0;  i<ordarr.length; i++){
//  info+=ordarr[i];
// console.log(info);
// }


// alert ("hey "+s+" " + name +", Your order is being prepared!" );

// var name = mo.firstName.value;

function prtt(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('namee').value;
    var age = document.getElementById('age').value;
    var order = document.getElementById('order').value;
    var gender ;
    var temp;
    if (document.getElementById("male").checked == true){
     gender = document.getElementById("male").value;
    }

     else{
        gender = document.getElementById("female").value;
    }

    if (document.getElementById("hot").checked == true){
       temp = document.getElementById("hot").value;
       }
   
        else{
           temp = document.getElementById("cold").value;
       }

       document.getElementById("info").innerHTML = 
       "Here is your order :) "+"<br>" +"<br>" +"<b>Name:</b> " + name + "<br>" +
       "<b>Age:</b> " + age + "<br>" +
       "<b>Order:</b> " + order + "<br>" +
       "<b>Gender:</b> " + gender + "<br>" +
       "<b>Temp:</b> " + temp;
}

document.getElementById("bt").addEventListener("click", prtt);





// console.log(5*3);         
// console.log("JavaScript" + 50  ); 
//console.log (17 % 5) ;        
// console.log (5 % 17 )  ;     
// console.log (5/10 )  ;      
// console.log (4 === ‘4’) ;      
// console.log (4 != 5)  ;
// console.log (7 <= 8) ;
//console.log ("Hello" + 5);
//  console.log (Math.ceil(x) ‐ Math.floor(x) )
// console.log (Math.pow(x,2))

// let q1 =prompt("enter a num");
// alert("your num is "+q1) ;

// let n1 =prompt("enter num 1");
// let n2 =prompt("enter num 2");
// if (n1>n2){
//     alert(n2+" , "+n1)
// }
// else{  alert(n1+" , "+n2)}

// let n3 =prompt("enter num 1");
// let n4 =prompt("enter num 2");
// if (n3>n4){
//     alert("the larger number is "+n3);
// }
// else if (n4>n3){
//     alert("the larger number is "+n4);
// }
// else { alert("the numbers are equal");}

// let n5 =prompt("enter num 1");
// let n6 =prompt("enter num 2");
// let sum =parseFloat(n5)+ parseFloat(n6);
// alert("the total is "+ sum);
// console.log(typeof n5);

// let y = prompt("enter a num");
// switch(parseInt(y)){
// case 1 :
//     alert("ONE");
//   break;
//   case 2 :
//     alert("TWO");
//   break;
//   case 3 :
//     alert("THREE");
//   break;
//   case 4 :
//     alert("FOUR");
//   break;
//   case 5 :
//     alert("FIVE");
//   break;
//   case 6 :
//     alert("SIX");
//   break;
//   case 7 :
//     alert("SEVEN");
//   break;
//   case 8 :
//     alert("EIGHT");
//   break;
//   case 9 :
//     alert("NINE");
//   break;
//   case 0 :
//     alert("ZERO");
//   break;

//   default:
//   alert("TRY AGAIN");
// }


// q1
// for(let i = 0 ;i<=5;i++){
//     alert(i);
// }
 
// q2   let all="";

// for(let i = 0 ;i<=5;++i){
    
//     all+=i+" " ;  
//     alert(all);
// }

// q3
// let total = "";

// for (let i = 0 ; i<=20 ; i++){

//     if (i%3 == 0){
//         total+=i+" ";

//     }
//     alert(total);
// }

// q4  while(true){
// let value = prompt("Please enter a number between 0 and 100");
//  if (value>0 && value<100){
//     alert("Your number is "+value);
//     break;
//  }
//     else {
//         alert("you number is out of range ");
//     }

// }

// q5 let valu= prompt("please enter a number");
// let total=0;
// for(let i = valu; i>0;i--){
//  total=parseInt(total)+parseInt(i);
// }
// alert(total);
