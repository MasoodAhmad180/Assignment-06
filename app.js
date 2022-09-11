// Program 01
// Write a ts program to print all natural nuumbers from 1 to n  using while loop
// var index1:number = 1;
// while (index1 <=50) {
//     console.log(`${index1}`);
//     index1++
// }
// Program 02
// Write a ts program to print all natural nuumbers in revers from n to 1  using while loop
// var index2:number = 50;
//  while (index2 >= 1) {
//      console.log(`${index2}`);
//       index2--
//  }
// Program 03
// Write a ts program to print all alpahbets from a to z  using while loop
// var index3:string = "A";
// while (index3 <= "Z") {
//     console.log(`${index3}`);
//     index3++
// }
// Program 04
// Write a ts program to print even numbers from 1 to 100 using while loop
// var index4:number = 2;
// while (index4 <= 100) {
//     if (index4 % 2 == 0) {
//         console.log(`${index4}`);
//     }
//     index4++
// }
// Program 05
// Write a ts program to print odd numbers from 1 to 100  using while loop
// var index5:number = 1;
// while (index5 <= 100) {
//     if (index5 % 2 != 0) {
//         console.log(`${index5}`);
//     }
//     index5++
// }
// Program 06
// Write a ts program to print sum of all numbers from 1 to 100  using while loop
// var index6:number = 1;
// while (index6 <= 100) {
//    if (true) {
//     console.log(`${index6 * (index6 +1) / 2}`);
//    }
//    index6++
// }
// Program 07
// Write a ts program to print sum of even numbers from 1 to 100  using while loop
// var index7:number = 1;
// while (index7 <= 100) {
//    if (index7 % 2 == 0) {
//     console.log(`${index7 * (index7 +1) / 2}`);
//    }
//    index7++
// }
// Program 08
// Write a ts program to print sum of all numbers from 1 to 100  using while loop
// var index8:number = 1;
// while (index8 <= 100) {
//    if (index8 % 2 != 0) {
//     console.log(`${index8 * (index8 +1) / 2}`);
//    }
//    index8++
// }
// Program 09
// Write a ts program to print multiplication table of any number
// for (let index = 1; index <= 10; index++) {
//     console.log(`2 * ${index} = ${2 * index} `); 
// }
// Program 10
// Write a ts program to count tatal digits in a number
// function counter(a:string){
//     console.log(a.length);
//  }
//  var number:any = prompt("234567") 
//  counter(number)
// Program 11 , 12
// Write a ts program to find first and last digit of a number and sum of those numbers
//     function findDigits(n:number){
//     }
//    var num:number = 34567;
//    findDigits(num)
//    var lastDigit:number = num % 10
//    console.log( "Last Digit is" , lastDigit);
//    var firstDigit:any = num ;
//    findDigits(num)
//    while (firstDigit > 10) {
//       firstDigit = parseInt( firstDigit / 10 )
//       firstDigit
//    }
//   console.log( "firstDigit is",firstDigit);
//   // Sum of those numbers
//   if (lastDigit) {
//     console.log("sum of last digit",`${lastDigit * (lastDigit +1) / 2}`);
//   }
//   else if(firstDigit){
//     console.log(`${firstDigit * (firstDigit +1) / 2}`);
//   }
// Program 13
// Write a ts program to find factor of a number
// var num13:any = prompt("Enter the number");
// for (let index = 1; index <= num13; index++) {
//   if (num13 % index == 0) {
//     console.log(index);
//   }  
// }
// Program 14
// Write a ts program to find factorial of a number
// var num14:any = prompt("Enter the number");
// var fact:number = 1;
// if (num14 == 0) {
//     console.log(`The factorial of ${num14} is 1`);   
// }
// else{
//     for (let index14 = 1; index14 <= num14; index14++) {
//       fact = fact * index14;
//       console.log(`The factorial of ${num14} is ${fact}`);
//     }
// }
// Program 15
// Write a ts program to check whether number is prime or not
// var num15:any = prompt("Enter the number");
// if(num15 == 0){
//     console.log(`${num15} is neither prime nor composite number`);  
// }
// else if (num15 < 1) {
//     console.log(`${num15} is not prime number`);
// }
// else{
//     for (let index15 = 15; index15 < num15; index15++) {
//         if (num15 % index15 == 0) {
//             var result:any =`${num15} is not prime number`;
//             break;
//         }
//         else{
//             var result:any =`${num15} is a prime number`;
//         }  
//     }
// }
//         console.log(result);
// Program 16
// Write a ts program to print all prime numbers from 1 to 100
var index16 = 1;
while (index16 <= 100) {
    if (index16 % 2 == 0) {
        var result = "".concat(index16, " is not prime number");
        break;
    }
    else {
        var result = "".concat(index16, " is a prime number");
    }
    index16++;
    console.log(result);
}
// Program 26
// Write a ts program to check whether number is prime or not
//  var number26:any = prompt("Enter the number")
//  if (number26 % 2 != 0) {
//     console.log(`${number26} is a prime number`);
//  }
//  else if (number26 % 2 == 0) {
//     console.log(`${number26} is not prime number`)
//  }
// Program 27
// Write a ts program to print all prime numbers from number 1 to 100
//  var number3:number = 23;
//  if (number3 > 1) {
//     for (let i = 2; i < number3 ; i++) {
//         if (number3 % i == 0) {
//            isPrime =  
//         }
//     }
//  }
// Program 28
// Write a ts program to print all prime numbers from number 1 to 100
// var index27:number = 1;
// while (index27 <= 100) {
//      if (index27 % 2 != 0) {
//     }
//     index27++
//  }
// //  console.log(`${index27} is prime number`);
