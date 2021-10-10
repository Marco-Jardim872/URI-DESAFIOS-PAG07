var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
while(num){
    let val = (dados.shift().trim()).split(" ");
    let hor = parseInt(val.shift());
    let min = parseInt(val.shift());
    let por = parseInt(val.shift());
    if(hor < 10){
        hor = "0"+ hor;
    }
    if(min < 10){
        min = "0"+ min;
    }
    if(por == 1){
        console.log(hor + ":" + min + " - A porta abriu!");
    }else if(por === 0){
        console.log(hor + ":" + min + " - A porta fechou!");
    }
    
   num--;
}