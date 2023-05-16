/*
下記コードで以下のような警告が表示された。
Functions declared within loops referencing an other scoped variable may lead to confusing semantics 下記コードのどの部分に対しての警告？その解決例のコードは？
解説に不要なコードの行は省いて良い。
下記の文脈でのセマンティックとは？
Functions declared within loops referencing an other scoped variable may lead to confusing semantics

const lines = [
  "1 3",
  " 23 128 533 552 44 69 420",
  "1 muscle_training 565 241",
  " 1 study 132",
  "  1 levelup 379 585 4 145 276 8259 875",
];


  const [N, K] = lines[0].split(" ").map(Number);
  const heroes = lines.slice(1, N + 1).map((line, i) => {
    const [level, health, attack, defense, speed, cleverness, fortune] = line
      .trim()
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

  const events = lines.slice(1 + N).map((e) => e.split(" "));
  let upGrade, muscleUp, runUp, studyUp, prayUp;

  for (let i = 0; i < K; i++) {
    const targetHero = heroes.find(
      (hero) => hero.heroId === Number(events[i][0])
    );
    switch (events[i][1]) {
      case "levelup":
        upGrade = events[i].slice(2).map(Number);
        targetHero.level++;
        targetHero.health += upGrade[0];
        targetHero.attack += upGrade[1];
        targetHero.defense += upGrade[2];
        targetHero.speed += upGrade[3];
        targetHero.cleverness += upGrade[4];
        targetHero.fortune += upGrade[5];
        break;
      case "muscle_training":
        muscleUp = events[i].slice(2).map(Number);
        targetHero.health += muscleUp[0];
        targetHero.attack += muscleUp[1];
        break;
      case "running":
        runUp = events[i].slice(2).map(Number);
        targetHero.defense += runUp[0];
        targetHero.speed += runUp[1];
        break;
      case "study":
        studyUp = events[i].slice(2).map(Number);
        targetHero.cleverness += studyUp[0];
        break;
      case "pray":
        prayUp = events[i].slice(2).map(Number);
        targetHero.fortune += prayUp[0];
        break;
      default:
        break;
    }
  }



  function getHeroesStatus() {
    const result = [];
    let level, health, attack, defense, speed, cleverness, fortune;
    for (let i = 0; i < heroes.length; i++) {
      ({ level, health, attack, defense, speed, cleverness, fortune } = heroes[i]);
      result.push([level, health, attack, defense, speed, cleverness, fortune]);
    }
    return result;
  }

  const showStatus = getHeroesStatus();
  showStatus.forEach((show) => {
    console.log(show.join(" "));
  });





*/