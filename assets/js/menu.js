var timeoutId = null;

var previousWidth = window.innerWidth; // Stocke la largeur précédente de la fenêtre

window.addEventListener('resize', function() {
    var currentWidth = window.innerWidth; // Obtient la largeur actuelle de la fenêtre

    if (currentWidth !== previousWidth) { // Vérifie si la largeur a changé
        clearTimeout(timeoutId); // Réinitialise le délai à chaque redimensionnement

        timeoutId = setTimeout(function() {
            location.reload();
        }, 0); // Temps de délai en millisecondes (par exemple, 0 ms)

        previousWidth = currentWidth; // Met à jour la largeur précédente avec la nouvelle largeur
    }
});


if (window.matchMedia("(max-width: 1023px)").matches) {

    const burger = document.querySelector('#burger');
    const close = document.querySelector('#close');
    const menu = document.querySelector('.menuMobile');

    menu.classList.remove('menucomputer');
    burger.addEventListener('click', function () {
        menu.style.display = 'flex';
        burger.style.display = 'none';

    });

    close.addEventListener('click', function () {
        menu.style.display = 'none';
        burger.style.display = 'flex';
    });

    menu.addEventListener('click', function () {
        menu.style.display = 'none';
        burger.style.display = 'flex';
    });

} else {
    const menuD = document.querySelector('.menuComputer');
    menuD.classList.remove('menuMobile');

}


const buttonNav = document.querySelectorAll('.buttonNav');
const idElements = document.querySelectorAll('.test');

buttonNav.forEach(function(button) {
  button.addEventListener('click', function() {
    buttonNav.forEach(function(btn) {
      btn.classList.remove('droid');
    });
    idElements.forEach(function(element) {
      element.classList.remove('droid');
      element.classList.add('noDroid');
    });

    const clickedElement = button.querySelector('.test');
    
    if (clickedElement) {
      clickedElement.classList.add('droid');
      clickedElement.classList.remove('noDroid');
    }
  });
});
/**
 * // link
const profDroid = document.querySelector('#profDroid'); 
const compDroid = document.querySelector('#compDroid');

//img
const imgProf = document.querySelector('#imgProf');
const imgComp = document.querySelector('#imgComp');
const test = document.querySelectorAll('.test');

 * profDroid.addEventListener('click', function(){
    imgProf.classList.add('droid'); 
    imgProf.classList.remove('noDroid'); 
    imgComp.classList.remove('droid'); 
    imgComp.classList.add('noDroid');
}); 
 
compDroid.addEventListener('click', function(){
    imgComp.classList.add('droid'); 
    imgComp.classList.remove('noDroid'); 
    imgProf.classList.remove('droid'); 
    imgProf.classList.add('noDroid');
}); 
 */
