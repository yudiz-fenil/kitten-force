
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_home
		const container_home = this.add.container(0, 0);

		// btn_play
		const btn_play = this.add.image(540, 1646, "btn_play");
		btn_play.scaleX = 2;
		btn_play.scaleY = 2;
		container_home.add(btn_play);

		// container_buy_ui
		const container_buy_ui = this.add.container(0, 0);
		container_home.add(container_buy_ui);

		// bg_buy
		const bg_buy = this.add.image(540, 1155, "bg_buy");
		bg_buy.scaleX = 2;
		bg_buy.scaleY = 2;
		container_buy_ui.add(bg_buy);

		// bullet
		const bullet = this.add.image(540, 1070, "bullet");
		bullet.scaleX = 2;
		bullet.scaleY = 2;
		container_buy_ui.add(bullet);

		// btn_buy
		const btn_buy = this.add.image(540, 1301, "btn_buy");
		btn_buy.scaleX = 1.5;
		btn_buy.scaleY = 1.5;
		container_buy_ui.add(btn_buy);

		// container_buy_bullets
		const container_buy_bullets = this.add.container(0, 0);
		container_buy_bullets.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(540, 960, 1080, 1920);
		rectangle_1.alpha = 0.5;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		container_buy_bullets.add(rectangle_1);

		// container_buy_0
		const container_buy_0 = this.add.container(224, 1129);
		container_buy_bullets.add(container_buy_0);

		// bg_buy_0
		const bg_buy_0 = this.add.image(0, 0, "bg_buy");
		container_buy_0.add(bg_buy_0);

		// bullet_0
		const bullet_0 = this.add.image(0, -60, "bullet");
		bullet_0.scaleX = 0.6;
		container_buy_0.add(bullet_0);

		// btn_buy_0
		const btn_buy_0 = this.add.image(-3, 87, "check");
		container_buy_0.add(btn_buy_0);

		// txt_bullet_0
		const txt_bullet_0 = this.add.text(0, 32, "", {});
		txt_bullet_0.setOrigin(0.5, 0.5);
		txt_bullet_0.text = "0";
		txt_bullet_0.setStyle({ "color": "#67590fff", "fontSize": "26px" });
		container_buy_0.add(txt_bullet_0);

		// container_buy_1
		const container_buy_1 = this.add.container(436, 1129);
		container_buy_bullets.add(container_buy_1);

		// bg_buy_1
		const bg_buy_1 = this.add.image(0, 0, "bg_buy");
		container_buy_1.add(bg_buy_1);

		// bullet_1
		const bullet_1 = this.add.image(-42, -60, "bullet");
		bullet_1.scaleX = 0.6;
		container_buy_1.add(bullet_1);

		// bullet_3
		const bullet_3 = this.add.image(42, -60, "bullet");
		bullet_3.scaleX = 0.6;
		container_buy_1.add(bullet_3);

		// btn_buy_1
		const btn_buy_1 = this.add.image(-3, 87, "btn_buy");
		container_buy_1.add(btn_buy_1);

		// txt_bullet_1
		const txt_bullet_1 = this.add.text(0, 32, "", {});
		txt_bullet_1.setOrigin(0.5, 0.5);
		txt_bullet_1.text = "0";
		txt_bullet_1.setStyle({ "color": "#67590fff", "fontSize": "26px" });
		container_buy_1.add(txt_bullet_1);

		// container_buy_2
		const container_buy_2 = this.add.container(648, 1129);
		container_buy_bullets.add(container_buy_2);

		// bg_buy_2
		const bg_buy_2 = this.add.image(0, 0, "bg_buy");
		container_buy_2.add(bg_buy_2);

		// bullet_2
		const bullet_2 = this.add.image(-5, -53, "bullet");
		bullet_2.scaleX = 0.6;
		container_buy_2.add(bullet_2);

		// btn_buy_2
		const btn_buy_2 = this.add.image(-3, 87, "btn_buy");
		container_buy_2.add(btn_buy_2);

		// txt_bullet_2
		const txt_bullet_2 = this.add.text(0, 32, "", {});
		txt_bullet_2.setOrigin(0.5, 0.5);
		txt_bullet_2.text = "0";
		txt_bullet_2.setStyle({ "color": "#67590fff", "fontSize": "26px" });
		container_buy_2.add(txt_bullet_2);

		// bullet_4
		const bullet_4 = this.add.image(-63, -46, "bullet");
		bullet_4.scaleX = 0.6;
		container_buy_2.add(bullet_4);

		// bullet_5
		const bullet_5 = this.add.image(54, -46, "bullet");
		bullet_5.scaleX = 0.6;
		container_buy_2.add(bullet_5);

		// container_buy_3
		const container_buy_3 = this.add.container(860, 1129);
		container_buy_bullets.add(container_buy_3);

		// bg_buy_3
		const bg_buy_3 = this.add.image(0, 0, "bg_buy");
		container_buy_3.add(bg_buy_3);

		// bullet_6
		const bullet_6 = this.add.image(-19, -57, "bullet");
		bullet_6.scaleX = 0.6;
		container_buy_3.add(bullet_6);

		// btn_buy_3
		const btn_buy_3 = this.add.image(-3, 87, "btn_buy");
		container_buy_3.add(btn_buy_3);

		// txt_bullet_3
		const txt_bullet_3 = this.add.text(0, 32, "", {});
		txt_bullet_3.setOrigin(0.5, 0.5);
		txt_bullet_3.text = "0";
		txt_bullet_3.setStyle({ "color": "#67590fff", "fontSize": "26px" });
		container_buy_3.add(txt_bullet_3);

		// bullet_7
		const bullet_7 = this.add.image(-68, -36, "bullet");
		bullet_7.scaleX = 0.6;
		container_buy_3.add(bullet_7);

		// bullet_8
		const bullet_8 = this.add.image(76, -29, "bullet");
		bullet_8.scaleX = 0.6;
		container_buy_3.add(bullet_8);

		// bullet_9
		const bullet_9 = this.add.image(27, -59, "bullet");
		bullet_9.scaleX = 0.6;
		container_buy_3.add(bullet_9);

		// btn_close
		const btn_close = this.add.image(966, 128, "btn_close");
		container_buy_bullets.add(btn_close);

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

		// logo
		const logo = this.add.image(540, 436, "logo");
		container_header.add(logo);

		this.container_home = container_home;
		this.btn_play = btn_play;
		this.btn_buy = btn_buy;
		this.container_buy_bullets = container_buy_bullets;
		this.btn_close = btn_close;
		this.container_header = container_header;
		this.coinImage = coinImage;
		this.txt_coins = txt_coins;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_home;
	/** @type {Phaser.GameObjects.Image} */
	btn_play;
	/** @type {Phaser.GameObjects.Image} */
	btn_buy;
	/** @type {Phaser.GameObjects.Container} */
	container_buy_bullets;
	/** @type {Phaser.GameObjects.Image} */
	btn_close;
	/** @type {Phaser.GameObjects.Container} */
	container_header;
	/** @type {Phaser.GameObjects.Image} */
	coinImage;
	/** @type {Phaser.GameObjects.Text} */
	txt_coins;

	/* START-USER-CODE */

	// Write your code here
	fallParticles = () => {
		const fallEmitter = this.add.particles('block_2');
		const deathZone = new Phaser.Geom.Rectangle(0, 1920, 1080, 10);
		const emitter1 = fallEmitter.createEmitter({
			x: { min: 0, max: 1080 },
			lifespan: 20000,
			speedY: { min: 500, max: 700 },
			scale: { min: 0.075, max: 0.175 },
			quantity: 1,
			blendMode: 'NORMAL',
			alpha: { min: 0.2, max: 0.6 },
			frequency: 28,
			deathZone: { type: 'onEnter', source: deathZone },
		});
	}
	toggleFullScreen(element) {
		if (!document.fullscreenElement &&    // standard
			!document.mozFullScreenElement && // Firefox
			!document.webkitFullscreenElement && // Chrome, Safari, and Opera
			!document.msFullscreenElement) {  // IE/Edge

			// Enter fullscreen
			console.log(element)
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}

		} else {

			// Exit fullscreen
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	}

	create() {
		this.fallParticles();
		this.editorCreate();
		// localStorage.setItem('kitten_bullets', 1);
		this.oGameManager = new GameManager(this);
		this.input.mouse.releasePointerLock();

		this.nTotalBullets = parseInt(localStorage.getItem('kitten_bullets')) || 1;

		this.nCoins = parseInt(localStorage.getItem('kitten_coins')) || 0;
		this.txt_coins.setText(this.nCoins);

		this.btn_play.setInteractive().on('pointerdown', () => {
			// this.game.canvas.requestFullscreen();
			const gameContainer = document.getElementById('game-division');
			this.toggleFullScreen(gameContainer);
			this.scene.stop("Home");
			this.scene.start("Level");
		})
		this.btn_buy.setInteractive().on('pointerdown', () => {
			localStorage.setItem('kitten_bullets', this.nTotalBullets);
			this.container_home.setVisible(false);
			this.container_buy_bullets.setVisible(true);
		})
		this.btn_close.setInteractive().on('pointerdown', () => {
			this.container_home.setVisible(true);
			this.container_buy_bullets.setVisible(false);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
