var config = {
    // La type propriété peut être Phaser.CANVAS, Phaser.WEBGL ou Phaser.AUTO.
    // C'est le contexte de rendu que vous souhaitez utiliser pour votre jeu.
    // La valeur recommandée est celle Phaser.AUTOqui essaie automatiquement d'utiliser WebGL,
    //  mais si le navigateur ou l'appareil ne le prend pas en charge, il reviendra à Canvas.
    type: Phaser.AUTO,
    // Les propriétés width et height définissent la taille de l'élément de canevas que Phaser créera. Dans ce cas 800 x 600 pixels.
    //  Votre monde de jeu peut être de n'importe quelle taille, mais c'est la résolution dans laquelle le jeu s'affichera.
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
