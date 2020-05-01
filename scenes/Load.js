class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        // set load path
        this.load.path = "assets/";
        // take care of all of our asset loading now
        this.load.image('groundScroll', 'ground.png');
        this.load.image('dragonGirl', 'dragongirl.png');
        this.load.image('background', 'background pink stars.png');
<<<<<<< HEAD
        this.load.image('menu', 'new_menu_screen.png');
=======
        this.load.image('menu', 'menu screen.png');
>>>>>>> 8829a2c9bc5ad1577fde33052c63783ab77bd724
        this.load.image('obstacle', 'dragonGirl.png');
        this.load.image('upGem', 'upwards gem.png');
        this.load.image('downGem', 'downwards gem.png');
        this.load.image('blueGem', 'gem blue 3.png');
        this.load.image('blueGemClear', 'gem blue.png');
        this.load.image('icicle', 'icicle.png');
<<<<<<< HEAD
        this.load.image('planet', 'planet.png');
        this.load.image('moon', 'moon.png');
        this.load.image('gameover', 'gameoverscreen.png');
        this.load.image('fire', 'fire-orange.png');
        


=======
>>>>>>> 8829a2c9bc5ad1577fde33052c63783ab77bd724

        //this.load.spritesheet('fly', 'Dragongirlspritesheet.PNG', {frameWidth:120, frameHeight:120, startFrame:0, endFrame:5});
        this.load.spritesheet('fly', 'Dragongirlspritesheet_crop.png', {frameWidth:120, frameHeight:120, startFrame:0, endFrame:5});

        //load music
      /*  this.load.audio('menuMusic', 'Divinity.mp3');
        this.load.audio('playMusic', 'Forest Fracas.mp3');
        this.load.audio('gameOverMusic', 'The Icarus Requiem (main theme).mp3');
*/      this.load.audio('menuMusic', 'dragonLadyTheme.wav');
    }

    create() {
        //play music
        music = this.sound.add('menuMusic');
        music.play( {loop:true} );

        //add menu image
<<<<<<< HEAD
        this.add.image(-2, -20, 'menu').setOrigin(0).setScale(1.35, 1.35);
=======
        this.add.image(0, 0, 'menu').setOrigin(0).setScale(.32, .3);
>>>>>>> 8829a2c9bc5ad1577fde33052c63783ab77bd724

        //space bar as input
        spaceBar= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(spaceBar) && !Phaser.Input.Keyboard.UpDuration(spaceBar, 3000)) {
            //music.stop();
            this.scene.start("runnerScene");
        }
    }
}