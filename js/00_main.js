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

const [playerNum, turn] = lines[0].split(" ").map(Number);

console.log(playerNum, turn);

const playerData = lines.slice(1, 1 + playerNum).map((data, i) => {
  const [HP, frame_1, attack_1, frame_2, attack_2, frame_3, attack_3] = data
    .split(" ")
    .map(Number);
  
  return {
    playerId: i + 1,
    HP,
    attack_01: [frame_1, attack_1],
    attack_02: [frame_2, attack_2],
    attack_03: [frame_3, attack_3],
  };
});

console.log(playerData);
