var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let valores;
let compra;
let pag;
while(compra !== 0 && pag !==0){
    valores = dados.shift().split(" ");
    compra = parseInt(valores.shift());
    pag = parseInt(valores.shift());
    if(compra === 0 && pag === 0){
        break;
    }
    let arr = [2,5,10,20,50,100];
    let cont = [2,5,10,20,50,100];
    let trocoPossivel = [];
    let troco = pag - compra;

    while(arr.length >  0){
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < cont.length; j++) {
                trocoPossivel.push(arr[i] + cont[j]);
            }
       
            cont.shift();
        }
        arr.shift();
    }

    if(trocoPossivel.some((value)=> value == troco)){
        console.log("possible");
    }else{
        console.log("impossible");
    }
}

