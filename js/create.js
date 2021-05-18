function create ()
{
  player = this.physics.add.sprite(100, 450, 'dude');

     // il reçoit une légère valeur de rebond de 0,2.
     player.setBounce(0.2);
     player.setCollideWorldBounds(true);

     this.anims.create({
         // Il y a 9 images au total, 4 pour courir à gauche, 1 pour faire face à la caméra et 4 pour courir à droite
         key: 'left',
         // L'animation «gauche» utilise les images 0, 1, 2 et 3 et s'exécute à 10 images par seconde.
         // La valeur 'repeat -1' indique à l'animation de boucler.
         frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
         frameRate: 10,
         repeat: -1
     });

     this.anims.create({
         key: 'turn',
         frames: [ { key: 'dude', frame: 4 } ],
         frameRate: 20
     });

     this.anims.create({
         key: 'right',
         frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
         frameRate: 10,
         repeat: -1
     });
}
