let arr = feed;


let one = arr.length
document.getElementById("one").innerHTML = one;

let two = arr[5].pranesimas.tekstas
document.getElementById("two").innerHTML = two;

arr[5].pranesimas.tekstas = 'Naujai pakeistas tekstas'
arr[5].pranesimas.spalva = 'Rūžava :)'
let tekstas = arr[5].pranesimas.tekstas
let spalva = arr[5].pranesimas.spalva
document.getElementById("tekstas").innerHTML = tekstas;
document.getElementById("spalva").innerHTML = spalva;

arr.unshift({autorius: 'Autorius', tekstas: 'Testas', kiekis: 5, grupe: { vardas: 'Kestas', amzius: 65 }})
document.getElementById("objektas").innerHTML = (arr[0].autorius+' '+arr[0].tekstas+' '+arr[0].kiekis+' {'+arr[0].grupe.vardas+', '+arr[0].grupe.amzius+'}');

document.getElementById("ilgis").innerHTML = arr.length;







console.log(arr);

