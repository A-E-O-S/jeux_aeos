// SCREENS
let screenLanding = document.getElementById('screenLanding');
let screenIntroText = document.getElementById('screenIntroText');
let screenGame = document.getElementById('screenGame');
let gameOverScreen = document.getElementById('gameOver');
let gameEndScreen = document.getElementById('gameEnd');
let game = document.getElementById('game');

gameOverScreen.style.display = 'none';
gameEndScreen.style.display = 'none';

// BUTTONS LANDING -> INTRO TEXT -> START GAME
let playBtn = document.getElementById('playBtn');
let nextBtn = document.getElementById('nextBtn');
screenIntroText.style.display = 'none';

// LANDING BUTTON
playBtn.addEventListener('click', function() {
  screenLanding.style.display = 'none';
  screenIntroText.style.display = 'block';
});

// AFTER INTRO TEXT - NEXT BUTTON
nextBtn.addEventListener('click', function() {
  screenLanding.style.display = 'none';
  screenIntroText.style.display = 'none';
  game = new Phaser.Game(config);
});
