import axios from "axios";
import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  points = [{ x: 0, y: 0 }];
  counter = 0;

  loadPoints() {
    axios.get("btc.json").then((res) => {
      let arr = res.data.values;
      let initX = arr[0].x;
      let initY = arr[0].y;
      arr = arr.map(
        (el) =>
          (el = {
            x: (el.x - initX) / 52.2,
            y: (el.y - initY) * 10000 + 250
          })
      );

      console.log(arr.map((el) => el.x));

      this.points = arr;
    });
  }

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
