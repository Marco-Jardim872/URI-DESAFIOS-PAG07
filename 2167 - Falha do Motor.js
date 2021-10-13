var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let medVel = parseInt(dados.shift());
let elementos = dados.shift().split(" ");
let rpm = elementos.map((value)=>parseInt(value));
let val;
if( medVel > 1 && medVel <= 100){
    for (let i = 0; i < medVel - 1; i++) {
        if((rpm[i] > rpm[i + 1]) && rpm[i] >=0 && rpm[i] <= 10000){
            val = rpm.indexOf(rpm[i + 1]) + 1;
            console.log(val);
            break;
        }
    }
    if(!val){
        console.log("0");
    }
}