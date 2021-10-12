var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let med = dados.shift().split(" ");
let lin = parseInt(med.shift());
let col = parseInt(med.shift());
let linArr = [];
let arr = [];
let pos;

while(lin > 0){
    linArr = ((dados.shift()).trim()).split(" ");
    arr.push(linArr.map(value=>parseInt(value)));
    lin--;
}

for (let i = 1; i < arr.length-1; i++){
    for(let j = 1; j < col-1; j++){
        if(arr[i][j] === 42 && arr[i][j-1]==7 && arr[i][j+1]==7
            && arr[i-1][j-1]==7 && arr[i-1][j+1]==7 && arr[i-1][j] == 7
            && arr[i+1][j-1]==7 && arr[i+1][j+1]==7 && arr[i+1][j] == 7){
                    pos =[(i+1), (j+1)].join(" ");
                    console.log(pos);
        }

    }
    
}
if(!pos){
    console.log("0 0");
}
