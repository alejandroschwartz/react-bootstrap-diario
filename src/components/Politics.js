var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');

var first = document.getElementById('first');
first.addEventListener('click', mostrar1);
var second = document.getElementById('second');
second.addEventListener('click', mostrar2);

console.log('one');
console.log('first');


function mostrar1() {
    console.log('one');
    console.log('first');
} 

function mostrar2() {
    console.log('one');
    console.log('first');
} 






// var inicio = document.getElementById("botonDado");
// inicio.addEventListener('click', lanzar);
// var resutado = document.getElementById('resultadoDado'); 


// function lanzar() 
// {
//     var dado1 = Math.ceil(Math.random() * 6);
//     var dado2 = Math.ceil(Math.random() * 6);
//     console.log('Dado n°1 : ' + dado1);
//     console.log('Dado n°2 : ' + dado2);
    
//     switch (dado1)
//     {
//         case 1 : 
//             document.getElementById("num1").src="https://i.imgur.com/Hj2ofTv.png"; 
//             break;
//         case 2 : 
//             document.getElementById("num1").src="https://i.imgur.com/gOQ3wGL.png"; 
//            break;
//         case 3 : 
//             document.getElementById("num1").src="https://i.imgur.com/ZfrAds0.png"; 
//             break;
//         case 4 : 
//             document.getElementById("num1").src="https://i.imgur.com/TuQ1Po7.png"; 
//             break;
//         case 5 : 
//             document.getElementById("num1").src="https://i.imgur.com/YygSh45.png"; 
//            break;
//         case 6 : 
//             document.getElementById("num1").src="https://i.imgur.com/5vVOyO4.png"; 
//             break;
//     }

//     switch (dado2)
//     {
//         case 1 : 
//             document.getElementById("num2").src="https://i.imgur.com/Hj2ofTv.png"; 
//             break;
//         case 2 : 
//             document.getElementById("num2").src="https://i.imgur.com/gOQ3wGL.png"; 
//            break;
//         case 3 : 
//             document.getElementById("num2").src="https://i.imgur.com/ZfrAds0.png"; 
//             break;
//         case 4 : 
//             document.getElementById("num2").src="https://i.imgur.com/TuQ1Po7.png"; 
//             break;
//         case 5 : 
//             document.getElementById("num2").src="https://i.imgur.com/YygSh45.png"; 
//            break;
//         case 6 : 
//             document.getElementById("num2").src="https://i.imgur.com/5vVOyO4.png"; 
//             break;
//     }
// }