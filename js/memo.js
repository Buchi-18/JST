const lines = [
  "3 6",
  "10 1 1 2 2 3 3",
  "10 0 0 6 1 7 2",
  "10 0 0 7 5 8 3",
  "1 1 2 2",
  "1 2 3 2",
  "1 3 2 3",
  "2 2 3 1",
  "2 3 3 1",
  "1 2 3 2",
];

class Player {
  constructor(playerId, HP, attacks) {
    this.playerId = playerId;
    this.HP = HP;
    this.attacks = attacks;
  }

  updateAttackFrames() {
    for (let i = 0; i < this.attacks.length; i++) {
      let frame = this.attacks[i][0];
      let attack = this.attacks[i][1];
      this.attacks[i][0] = frame > 1 ? frame - 3 : frame;
      this.attacks[i][1] = attack > 0 ? attack + 5 : attack;
    }
  }

  takeDamage(damage) {
    this.HP = Math.max(this.HP - damage, 0);
  }
}

class Game {
  constructor(lines) {
    const [playerNum, turn] = lines[0].split(" ").map(Number);
    this.players = lines.slice(1, 1 + playerNum).map((data, i) => {
      const [HP, ...attacks] = data.split(" ").map(Number);
      return new Player(i + 1, HP, [
        attacks.slice(0, 2),
        attacks.slice(2, 4),
        attacks.slice(4, 6),
      ]);
    });
    this.commands = lines
      .slice(1 + playerNum)
      .map((command) => command.split(" ").map(Number));
  }

  getRoundFight() {
    const newPlayers = this.players.map((player) =>
      Object.assign(Object.create(Object.getPrototypeOf(player)), player)
    );

    for (let i = 0; i < this.commands.length; i++) {
      const playerNum_A = this.commands[i][0];
      const playerNum_B = this.commands[i][2];
      const commandNum_A = this.commands[i][1] - 1;
      const commandNum_B = this.commands[i][3] - 1;

      const player_A = newPlayers.find(
        (player) => player.playerId === playerNum_A
      );
      const player_B = newPlayers.find(
        (player) => player.playerId === playerNum_B
      );

      const frame_A = player_A.attacks[commandNum_A][0];
      const frame_B = player_B.attacks[commandNum_B][0];

      if (player_A.HP === 0 || player_B.HP === 0) continue;

      if (frame_A === 0) {
        player_A.updateAttackFrames();
        if (frame_B !== 0) {
          player_A.takeDamage(player_B.attacks[commandNum_B][1]);
        }
      }

      if (frame_B === 0) {
        player_B.updateAttackFrames();
        if (frame_A !== 0) {
          player_B.takeDamage(player_A.attacks[commandNum_A][1]);
        }
      }

      if (frame_A < frame_B) {
        const damage_B = player_A.attacks[commandNum_A][1];
        player_B.takeDamage(damage_B);
      } else if (frame_A > frame_B) {
        const damage_A = player_B.attacks[commandNum_B][1];
        player_A.takeDamage(damage_A);
      }
    }

    return newPlayers;
  }

  getSurvivor() {
    return this.getRoundFight().filter((player) => player.HP > 0);
  }

  getSurvivorCount() {
    return this.getSurvivor().length;
  }
}

const game = new Game(lines);
console.log(game.getSurvivorCount());
