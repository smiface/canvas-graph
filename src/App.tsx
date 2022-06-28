import { observer } from "mobx-react-lite";
import "./styles.css";
import Control from "./Control";
import Graph from "./Graph";
import { useEffect } from "react";
import store from "./store";

const App = () => {
  useEffect(() => {
    store.loadPoints();
  }, []);

  return (
    <div className="App" style={{ display: "flex" }}>
      <Control />
      <Graph />
    </div>
  );
};

export default observer(App);
