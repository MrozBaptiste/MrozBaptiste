const dwwm = document.getElementById('dwwm'); 
const tssr = document.getElementById('tssr'); 
const tai = document.getElementById('tai'); 

const dwwmBlock =document.getElementById('dwwmBlock');
const tssrBlock =document.getElementById('tssrBlock');
const taiBlock =document.getElementById('taiBlock');

dwwm.addEventListener('click',function(){
    formBlockDisplay(dwwmBlock,true); 
    formBlockDisplay(tssrBlock,false); 
    formBlockDisplay(taiBlock,false); 
    buttonStyleForm(dwwm, true);
    buttonStyleForm(tssr, false);
    buttonStyleForm(tai, false);
});

tssr.addEventListener('click',function(){
    formBlockDisplay(dwwmBlock,false); 
    formBlockDisplay(tssrBlock,true); 
    formBlockDisplay(taiBlock,false); 
    buttonStyleForm(dwwm, false);
    buttonStyleForm(tssr, true);
    buttonStyleForm(tai, false);
});

tai.addEventListener('click',function(){
    formBlockDisplay(dwwmBlock,false); 
    formBlockDisplay(tssrBlock,false); 
    formBlockDisplay(taiBlock,true); 
    buttonStyleForm(dwwm, false);
    buttonStyleForm(tssr, false);
    buttonStyleForm(tai, true);
});

function formBlockDisplay(element,show){
    element.classList.toggle('blockDisplayNoneFormation', !show);
    element.classList.toggle('blockDisplayFormation',show);
}
function buttonStyleForm(element,show){
    element.classList.toggle('nameFormationClosed',!show);
    element.classList.toggle('nameFormationOpen',show);
    }
