var dados = input.split('\n');


while(dados.length > 0){
    let valores = dados.shift().split(" ");
    let x1 = parseInt(valores.shift());
    let y1 = parseInt(valores.shift());
    let x2 = parseInt(valores.shift());
    let y2 = parseInt(valores.shift());
    let vel = parseInt(valores.shift());
    let r1 = parseInt(valores.shift());
    let r2 = parseInt(valores.shift());
    if((x1,y1,x2,y2,vel,r1,r2) >= 0 && (x1,y1,x2,y2,vel,r1,r2) <= 100){
        let dis = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
   
        dis += (vel * 1.50);
        let disDano = r1 + r2;
    
        console.log(dis  <= disDano ? "Y" : "N");
    }
    
}
