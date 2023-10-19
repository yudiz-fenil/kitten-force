
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(540, 960, 1080, 1920);
		rectangle_1.visible = false;
		rectangle_1.isStroked = true;
		rectangle_1.lineWidth = 5;

		// container_header
		const container_header = this.add.container(0, 0);

		// coinImage
		const coinImage = this.add.image(64, 64, "coin");
		coinImage.scaleX = 0.6;
		coinImage.scaleY = 0.6;
		container_header.add(coinImage);

		// txt_coins
		const txt_coins = this.add.text(107, 64, "", {});
		txt_coins.setOrigin(0, 0.5);
		txt_coins.text = "0";
		txt_coins.setStyle({ "fontSize": "66px" });
		container_header.add(txt_coins);

		// txt_score
		const txt_score = this.add.text(1048, 64, "", {});
		txt_score.setOrigin(1, 0.5);
		txt_score.text = "0";
		txt_score.setStyle({ "fontSize": "66px" });
		container_header.add(txt_score);

		// container_blocks
		const container_blocks = this.add.container(0, 0);

		// container_body
		const container_body = this.add.container(0, 0);

		// txt_boss
		const txt_boss = this.add.text(540, 960, "", {});
		txt_boss.setOrigin(0.5, 0.5);
		txt_boss.visible = false;
		txt_boss.text = "BOSS APPROCHING";
		txt_boss.setStyle({ "fontSize": "66px" });

		this.container_header = container_header;
		this.coinImage = coinImage;
		this.txt_coins = txt_coins;
		this.txt_score = txt_score;
		this.container_blocks = container_blocks;
		this.container_body = container_body;
		this.txt_boss = txt_boss;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_header;
	/** @type {Phaser.GameObjects.Image} */
	coinImage;
	/** @type {Phaser.GameObjects.Text} */
	txt_coins;
	/** @type {Phaser.GameObjects.Text} */
	txt_score;
	/** @type {Phaser.GameObjects.Container} */
	container_blocks;
	/** @type {Phaser.GameObjects.Container} */
	container_body;
	/** @type {Phaser.GameObjects.Text} */
	txt_boss;

	/* START-USER-CODE */

	// Write more your code here
	fallParticles = () => {
		const deathZone = new Phaser.Geom.Rectangle(0, 1920, 1080, 10);
		const emitter1 = this.fallEmitter.createEmitter({
			x: { min: 0, max: 1080 },
			lifespan: 20000,
			speedY: { min: 1000, max: 1200 },
			scale: { min: 0.075, max: 0.175 },
			quantity: 1,
			blendMode: 'NORMAL',
			alpha: { min: 0.2, max: 0.6 },
			frequency: 28,
			deathZone: { type: 'onEnter', source: deathZone },
		});
	}
	setPlayer = () => {
		const player = this.physics.add.image(540, 1720, "player");
		player.setInteractive();
		player.name = "player";
		return player;
	}
	singleBulllet = (velocityX, angle = 0) => {
		const bullet = this.fireGroup.create(this.player.x, this.player.y - (this.player.height / 2), 'bullet');
		bullet.setVelocityX(velocityX);
		bullet.setAngle(angle);
		bullet.setVelocityY(-3000);
		bullet.setSize(50);
	}
	shootBullet = () => {
		switch (this.nTotalBullets) {
			case 1:
				this.singleBulllet(0, 0);
				break;
			case 2:
				this.singleBulllet(-400, -8);
				this.singleBulllet(400, 8);
				break;
			case 3:
				this.singleBulllet(-400, -8);
				this.singleBulllet(0, 0);
				this.singleBulllet(400, 8);
				break;
			case 4:
				this.singleBulllet(-600, -10);
				this.singleBulllet(-200, -5);
				this.singleBulllet(200, 5);
				this.singleBulllet(600, 10);
				break;

			default:
				this.singleBulllet(0, 0);
				break;
		}
	}
	startFire = () => {
		this.shootBullet();
		if (!this.fireTimer) {
			this.fireTimer = this.time.addEvent({
				delay: 200,
				callback: () => {
					this.shootBullet();
				},
				callbackScope: this,
				loop: true
			});
		}
	}
	stopFire = () => {
		if (this.fireTimer) {
			this.fireTimer.remove(false);
			this.fireTimer = false;
		}
	}
	createBlocks = () => {
		const numRows = Phaser.Math.Between(1, 3);
		const numColumns = Phaser.Math.Between(5, 7);
		const blockWidth = 100;
		const blockHeight = 100;
		const blockPadding = 20;
		const startX = (this.sys.game.config.width - (numColumns * (blockWidth + blockPadding))) / 2 + 55;
		const startY = 100;
		const initialNumber = Phaser.Math.Between(this.oGameManager.oLevels[this.nLevel].nBlockMin, this.oGameManager.oLevels[this.nLevel].nBlockMax);
		const textute = 'block_' + Phaser.Math.Between(1, 3);

		for (let row = 0; row < numRows; row++) {
			for (let col = 0; col < numColumns; col++) {
				const blockX = startX + col * (blockWidth + blockPadding);
				const blockY = startY + row * (blockHeight + blockPadding);
				const block = this.physics.add.sprite(blockX, blockY, textute);
				block.setSize(100, 100);
				block.setData('number', initialNumber);
				this.container_blocks.add(block);

				const blockText = this.add.text(0, 0, initialNumber.toString(), { fontSize: '56px', fill: '#ffffff' }).setOrigin(0.5);
				blockText.setPosition(blockX, blockY);
				block.setData('text', blockText);

				this.blocksGroup.add(block);
			}
		}
	}
	bossParticles = (bullet) => {
		let particles = this.add.particles('particle_1');
		let emitter = particles.createEmitter({
			x: bullet.x,
			y: bullet.y,
			alpha: { start: 0.7, end: 0 },
			// scale: { start: 0.5, end: 2.5 }, // adjust as needed
			scale: { min: 0.15, max: 0.35 },
			speed: { min: 1000, max: 2500 },
			lifespan: { min: 200, max: 250 },
			angle: { min: 0, max: 360 },  // Emit particles in all directions
		});
		setTimeout(() => {
			emitter.stop();
			emitter.remove();
		}, 400);
	}
	blockParticles = (block, nX, nY) => {
		const textute = "particle_" + block.texture.key.split('_')[1];
		const aParticles = [
			this.add.particles("particle_0").setDepth(1),
			this.add.particles(textute).setDepth(1),
		];
		for (let i = 0; i < aParticles.length; i++) {
			const particle = aParticles[i];
			const emitter = particle.createEmitter({
				x: nX,
				y: nY,
				total: 50,
				scale: { min: 0.15, max: 0.35 },
				alpha: { start: 0.7, end: 0 },
				lifespan: { min: 200, max: 250 },
				speed: { min: 1000, max: 2500 },
				frequency: 50,
				blendMode: "ADD",
				maxParticles: 5,
			})
			emitter.startFollow(block);
			setTimeout(() => {
				emitter.stop();
				emitter.remove();
			}, 400);
		}
	}
	ringParticle = (block, nX, nY) => {
		const i = block.texture.key.split('_')[1] - 1;
		const aTint = [0xFFCA00, 0x58B2F5, 0xDA75A4];
		const emitter = this.ringEmitter.createEmitter({
			x: nX,
			y: nY,
			quantity: 1,
			scale: { start: 2, end: 5 },
			alpha: { start: 0.5, end: 0 },
			lifespan: 300,
			rotate: { min: 0, max: 360 },
			tint: aTint[i],
			maxParticles: 1,
		})
		emitter.startFollow(block);
		setTimeout(() => {
			emitter.stop();
			emitter.remove();
		}, 200);
	}
	flashEffect = (x, y) => {
		const flash = this.add.rectangle(x, y + 14, 100, 100, 0xffffff).setOrigin(0.5, 0.5).setDepth(2).setAlpha(0.8);
		this.tweens.add({
			targets: flash,
			alpha: 0,
			duration: 90,
			onComplete: () => {
				flash.destroy();
			}
		});
	}
	updateScore = (x, y) => {
		this.nScore += this.oGameManager.oLevels[this.nLevel].nAdd;
		this.txt_score.setText(this.nScore);
		if (this.nScore % this.oGameManager.nCoinArrival === 0) {
			this.addCoin(x, y);
		}
		if (this.nScore >= this.oGameManager.oLevels[this.nLevel].nTarget && !this.isBossApproching) {
			this.bossApproch();
		}
	}
	addCoin = (x, y) => {
		const coin = this.coinsGroup.create(x, y, 'coin').setScale(0.5);
		coin.setVelocityY(Phaser.Math.Between(1000, 1100));
		this.tweens.add({
			targets: coin,
			angle: 360,
			duration: 1000,
			repeat: -1,
			yoyo: false
		});
	}
	updateCoin = () => {
		this.nCoins++;
		this.txt_coins.setText(this.nCoins);
	}
	gameOver = () => {
		localStorage.setItem('kitten_coins', this.nCoins);
		this.scene.stop("Level");
		this.scene.start("Home");
	}
	create() {
		this.fallEmitter = this.add.particles('block_2');
		this.editorCreate();
		this.oGameManager = new GameManager(this);
		this.fallParticles();
		this.fireTimer = false;
		this.isBossApproching = false;
		this.nScore = 0;
		this.nLevel = 1;
		this.nCoins = localStorage.getItem('kitten_coins') || 0;
		this.nTotalBullets = parseInt(localStorage.getItem('kitten_bullets')) || 1;
		this.txt_coins.setText(this.nCoins);
		this.ringEmitter = this.add.particles("ring");
		this.player = this.setPlayer();
		this.coinsGroup = this.physics.add.group();
		this.fireGroup = this.physics.add.group();
		this.blocksGroup = this.physics.add.group();
		this.bossGroup = this.physics.add.group();

		this.blocksCamera = this.cameras.add(0, 0, this.sys.game.config.width, this.sys.game.config.height);
		this.blocksCamera.ignore([this.player, this.fireGroup, this.fallEmitter, this.container_header, this.container_body]);

		this.createBlocks();
		// Move player with pointer move
		this.input.on('pointermove', (pointer) => {
			if (pointer.isDown) {
				this.input.mouse.requestPointerLock();
				const targetX = this.player.x + pointer.event.movementX * 2;
				const targetY = this.player.y + pointer.event.movementY * 2;
				this.player.x = Phaser.Math.Clamp(targetX, 10 + this.player.width / 2, 1070 - this.player.width / 2);
				this.player.y = Phaser.Math.Clamp(targetY, 1300, 1910 - this.player.height / 2);
			} else {
				this.input.mouse.releasePointerLock();
			}
			if (window.innerWidth < 1080) {
				const targetX = pointer.x;
				const targetY = pointer.y;
				this.player.x = Phaser.Math.Clamp(targetX, 10 + this.player.width / 2, 1070 - this.player.width / 2);
				this.player.y = Phaser.Math.Clamp(targetY, 1100, 1910 - this.player.height / 2);
			}
		})
		this.input.on('pointerdown', () => {
			this.startFire();
		})
		this.input.on('pointerup', () => {
			this.stopFire();
		})
		this.physics.add.overlap(this.fireGroup, this.blocksGroup, this.handleBulletBlockCollision, null, this);
		this.physics.add.overlap(this.fireGroup, this.bossGroup, this.handleBulletBossCollision, null, this);
		this.physics.add.overlap(this.player, this.coinsGroup, this.handleCoinCollect, null, this);
		this.physics.add.overlap(this.player, this.blocksGroup, () => this.gameOver(), null, this);
	}
	handleCoinCollect = (player, coin) => {
		const newCoin = this.add.image(coin.x, coin.y, "coin").setScale(0.5);
		coin.destroy();
		this.tweens.add({
			targets: newCoin,
			x: this.coinImage.x,
			y: this.coinImage.y,
			scaleX: 1,
			scaleY: 1,
			duration: 800,
			onComplete: () => {
				newCoin.destroy();
			}
		})
		this.updateCoin();
	}
	handleBulletBlockCollision = (bullet, block) => {
		this.blockParticles(block, block.x, block.y + 10);
		this.ringParticle(block, block.x, block.y + 10);
		this.flashEffect(block.x, block.y);
		this.updateScore(block.x, block.y);

		bullet.destroy();
		let number = block.getData('number');
		number -= this.oGameManager.oLevels[this.nLevel].nDamage;

		this.blocksCamera.shake(50, 0.01);

		if (number <= 0) {
			const blockText = block.getData('text');
			blockText.destroy();
			block.destroy();
		} else {
			block.setData('number', number);
			const blockText = block.getData('text');
			blockText.setText(number.toString());
		}
	}
	handleBulletBossCollision = (bullet, boss) => {
		this.bossParticles(bullet);
		bullet.destroy();
		this.blocksCamera.shake(50, 0.01);
	}
	bossTextAnimation = () => {
		this.txt_boss.setVisible(true);
		this.tweens.add({
			targets: this.txt_boss,
			alpha: 0,
			yoyo: true,
			repeat: 2,
			duration: 500,
			onUpdate: () => {
				this.blocksCamera.shake(15, 0.01);
			},
			onComplete: () => {
				this.txt_boss.setVisible(false);
			}
		})
	}
	enterBoss = () => {
		const boss = this.physics.add.sprite(540, 480, this.oGameManager.oLevels[this.nLevel].sBoss);
		this.container_blocks.add(boss);
		this.bossGroup.add(boss);
	}
	bossApproch = () => {
		this.isBossApproching = true;
		this.bossTextAnimation();
		setTimeout(() => {
			this.enterBoss();
		}, 3000);
	}
	update() {
		this.fireGroup.children.each((bullet) => {
			if (bullet.y < 0) {
				bullet.destroy();
			}
		});

		if (this.blocksGroup.getLength() == 0 && !this.isBossApproching) this.createBlocks();

		this.blocksGroup.children.iterate((block) => {
			if (block) {
				block.setVelocityY(300);
				const blockText = block.getData('text');
				blockText.setPosition(block.x, block.y);
				if (block.y > this.sys.game.config.height + block.height) {
					blockText.destroy();
					block.destroy();
				}
			}
		});
		this.coinsGroup.children.iterate((coin) => {
			if (coin) {
				if (coin.y > this.sys.game.config.height + coin.height) {
					coin.destroy();
				}
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
