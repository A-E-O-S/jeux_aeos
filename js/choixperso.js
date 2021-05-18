// SCREENS
let screenLanding = document.getElementById('screenLanding');
let screenChoosePlayer = document.getElementById('screenChoosePlayer');
let screenGame = document.getElementById('screenGame')

let playBtn = document.getElementById('playBtn');
let startBtn = document.getElementById('startBtn');

// LANDING BUTTON
playBtn.addEventListener('click', function() {
  screenLanding.style.display = 'none';
  screenChoosePlayer.style.display = 'block';
});


// CHARACTER CHOICE
let manRed = document.getElementById('manRed');
let girlRed = document.getElementById('girlRed');
let manScar = document.getElementById('manScar');
let girlGreen = document.getElementById('girlGreen');


manRed.addEventListener('click', () => {
  dude = 'manRed';
}, false)

girlRed.addEventListener('click', () => {
  dude = 'girlRed';
}, false)

manScar.addEventListener('click', () => {
  dude = 'manScar';
}, false)

girlGreen.addEventListener('click', () => {
  dude = 'girlGreen';
}, false)
