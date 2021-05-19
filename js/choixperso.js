// SCREENS
let screenLanding = document.getElementById('screenLanding');
let screenIntroText = document.getElementById('screenIntroText');
let screenChoosePlayer = document.getElementById('screenChoosePlayer');
let screenGame = document.getElementById('screenGame');
let game = 0;

// BUTTONS LANDING -> INTRO TEXT -> START GAME
let playBtn = document.getElementById('playBtn');
let nextBtn = document.getElementById('nextBtn');
let startBtn = document.getElementById('startBtn');

screenChoosePlayer.style.display = 'none';
screenIntroText.style.display = 'none';

// LANDING BUTTON
playBtn.addEventListener('click', function() {
  screenLanding.style.display = 'none';
  screenChoosePlayer.style.display = 'none';
  screenIntroText.style.display = 'block';
});

// AFTER INTRO TEXT - NEXT BUTTON
nextBtn.addEventListener('click', function() {
  screenLanding.style.display = 'none';
  screenIntroText.style.display = 'none';
  screenChoosePlayer.style.display = 'block';
});

// START GAME BUTTON
startBtn.addEventListener('click', function() {
  screenLanding.style.display = 'none';
  screenIntroText.style.display = 'none';
  screenChoosePlayer.style.display = 'none';
  // TO DO --> CONDITIONNELS
  game = new Phaser.Game(config);
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
