import { useContext } from "react";
import ProgressBar from "./ProgressBar";
import { CounterContext } from "../CounterContext";

function GoalTracker() {
  const counters = useContext(CounterContext);
  const sum = counters.reduce((total, item) => total + item.count, 0);

  return (
    <section className="border m-2 mx-20 p-2 rounded-md">
      <p>Progress</p>
      <p>{sum}/10</p>
      <ProgressBar />
    </section>
  );
}

export default GoalTracker;
