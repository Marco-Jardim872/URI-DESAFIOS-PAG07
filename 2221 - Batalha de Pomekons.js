var dados = input.split('\n');

let numIns = parseInt(dados.shift());

while(numIns > 0){
    let bonus = parseInt(dados.shift());
    let pokDabriel = (dados.shift().split(" ")).map((value)=>parseInt(value));
    let pokGuarte = (dados.shift().split(" ")).map((value)=>parseInt(value));
    let valGolpeDab = (pokDabriel[0] + pokDabriel[1])/2;
    let valGolpeGua = (pokGuarte[0] + pokGuarte[1])/2;
    (pokDabriel[2] % 2 === 0) ? (valGolpeDab += bonus) : valGolpeDab;
    (pokGuarte[2] % 2 === 0) ? (valGolpeGua += bonus) : valGolpeGua;
    if(valGolpeDab > valGolpeGua){
        console.log("Dabriel");
    }else if(valGolpeDab < valGolpeGua){
        console.log("Guarte");
    }else{
        console.log("Empate");
    }
    
    numIns--;
    
}
