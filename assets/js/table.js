// button
const tfo = document.querySelector('#tfobutton');
const tai = document.querySelector('#taibutton');
const tssr = document.querySelector('#tssrbutton');
const dwwm = document.querySelector('#dwwmbutton');
//div
const tfoFormation = document.querySelector('#tfoFormation');
const taiFormation = document.querySelector('#taiFormation');
const tssrFormation = document.querySelector('#tssrFormation');
const dwwmFormation = document.querySelector('#dwwmFormation');


//Modification Menu
tfo.addEventListener('click',function(){

    tfo.classList.add('formActive');
    tai.classList.remove('formActive');
    tssr.classList.remove('formActive');
    dwwm.classList.remove('formActive');

    tfoFormation.classList.add('active');
    tfoFormation.classList.remove('noActive')
    taiFormation.classList.add('noActive');
    tssrFormation.classList.add('noActive');
    dwwmFormation.classList.add('noActive');

});

tai.addEventListener('click',function(){
    tai.classList.add('formActive');
    tfo.classList.remove('formActive');
    tssr.classList.remove('formActive');
    dwwm.classList.remove('formActive');

    taiFormation.classList.add('active');
    taiFormation.classList.remove('noActive')
    tfoFormation.classList.add('noActive');
    tssrFormation.classList.add('noActive');
    dwwmFormation.classList.add('noActive');
});

tssr.addEventListener('click',function(){
    tssr.classList.add('formActive');
    tfo.classList.remove('formActive');
    tai.classList.remove('formActive');
    dwwm.classList.remove('formActive');

    taiFormation.classList.add('noActive');
    tfoFormation.classList.add('noActive');
    tssrFormation.classList.add('active');
    tssrFormation.classList.remove('noActive');
    dwwmFormation.classList.add('noActive');
});

dwwm.addEventListener('click',function(){
    dwwm.classList.add('formActive');
    tfo.classList.remove('formActive');
    tssr.classList.remove('formActive');
    tai.classList.remove('formActive');

    taiFormation.classList.add('noActive');
    tfoFormation.classList.add('noActive');
    tssrFormation.classList.add('noActive');
    dwwmFormation.classList.add('active')
    dwwmFormation.classList.remove('noActive');
});