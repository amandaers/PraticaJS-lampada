let turnOnOff = document.getElementById(`turnOnOff`);
let lamp = document.getElementById(`lamp`);

function isLampBroken(){
    return lamp.src.indexOf(`quebrada`)
}
function lampOn(){
    lamp.src = `ligada.jpg`
    
}

function lampOff(){
    lamp.src=`desligada.jpg`
    
}

function lampBroken(){
    lamp.src=`quebrada.jpg`
}

function lampOnOff(){
    if( turnOnOff.textContent== `Ligar`){
        lampOn();
        turnOnOff.textContent=`Desligar`;
    }else{
        lampOff();
        turnOnOff.textContent= `Ligar`;
    }
}
turnOnOff.addEventListener (`click`, lampOnOff);
lamp.addEventListener(`mouseover`, lampOn);
lamp.addEventListener(`mouseleave`, lampOff);
lamp.addEventListener(`dblclick`,lampBroken);