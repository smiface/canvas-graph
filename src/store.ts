import axios from "axios";
import { makeAutoObservable } from "mobx";

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const generateDataPoints = (noOfDps:number) => {
  var xVal = 0, yVal = 250;
  var dps = [];
  for(var i = 0; i < noOfDps; i++) {
      yVal = randomInteger(0, 500);
      dps.push({x: xVal,y: yVal});
      xVal+=(500/noOfDps);
  }
  return dps;
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  points = [{ x: 0, y: 0 }];
  counter = 0;

  loadPoints() {
  const initialState = generateDataPoints(50);
  this.points = initialState
  };

  incement() {
    this.points.push({ x: 0, y: 0 });
  }

  decrement() {
    this.points = this.points.slice(0, -1);
  }

  setPoints(index: number, myX: number, myY: number) {
    this.points = this.points.map((el, idx) =>
      idx == index ? { x: myX, y: myY } : el
    );
  }
}

const store = new Store();
export default store;
