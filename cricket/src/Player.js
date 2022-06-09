export default class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.scoreboard = [
             {
                 textValue: 'twenty',
                 value: 20,
                 count: 0,
                 closed: false
             },
             {
                 textValue: 'nineteen',
                 value: 19,
                 count: 0,
                 closed: false
             },
             {
                 textValue: 'eighteen',
                 value: 18,
                 count: 0,
                 closed: false
             },
             {
                 textValue: 'seventeen',
                 value: 17,
                 count: 0,
                 closed: false
             },
             {
                 textValue: 'sixteen',
                 value: 16,
                 count: 0,
                 closed: false
             },
             {
                 textValue: 'fifteen',
                 value: 15,
                 count: 0,
                 closed: false
             },
             {
                 textValue: 'bully',
                 value: 25,
                 count: 0,
                 closed: false
             }
         ];
        this.score = 0;
        this.previousScores = []
    }

    addScore(value) {
        this.previousScores.push(value)
         for (let i = 0; i <= this.scoreboard.length - 1; i++) {
             if (this.scoreboard[i].value === value) {
                 this.scoreboard[i].count += 1;
             }
         }
    }

    removePreviousScore() {
        const scoreToRemove = this.previousScores.pop();
        for (let i = 0; i <= this.scoreboard.length - 1; i++) {
            if (this.scoreboard[i].value === scoreToRemove) {
                this.scoreboard[i].count -= 1;
            }
        }
    }

    totalScore() {
        let newScore = 0;
         for (let i = 0; i <= this.scoreboard.length - 1; i++) {
             if (this.scoreboard[i].count >= 3) {
                 let scorableCount = this.scoreboard[i].count - 3
                 let toAdd = scorableCount * this.scoreboard[i].value
                 newScore += toAdd 
                 this.scoreboard[i].closed = true
             } else {
                 this.scoreboard[i].closed = false
             }
         }
         this.score = newScore
    }
}