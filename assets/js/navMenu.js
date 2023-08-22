// boutton pour les affichage
const formation = document.getElementById('formation');
const competence = document.getElementById('skill');

//div a afficher

const formationBlock = document.getElementById('formationBlock');
const competenceBlock = document.getElementById('conpetenceBlock');



formation.addEventListener('click', function () {
   
    toggleBlockDisplay(formationBlock, true);
    toggleBlockDisplay(competenceBlock, false);

    buttonstyle(formation, true);
    buttonstyle(competence, false);
});

competence.addEventListener('click', function () {
   
    toggleBlockDisplay(formationBlock, false);
    toggleBlockDisplay(competenceBlock, true);
    buttonstyle(formation, false);
    buttonstyle(competence, true);
});

function toggleBlockDisplay(element, show) {
    element.classList.toggle('blockDisplayNone', !show);
    element.classList.toggle('blockDisplay', show);
}

function buttonstyle(element,show){
element.classList.toggle('closedButton',!show);
element.classList.toggle('openButton',show);
}