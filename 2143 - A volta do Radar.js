var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let testes = parseInt(dados.shift());

    while(testes > 0 && testes <= 100){

        let totalPes = parseInt(dados.shift());
        let pesPonta;
        let totalPedidos;
        if(totalPes % 2 ===0){
            pesPonta = 2;
            totalPedidos = ((totalPes - 2) * 2) + pesPonta;
            console.log(totalPedidos);
        }else if(totalPes % 2 !==0){
            pesPonta = 1;
            totalPedidos = ((totalPes - 1) * 2) + pesPonta;
            console.log(totalPedidos);
        }
        testes--;
    }

}