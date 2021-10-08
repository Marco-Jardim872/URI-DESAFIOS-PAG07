var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let count = 1;
while(dados.length > 0){
    
    let num = dados.shift();
    let maior = dados.shift();
    if(parseInt(maior) > parseInt(num)){
    let seq = RegExp(`${num}`,'g');
    let conjuntoSeq = maior.match(seq);
    
    if(conjuntoSeq){
        let qtSeq = conjuntoSeq.length;
        let pos = maior.lastIndexOf(conjuntoSeq[conjuntoSeq.length - 1]) + 1;
        console.log("Caso #" + count +":");
        console.log("Qtd.Subsequencias: " + qtSeq);
        console.log("Pos: " + pos + "\n");
        
    }else{
        console.log("Caso #" + count +":");
        console.log("Nao existe subsequencia\n");
        
    }
    }
    count++;
    
}