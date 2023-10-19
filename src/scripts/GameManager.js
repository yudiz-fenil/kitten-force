class GameManager {
	constructor(oScene) {
		this.oBulletsPrice = [
			{ isOpen: true, nPrice: 0 }, // 1
			{ isOpen: false, nPrice: 300 }, // 2
			{ isOpen: false, nPrice: 500 }, // 3
			{ isOpen: false, nPrice: 700 }, // 4
		]
		this.nCoinArrival = 10;
		this.oLevels = {
			1: { nTarget: 300, nBlockMin: 1, nBlockMax: 5, nDamage: 1, nAdd: 1, sBoss: "boss_1", nBossPower: 100 },
			2: { nTarget: 400, nBlockMin: 3, nBlockMax: 8, nDamage: 1, nAdd: 1, sBoss: "boss_1", nBossPower: 150 },
			3: { nTarget: 500, nBlockMin: 4, nBlockMax: 9, nDamage: 1, nAdd: 1, sBoss: "boss_1", nBossPower: 200 },
			4: { nTarget: 600, nBlockMin: 5, nBlockMax: 10, nDamage: 2, nAdd: 2, sBoss: "boss_1", nBossPower: 250 },
		}
	}
}