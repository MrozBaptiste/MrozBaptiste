var skillsMobile = document.querySelectorAll('#formationMobile .skill');
var currentSkillMobile = 0;
var touchstartX = 0;
var touchendX = 0;

// Ajouter les gestionnaires d'événements tactiles
document.addEventListener('touchstart', function(event) {
  touchstartX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  // Vérifier la distance de glissement
  var distance = touchendX - touchstartX;
  if (distance > 50) {
    // Glissement vers la droite, afficher la compétence précédente
    showPreviousSkillMobile();
  } else if (distance < -50) {
    // Glissement vers la gauche, afficher la compétence suivante
    showNextSkillMobile();
  }
}

function showPreviousSkillMobile() {
  skillsMobile[currentSkillMobile].classList.remove('active');
  currentSkillMobile = (currentSkillMobile - 1 + skillsMobile.length) % skillsMobile.length;
  skillsMobile[currentSkillMobile].classList.add('active');
}

function showNextSkillMobile() {
  skillsMobile[currentSkillMobile].classList.remove('active');
  currentSkillMobile = (currentSkillMobile + 1) % skillsMobile.length;
  skillsMobile[currentSkillMobile].classList.add('active');
}
