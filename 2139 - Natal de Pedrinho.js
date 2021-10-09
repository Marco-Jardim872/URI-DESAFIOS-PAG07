var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let mD = dados.shift().split(" ");
    let mes = parseInt(mD.shift());
    let dia = parseInt(mD.shift());
    let meses = [31,29,31,30,31,30,31,31,30,31,30,31];
    let mesesPassados = [];
    let diasPnatal = 0;
    
    for (let i = 0; i < meses.length; i++){
        if (i < mes - 1){
            mesesPassados.push(meses[i]);
        }
    }
    let diasPassados = mesesPassados.reduce((soma,value)=>soma + value,0) + dia;
    diasPnatal = 360 - diasPassados;
    if(diasPnatal > 1){
        console.log("Faltam " + diasPnatal + " dias para o natal!");
    }else if(diasPnatal < 0){
        console.log("Ja passou!");
    }else if(diasPnatal === 0){
        console.log("E natal!");
    }else if(diasPnatal == 1){
        console.log("E vespera de natal!");
    }   
}
