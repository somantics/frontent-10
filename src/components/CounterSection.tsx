import { useState } from "react";
import Accumulator from "./Accumulator";
import CounterGrid from "./CounterGrid";
import GoalTracker from "./GoalTracker";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import {
  CounterContext,
  defaultCounters,
  type CounterData,
} from "../CounterContext";

function CounterSection() {
  const [counters, setCounters] = useState(defaultCounters);

  const onIncreaseCounter = (id: number) => {
    const oldCounter = counters.find((item) => item.id === id);
    if (oldCounter && oldCounter.count < oldCounter.max) {
      const newCounter = {
        id: oldCounter.id,
        count: oldCounter.count + 1,
        max: oldCounter.max,
      };
      const unchanged = counters.filter((item) => item.id !== id);
      updateCounters([...unchanged, newCounter as CounterData]);
    }
  };

  const onDeleteCounter = (id: number) => {
    updateCounters(counters.filter((item) => item.id !== id));
  };

  const onResetCounters = () => {
    updateCounters(defaultCounters);
  };

  const updateCounters = (list: CounterData[]) => {
    setCounters(list.sort((a, b) => a.id - b.id));
  };

  return (
    <CounterContext value={counters}>
      <GoalTracker />
      <Accumulator />
      <div>
        <PrimaryButton text="+ Lägg till räknare" onClick={() => {}} />
        <SecondaryButton
          text="Nollställ alla räknare"
          onClick={onResetCounters}
        />
      </div>
      <CounterGrid
        onCounterClicked={onIncreaseCounter}
        onCounterDelete={onDeleteCounter}
      />
    </CounterContext>
  );
}

export default CounterSection;
