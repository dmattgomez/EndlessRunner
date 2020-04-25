class Runner extends Phaser.Scene {
    constructor() {
        super("runnerScene");
    }

    create() {
        //play music
        //music = this.sound.add('playMusic');
        music.play( {loop:true} );

        // variables and settings
        this.JUMP_VELOCITY = -500;
        this.GLIDE_VELOCITY = 0;
        this.SCROLL_SPEED = 4;
        this.physics.world.gravity.y = 2600;

        // add background tile sprite
        this.space = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0);
        this.space.tileScaleX = .25;
        this.space.tileScaleY = .25;

        // make ground tiles group
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'platformer_atlas', 'block').setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }
        // put another tile sprite above the ground tiles
        this.groundScroll = this.add.tileSprite(0, game.config.height-tileSize, game.config.width, tileSize, 'groundScroll').setOrigin(0);

        // set up dragonGirl
        this.dragonGirl = this.physics.add.sprite(120, game.config.height/2-tileSize, 'dragonGirl');

        //animation config for dragonGirl
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('fly', {start: 0, end: 5, first:0}),
            frameRate: 12
        });

        // add physics collider
        this.physics.add.collider(this.dragonGirl, this.ground);
        this.dragonGirl.body.collideWorldBounds = true;

        //spacebar as input
        spaceBar= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }


    update() {
        // update tile sprites (tweak for more "speed")
        this.space.tilePositionX += this.SCROLL_SPEED;
        this.groundScroll.tilePositionX += this.SCROLL_SPEED;

        //dragonGirl can fly!
        this.dragonGirl.anims.play('fly', true);

        // check if dragonGirl is grounded
	    this.dragonGirl.isGrounded = this.dragonGirl.body.touching.down;
	    // if so, we have a jump ready
	    if(this.dragonGirl.isGrounded) {
            this.jumping = false;
            this.jumps = 1;
	    } 
        
        //jump
        if( this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(spaceBar, 800) ) {
            this.dragonGirl.body.velocity.y = this.JUMP_VELOCITY;
            this.jumping = true;
        }
        
        // finally, letting go of the UP key subtracts a jump
	    if(this.jumping && Phaser.Input.Keyboard.UpDuration(spaceBar)) {
	    	this.jumps--;
            this.jumping = false;
        }
        
        //gliding
        if(this.jumps <= 0 && !this.jumping && spaceBar.isDown) {
            this.dragonGirl.body.velocity.y = this.GLIDE_VELOCITY;
        }
    }
}