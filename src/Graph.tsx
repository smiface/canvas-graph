import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import store from "./store";

const drawXY = (ctx: any) => {
  ctx.beginPath();
  ctx.moveTo(0, 250);
  ctx.lineWidth = 1;
  ctx.lineTo(500, 250);

  ctx.moveTo(250, 0);
  ctx.lineTo(250, 500);
  ctx.stroke();
};

const drawGraph1 = (
  points: { x: number; y: number }[],
  ctx: any
) => {
  ctx.moveTo(points[0].x, points[0].y);

  for (var i = 0; i < points.length - 1; i++) {
    var x_mid = (points[i].x + points[i + 1].x) / 2;
    var y_mid = (points[i].y + points[i + 1].y) / 2;
    var cp_x1 = (x_mid + points[i].x) / 2;
    var cp_x2 = (x_mid + points[i + 1].x) / 2;
    ctx.quadraticCurveTo(cp_x1, points[i].y, x_mid, y_mid);
    ctx.quadraticCurveTo(
      cp_x2,
      points[i + 1].y,
      points[i + 1].x,
      points[i + 1].y
    );
  }
  ctx.lineWidth = 1;
  ctx.stroke();
};

const drawGraph = (points: any, ctx: any) => {
  ctx.lineWidth = 2;
  ctx.moveTo(points[0].x, points[0].y);

  for (var i = 0; i < points.length - 1; i++) {
    var x_mid = (points[i].x + points[i + 1].x) / 2;
    var y_mid = (points[i].y + points[i + 1].y) / 2;
    var cp_x1 = (x_mid + points[i].x) / 2;
    var cp_x2 = (x_mid + points[i + 1].x) / 2;
    ctx.quadraticCurveTo(cp_x1, points[i].y, x_mid, y_mid);
    ctx.quadraticCurveTo(
      cp_x2,
      points[i + 1].y,
      points[i + 1].x,
      points[i + 1].y
    );
  }
  ctx.lineWidth = 1;
  ctx.stroke();
};

const Graph = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
     // @ts-ignore: Unreachable code error
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 500, 500);
     // @ts-ignore: Unreachable code error
    if (canvas && canvas.getContext) {
      ctx.beginPath();
      drawXY(ctx);
      drawGraph(store.points, ctx);
    }
  }, [store.points]);

  return (
     // @ts-ignore: Unreachable code error
    <div style={{ poisition: "absolute", right: "0", top: "0" }}>
      <canvas
        id="canvas"
        draggable="true"
        height="500px"
        width="500px"
      ></canvas>
    </div>
  );
};

export default observer(Graph);
