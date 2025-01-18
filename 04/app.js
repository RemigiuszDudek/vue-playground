function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({
    data: () => ({
        monsterHealth: 100,
        playerHealth: 100,
        currentRound: 0,
        battleLog: [],
    }),
    computed: {
        currentMonsterHealthStyle() {
            return {width: `${this.monsterHealth}%`}
        },
        currentPlayerHealthStyle() {
            return {width: `${this.playerHealth}%`}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 === 0;
        },
        playerIsDead() {
            return this.playerHealth === 0;
        },
        gameOverHeader() {
            if (this.winner === 'draw') {
                return 'Draw';
            } else if (this.winner === 'player') {
                return 'You won!';
            } else if (this.winner === 'monster') {
                return 'You lost!';
            }
        },
        winner() {
            const result = this.gameResult;
            if (result === 'draw') {
                return 'draw';
            } else if (result === 'win') {
                return 'player';
            } else if (result === 'loss') {
                return 'monster';
            }
            return null;
        },
        gameResult() {
            console.log(`gameResult: ${this.monsterHealth} - ${this.playerHealth}`);
            if (this.monsterHealth === 0 && this.playerHealth === 0) {
                return 'draw';
            } else if (this.monsterHealth === 0) {
                return 'win';
            } else if (this.playerHealth === 0) {
                return 'loss';
            }

            return 'playing';
        }
    },
    watch: {
        playerHealth() {
            console.log(`playerHealth: ${this.playerHealth}`);
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        monsterHealth() {
            console.log(`monsterHealth: ${this.monsterHealth}`);
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
        }
    },
    methods: {
        startNewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.battleLog = [];
        },
        basicAttackMonster() {
            this.attack(getRandomValue(5, 12));
        },
        specialAttack() {
            this.attack(getRandomValue(10, 25));
        },
        attack(attackValue) {
            if (this.playerHealth === 0) return;

            this.monsterHealth -= attackValue;
            this.currentRound++;
            this.attackPlayer();
            this.battleLog.unshift({player: this.playerHealth, monster: this.monsterHealth, type: 'attack'});
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.currentRound++;
            this.attackPlayer();
            this.battleLog.unshift({player: this.playerHealth, monster: this.monsterHealth, type: 'heal'});
        }
    }


}).mount('#game')