const lines = [
  "1 3",
  "23 128 533 552 44 69 420",
  "1 muscle_training 565 241",
  "1 study 132",
  "1 levelup 379 585 4 145 276 8259 875",
];

// N = Heroの数
// K = イベントの回数
const [N, K] = lines[0].split(" ").map(Number);

// ヒーローデータを格納
const heroes = lines.slice(1, N + 1).map((line, i) => {
  const [level, health, attack, defense, speed, cleverness, fortune] = line
    .split(" ")
    .map(Number);
  return {
    heroId: i + 1,
    level,
    health,
    attack,
    defense,
    speed,
    cleverness,
    fortune,
  };
});

// イベントデータを格納
const events = lines.slice(1 + N).map((e) => e.split(" "));

let targetHero;
for (let i = 0; i < K; i++) {
  const designationId = Number(events[i][0]);
  targetHero = heroes.find((hero) => hero.heroId === designationId);

  //指定されたHeroが存在するかチェック
  if (targetHero === undefined) {
    console.log(`イベント No.${designationId} のヒーローは見つかりません`);
    break;
  }

  switch (events[i][1]) {
    case "levelup":
      const levelup = events[i].slice(2).map(Number);
      getLevelup(targetHero, levelup);
      break;
    case "muscle_training":
      const muscleUp = events[i].slice(2).map(Number);
      getMuscleUp(targetHero, muscleUp);
      break;
    case "running":
      const runningUp = events[i].slice(2).map(Number);
      getRunningUp(targetHero, runningUp);
      break;
    case "study":
      const studyUp = events[i].slice(2).map(Number);
      getStudyUp(targetHero, studyUp);
      break;
    case "pray":
      const prayUp = events[i].slice(2).map(Number);
      getPrayUp(targetHero, prayUp);
      break;
    default:
      console.log("未知のコマンドが入力されました");
      break;
  }
}

function getHeroesStatus() {
  const result = [];
  for (let i = 0; i < heroes.length; i++) {
    const { level, health, attack, defense, speed, cleverness, fortune } =
      heroes[i];
    result.push(
      `${level} ${health} ${attack} ${defense} ${speed} ${cleverness} ${fortune}`
    );
  }
  return result;
}

const showStatus = getHeroesStatus();
showStatus.forEach((show) => {
  console.log(show);
});

//イベントメソッド
function getLevelup(targetHero, e) {
  targetHero.level++;
  targetHero.health += e[0];
  targetHero.attack += e[1];
  targetHero.defense += e[2];
  targetHero.speed += e[3];
  targetHero.cleverness += e[4];
  targetHero.fortune += e[5];
}

function getMuscleUp(targetHero, e) {
  targetHero.health += e[0];
  targetHero.attack += e[1];
}

function getRunningUp(targetHero, e) {
  targetHero.defense += e[0];
  targetHero.speed += e[1];
}

function getStudyUp(targetHero, e) {
  targetHero.cleverness += e[0];
}

function getPrayUp(targetHero, e) {
  targetHero.fortune += e[0];
}
