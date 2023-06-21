import { lines, ans } from "./car_data.js";

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

const numActions = Math.min(K, actions.length); // 実際のアクションの数

for (let i = 0; i < numActions; i++) {
  const carIndex = actions[i][0] - 1;
  const action = actions[i][1];
  const fuel = simulationResults[carIndex].amount_of_fuel;
  const consumption = cars[carIndex].fuel_consumption;
  const carModel = cars[carIndex].car_model;

  if (fuel === 0) continue;

  processAction(carIndex, action, fuel, consumption, carModel);
}

function processAction(carIndex, action, fuel, consumption, carModel) {
  switch (carModel) {
    case "supercar":
      if (action !== "run") return;
      run(carIndex, consumption);
      break;
    case "supersupercar":
      if (action === "teleport") return;
      if (action === "fly" && fuel >= 5) {
        ssFly(carIndex, consumption);
      } else {
        run(carIndex, consumption);
      }
      break;
    case "supersupersupercar":
      if (action === "teleport" && fuel >= Math.pow(consumption, 2)) {
        teleport(carIndex, consumption);
      } else if (action !== "run" && fuel >= 5) {
        sssFly(carIndex, consumption);
      } else {
        run(carIndex, consumption);
      }
      break;
    default:
      console.log("車種の指定に誤りがあります");
      break;
  }
}

function consumeFuel(carIndex, amount) {
  simulationResults[carIndex].amount_of_fuel = Math.max(
    simulationResults[carIndex].amount_of_fuel - amount,
    0
  );
}

function run(carIndex, consumption) {
  consumeFuel(carIndex, 1);
  simulationResults[carIndex].totalMileage += consumption;
}

function ssFly(carIndex, consumption) {
  consumeFuel(carIndex, 5);
  simulationResults[carIndex].totalMileage += Math.pow(consumption, 2);
}

function sssFly(carIndex, consumption) {
  consumeFuel(carIndex, 5);
  simulationResults[carIndex].totalMileage += 2 * Math.pow(consumption, 2);
}

function teleport(carIndex, consumption) {
  consumeFuel(carIndex, Math.pow(consumption, 2));
  simulationResults[carIndex].totalMileage += Math.pow(consumption, 4);
}

function getTotalMileage() {
  return simulationResults.map((mile) => mile.totalMileage);
}

const showResult = getTotalMileage();
showResult.forEach((show) => console.log(show));

for (let i = 0; i < showResult.length; i++) {
  ans;
  if (ans[i] !== showResult[i]) {
    console.log(
      `No:${i + 1}
  ans = ${ans[i]}___ show = ${showResult[i]}`
    );
  }
}

const mileage = showResult;
mileage.forEach((show) => {
  output.innerHTML += `${show} <br>`
});
