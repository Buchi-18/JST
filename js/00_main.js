const lines = [
  "5 10",
  "supersupercar 1102 67",
  "supersupercar 63296 25",
  "supersupersupercar 47388 32",
  "supersupercar 30968 68",
  "supersupercar 53668 78",
  "2 run",
  "3 teleport",
  "1 fly",
  "2 run",
  "4 run",
  "5 fly",
  "5 run",
  "2 fly",
  "4 run",
  "1 fly",
];
// 8978
// 675
// 1048576
// 136
// 6162

const [N, K] = lines[0].split(" ").map(Number);

const cars = lines.slice(1, 1 + N).map((car, index) => {
  const [car_model, amount_of_fuel, fuel_consumption] = car.split(" ");
  return {
    car_id: index + 1,
    car_model,
    amount_of_fuel: Number(amount_of_fuel),
    fuel_consumption: Number(fuel_consumption),
  };
});

const simulationResults = cars.map(({ car_id, amount_of_fuel }) => {
  return {
    car_id,
    amount_of_fuel,
    totalMileage: 0,
  };
});

const actions = lines.slice(1 + N).map((item) => {
  const [number, action] = item.split(" ");
  return [Number(number), action];
});

for (let i = 0; i < K; i++) {
  const id = actions[i][0];
  const num = id - 1;
  const action = actions[i][1];
  const fuel = simulationResults[num].amount_of_fuel;
  const consumption = cars[num].fuel_consumption;
  const car = cars[num].car_model;

  if (fuel === 0) continue;

  switch (car) {
    case "supercar":
      if (action !== "run") continue;
      run(num, consumption);
      break;
    case "supersupercar":
      if (action === "teleport") continue;
      if (action === "fly" && fuel >= 5) {
        ssFly(num, consumption);
      } else {
        run(num, consumption);
      }
      break;
    case "supersupersupercar":
      if (action === "teleport" && fuel >= Math.pow(consumption, 2)) {
        teleport(num, consumption);
      } else if (action !== "run" && fuel >= 5) {
        sssFly(num, consumption);
      } else {
        run(num, consumption);
      }
      break;
    default:
      console.log("車種の指定に誤りがあります");
      break;
  }
}

function run(num, consumption) {
  //燃料消費
  simulationResults[num].amount_of_fuel = Math.max(
    simulationResults[num].amount_of_fuel - 1,
    0
  );
  //走行距離加算
  simulationResults[num].totalMileage += consumption;
}

function ssFly(num, consumption) {
  //燃料消費
  simulationResults[num].amount_of_fuel = Math.max(
    simulationResults[num].amount_of_fuel - 5,
    0
  );
  //走行距離加算
  simulationResults[num].totalMileage += Math.pow(consumption, 2);
}

function sssFly(num, consumption) {
  //燃料消費
  simulationResults[num].amount_of_fuel = Math.max(
    simulationResults[num].amount_of_fuel - 5,
    0
  );
  //走行距離加算
  simulationResults[num].totalMileage += 2 * Math.pow(consumption, 2);
}

function teleport(num, consumption) {
  //燃料消費
  simulationResults[num].amount_of_fuel = Math.max(
    simulationResults[num].amount_of_fuel - Math.pow(consumption, 2),
    0
  );
  //走行距離加算
  simulationResults[num].totalMileage += Math.pow(consumption, 4);
}

function getMileage() {
  return simulationResults.map((mile) => mile.totalMileage);
}

const showResult = getMileage().forEach((show) => console.log(show));
