let quantidade=prompt("Quantas cartas você deseja virar?")
for(let carta=1;carta<=quantidade;carta++){
let naipe = Math.random()*3 
if(naipe==0){
  naipe='copas'
}
else if(naipe==1){
 naipe= 'paus'
}
else if(naipe==2){
 naipe= 'espadas'
}
else{
  naipe='ouros'
}
let numero = parseInt(Math.random()*9);
numero=numero+1
console.log(`Sua carta é um ${numero} de ${naipe}`)
}
