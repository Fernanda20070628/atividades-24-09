let numero = Number(prompt ('Digite a quantidade de elefantes desejada:'));


for(let e=1; e<=numero; e ++){
    if(e==1){
        var plural='incomoda'
    }
    else{
        var plural = 'incomodam'
    }
    let par = e + 1 
    console.log(`${e}  elefantes ${plural}  muito mais, ${par} incomodam, incomodam muito maaais`)
}

