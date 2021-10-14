var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let n = num;
let arr = [];
let quadra = [];

if(num >=1 && num <= 100){
    while (num + 1 > 0){   
    arr.push((dados.shift().split(" ")).map((value)=>parseInt(value)));
    num--;
    }
    for(let i = 0; i < arr.length - 1 ; i++){   
    for(let j = 0; j < arr.length -1; j++){
        if((arr[i][j] == 1 && arr[i][j + 1] == 1)
        ||(arr[i][j] == 1 && arr[i + 1][j] ==1)
        ||(arr[i][j + 1] == 1 && arr[i + 1][j + 1])
        ||(arr[i + 1][j] == 1 && arr[i + 1][j + 1] == 1)
        ||(arr[i][j] == 1 && arr[i + 1][j + 1] == 1)
        ||(arr[i][j + 1] == 1 && arr[i + 1][j] == 1)){
            quadra.push("S");
        }else{
           quadra.push("U");
        }
       
    }
   
    }

    while(quadra.length > 0){
        console.log(quadra.splice(0,n).join(''));
    }
}