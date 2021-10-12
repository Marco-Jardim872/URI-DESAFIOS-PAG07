var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let med = dados.shift().split(" ");
let arr = [];
let arr2 = [];
let result;
if(num > 1 && num <= 100){
    for(let i = 0; i < med.length - 1; i++) {
        if(parseInt(med[i]) > parseInt(med[i + 1])) {
            arr.push(1);
        }else if(parseInt(med[i]) < parseInt(med[i + 1] )){
            arr.push(0);
        }else if(parseInt(med[i]) == parseInt(med[i + 1] )){
            arr.push("false");
        }
    }
    if(arr.length == 1){
        arr2.push(arr[0]);
    }
    for(let i = 0; i < arr.length - 1; i++) {
        
        if((arr[i] !== arr[i + 1]) && (arr[i] !== "false" && arr[i + 1] !== "false")) {
            arr2.push("true");
        }else{
            arr2.push("false");
        }
    }
    result = arr2.every(value => value == 'true');
   
    if(result === true || (arr2.length == 1 && arr2[0] !== "false")){
        console.log("1");
    }else if(result === false){
        console.log("0");
    }
}

