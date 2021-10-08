var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let arr = (dados.shift()).split(" ");

let contM2 = 0;
let contM3 = 0;
let contM4 = 0;
let contM5 = 0;
let i = 0;

while(arr[i]){
    if(arr[i] % 2 === 0){
        contM2 ++;
    }
    if(arr[i] % 3 === 0){
        contM3 ++;
    } 
    if(arr[i] % 4 === 0){
        contM4 ++;
    }
    if(arr[i] % 5 === 0){
        contM5 ++;
    }
        
    i++;
          
}
    
console.log(contM2 + " Multiplo(s) de 2");
console.log(contM3 + " Multiplo(s) de 3");
console.log(contM4 + " Multiplo(s) de 4");
console.log(contM5 + " Multiplo(s) de 5");