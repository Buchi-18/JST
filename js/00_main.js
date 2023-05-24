import { lines, ans } from "./car_data.js";

const [N, K] = lines[0].split(" ").map(Number);
const cars = lines.slice(1, 1 + N).map((car, index) => {
  const [car_model, amount_of_fuel, fuel_consumption] = car.split(" ");
  return {
    car_id: index + 1,
    car_model,
    amount_of_fuel: Number(amount_of_fuel),
    fuel_consumption: Number(fuel_consumption),
    totalMileage: 0,
  };
});
const actions = lines.slice(1 + N).map((item) => {
  const [number, action] = item.split(" ");
  return [Number(number), action];
});

class Simulation {
  constructor(targetCar, currentAction) {
    this.targetCar = targetCar;
    this.model = targetCar.car_model;
    this.fuel = targetCar.amount_of_fuel;
    this.consumption = targetCar.fuel_consumption;
    this.action = currentAction;
  }

  executeAction() {
    if (this.fuel === 0) return;

    switch (this.model) {
      case "supercar":
        const superCar = new SuperCar(
          this.targetCar,
          this.fuel,
          this.consumption
        );
        if (this.action === "run") {
          superCar.run();
        }
        break;
      case "supersupercar":
        const superSuperCar = new SuperSuperCar(
          this.targetCar,
          this.fuel,
          this.consumption
        );
        if (this.action !== "teleport") {
          if (this.action === "fly" && this.fuel >= 5) {
            superSuperCar.ssFly();
          } else {
            superSuperCar.run();
          }
        }
        break;
      case "supersupersupercar":
        const superSuperSuperCar = new SuperSuperSuperCar(
          this.targetCar,
          this.fuel,
          this.consumption
        );
        if (
          this.action === "teleport" &&
          this.fuel >= Math.pow(this.consumption, 2)
        ) {
          superSuperSuperCar.teleport();
        } else if (this.action !== "run" && this.fuel >= 5) {
          superSuperSuperCar.sssFly();
        } else {
          superSuperSuperCar.run();
        }
        break;
    }
  }
}

class SuperCar {
  constructor(targetCar, fuel, consumption) {
    this.targetCar = targetCar;
    this.fuel = fuel;
    this.consumption = consumption;
  }

  consumeFuel(amount) {
    this.targetCar.amount_of_fuel = Math.max(this.fuel - amount, 0);
  }

  totalMileage(consumption) {
    this.targetCar.totalMileage += consumption;
  }

  run() {
    this.consumeFuel(1);
    this.totalMileage(this.consumption);
  }
}

class SuperSuperCar extends SuperCar {
  ssFly() {
    this.consumeFuel(5);
    this.totalMileage(Math.pow(this.consumption, 2));
  }
}

class SuperSuperSuperCar extends SuperCar {
  sssFly() {
    this.consumeFuel(5);
    this.totalMileage(2 * Math.pow(this.consumption, 2));
  }

  teleport() {
    this.consumeFuel(Math.pow(this.consumption, 2));
    this.totalMileage(Math.pow(this.consumption, 4));
  }
}

let simulateCars = [];
for (let i = 0; i < K; i++) {
  const action = actions[i][1];
  const targetNum = actions[i][0];
  const targetCar = cars.find((car) => car.car_id === targetNum);
  simulateCars.push(new Simulation(targetCar, action).executeAction());
}

function getMileage() {
  return cars.map((mile) => mile.totalMileage);
}

const showResult = getMileage();
showResult.forEach((show) => console.log(show));

//errorログ
for (let i = 0; i < getMileage().length; i++) {
  ans;
  if (ans[i] !== getMileage()[i]) {
    console.log(
      `GET_ERROR_No:${i + 1}
      ans = ${ans[i]}___ show = ${getMileage()[i]}`
    );
  }
}
