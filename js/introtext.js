 // A INTEGRER DANS PAGE D'ACCUEIL

var letexte = 'En 2071, alors que la paix régnait dans le royaume d’AEOS, une étrange maladie fit son apparition. Celle-ci dévasta le royaume et le peuple commença à se transformer en maléfiques créatures, dépourvues de sentiment et assoiffées par le sang. C’est à ce moment là que nomdupersonnage, perda son fidèle compagnon nomchien…Pars à la conquête du pays dans l’espoir de retrouver ton ami, mais gare aux zombies qui pourraient se trouver sur ton chemin….';

var montimer;
var cmpt = 0;

function typewriter() {
  displayText = document.getElementById('display');
  if (cmpt < letexte.length) {
    courant = displayText.innerHTML.substring(0, displayText.innerHTML.length - 1);
    courant += letexte.charAt(cmpt) + " ";
    displayText.innerHTML = courant;
  } else {
    displayText.innerHTML = "";
    cmpt = -1;
  }
  cmpt++;
  setTimeout("typewriter()", 100);
}
window.onload = function() {
  typewriter();
}
