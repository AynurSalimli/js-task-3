//Sade bolenlerin tapilmasi

let a = +prompt("Eded daxil edin")
 for(let i = 2; i <= a; i ++){
    let counter = 0;
    if (a % i == 0) {
        
        for(let b = 1; b <= i; b++){
            if (i % b == 0) {
                counter+=1;
            }
        }
        if(counter == 2){
            console.log(i);
        }
    }
 }

// Evvele ve sona 3 elave etmek
// let a = +prompt(["Eded daxil edin"])
// console.log(`3${a}3`);


// Input ile daxil olunan ədədin rəqəmlərindən ən böyüyünü tapın.
// let a = prompt("enter a number").split("").sort(function (a, b) { return a - b; }).at(-1);
// console.log(`${a}`);

// Input ile daxil olunan ədədin rəqəmlərindən tam ədədləri göstərin.
// let a = +prompt("Daxil edin")
// console.log(a.toString().split(""));

// Input ile daxil olunan ədədin rəqəmlərindən cüt ədədi göstərin.
// let a = prompt("enter a number").split("").sort(function (a, b) { return a - b; });
// for (let i = 0; i <= a.length; i++) {
//     if(a[i]%2==0) console.log(`${a[i]}`);
// }


// Input ile daxil olunan ədədin rəqəmlərindən cüt ədədi göstərin.
// let a = prompt("enter a number").split("").sort(function (a, b) { return a - b; }).at(-1);;
// for(let i = 0; i <= a.length; i++){
//     if( a[i] % 2 == 0){
//         console.log(a[i]);
//     }
// }




// Input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstərin.
// let a = prompt("enter a number");
// for (let i = 0; i < a.length; i++) {
//   let counter = 0;
//   for (let k = 1; k <= a[i]; k++) {
//     if (a[i] % k === 0) counter++;
//   }
//   if (counter == 2) {
//     console.log(`${a[i]}`);
//   }
// }

// Input ile daxil olunan ədədin reqmelerin sayi ve string ile tərsini tapın.

// let a = prompt("Ededi daxil edin")
// console.log(`Daxil olunan eded ${a.length} reqemlidir, ededin tersi ${a.split("").reverse().join("")}`);

// Input ile daxil olunan 1 ci ədədi daxil olunan 2 ci ədədin qüvvətinə yüksəldin.
// let a = +prompt("Ededi daxil edin")
// let b = +prompt("Quvveti daxil edin")
// console.log(`${a} ^ ${b} = ${(a ** b)}`);

// Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın.

// let a = prompt("Ededi daxil edin")
// let sum = 0

// for(let i = 0;i < a.length; i++){
//    let b = a[i] ** 2
//    sum += b
// }
// console.log(`Daxil olunan eded ${a}-dir ve reqemlerinin kvadratlari cemi ${sum}-e beraberdir`);



// Input ile daxil olunan ədədin 3 ededi string ile yan-yana yigilsin. Misal ucun: 3, 45, 10

// let a = prompt("Birinci ededi daxil edin")
// let b = prompt("Ikinci ededi daxil edin")
// let c = prompt("Ucuncu ededi daxil edin")

// console.log(a, b, c);


// Input ile daxil olunan ədədin 3 ededi string ile yan-yana ardicilliq ile yigilsin.

// let a = prompt("Birinci ededi daxil edin")
// let b = prompt("Ikinci ededi daxil edin")
// let c = prompt("Ucuncu ededi daxil edin")

// if (a >= b && a >= c){
//     if (b >= c) {
//         console.log(`${c} ${b} ${a}`);
//     }
//     else{
//         console.log(`${b} ${c} ${a}`);
//     }
// }

// else if (b >= a && b >=c) {
//     if (a >= c) {
//         console.log(`${c} ${a} ${b}`);
//     }
//     else{
//         console.log(`${a} ${c} ${b}`);
//     }
// }

// else if(c >= a && c >= b){
//     if (a >= b) {
//         console.log(`${b} ${a} ${c}`);
//     }
//     if(b >= a){
//         console.log(`${a} ${b} ${c}`);
//     }
// }

// else{
//     console.log("There is something wrong with entered number");
// }


// Isifadeciden alinan n sayda ededden necesinin tam eded oldugunu tapin


// Isifadeciden alinan n sayda ededden necesinin sade eded oldugunu tapin


// Istifadeciden alinan n sayda ededden necesinin murekkeb eded oldugunu tapin


// Input ile daxil olunan ededden sonraki ilk sade ededi tapin


// Istifadecinin daxil etdiyi ededin kok altini tap

// var a = +prompt("Ededi daxil edin")
// console.log(`Kokalti ${a} = ${a ** 0.5}`);


// var b = +prompt("Ededi daxil edin")
// console.log(`Kokalti ${b} = ${Math.sqrt(b)}`);

// var a = +prompt("Nece eded daxil etmek isteyirsiniz")
// var b = +prompt("")


// Istifadeci 0 daxil edenedek edelerin cemini tapin.

// let a = +prompt("Nece eded daxil etmek isteyirsiniz?")
// let sum = 0

// for (let i = 0; i < a; i++) {
//     let b = +prompt("Ededleri daxil edin")
//     sum += b
// }
// console.log(sum);


// Input ile daxil olunan 3 ededden ortancili tapan funksiya yazin.

// let a = prompt("Enter the first number")
// let b = prompt("Enter the second number")
// let c = prompt("Enter the third number")

// if (a > b && a > c) {
//     if (b > c) {
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// else if (c > a && c > b) {
//     if (a > b) {
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }

// else if (b > a && b > c){
//     if (a > c) {
//         console.log(a);
//     }
//     else{
//         console.log(c);
//     }
// }

// else{
//     console.log("Something is wrong with your entered numbers");
// }

// Array icerisinde nece cut element var

// var arr = [22, 25, 49, 19, 20, 44]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }

// Array icerisinde nece tek element var

// var arr = [22, 25, 49, 19, 20, 44]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         console.log(arr[i]);
//     }
    
// }