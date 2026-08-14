import { useContext } from "react";
import ProgressBar from "./ProgressBar";
import { CounterContext } from "../CounterContext";

function GoalTracker() {
  const counters = useContext(CounterContext);
  const sum = counters.reduce((total, item) => total + item.count, 0);

  return (
    <section>
      <p>Progress</p>
      <p>{sum}/10</p>
      <ProgressBar />
    </section>
  );
}

export default GoalTracker;
