import { observer } from "mobx-react-lite";
import { useState } from "react";
import store from "./store";

interface XYProps {
  el: { x: number; y: number };
  idx: number;
}

const XY = ({ el, idx }:  XYProps ) => {
  const [myX, setMyX] = useState(el.x);
  const [myY, setMyY] = useState(el.y);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <div>
        <h3>{idx}</h3>

        <label htmlFor="zxc">x</label>
        <input
          type="number"
          value={myX}
          onChange={(e) => {
            setMyX(Number(e.target.value));
            store.setPoints(idx, Number(myX), Number(myY));
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="zxc">y</label>
        <input
          type="number"
          value={myY}
          onChange={(e) => {
            setMyY(Number(e.target.value));
            store.setPoints(idx, Number(myX), Number(myY));
          }}
        />
      </div>
    </div>
  );
};

const Control = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {store.points.length}
      <button onClick={() => store.incement()}>+</button>
      <button onClick={() => store.decrement()}>-</button>
      {store.points.map((el, index) => (
        <XY el={el} idx={index} key={el.toString() + index} />
      ))}
    </div>
  );
};

export default observer(Control);
