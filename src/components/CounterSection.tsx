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
  const [points, setPoints] = useState(0);
  const [nextIndex, setNextIndex] = useState(4);

  const onIncreaseCounter = (id: number) => {
    const oldCounter = counters.find((item) => item.id === id);
    if (oldCounter) {
      const newCounter = {
        id: oldCounter.id,
        count: oldCounter.count + 1,
        max: oldCounter.max,
      };
      const unchanged = counters.filter((item) => item.id !== id);
      const newCounters = [...unchanged, newCounter as CounterData];
      if (newCounters.reduce((total, item) => total + item.count, 0) >= 10) {
        setPoints(points + 1);
        onResetToZero();
      } else {
        updateCounters(newCounters);
      }
    }
  };

  const onCreateCounter = () => {
    const newCounter = {
      id: nextIndex,
      count: 0,
      max: 3,
    };

    updateCounters([...counters, newCounter]);
    setNextIndex(nextIndex + 1);
  };

  const onDeleteCounter = (id: number) => {
    updateCounters(counters.filter((item) => item.id !== id));
  };

  const onResetCounters = () => {
    updateCounters(defaultCounters);
    setNextIndex(4);
  };

  const onResetToZero = () => {
    const resetCounters = counters.map((old) => {
      return {
        id: old.id,
        count: 0,
        max: old.max,
      } as CounterData;
    });
    updateCounters(resetCounters);
  };

  const onReset = () => {
    onResetCounters();
    setPoints(0);
  };

  const updateCounters = (list: CounterData[]) => {
    setCounters(list.sort((a, b) => a.id - b.id));
  };

  return (
    <CounterContext value={counters}>
      <GoalTracker />
      <Accumulator points={points} />
      <div>
        <PrimaryButton text="+ Lägg till räknare" onClick={onCreateCounter} />
        <SecondaryButton text="Nollställ" onClick={onReset} />
      </div>
      <CounterGrid
        onCounterClicked={onIncreaseCounter}
        onCounterDelete={onDeleteCounter}
      />
    </CounterContext>
  );
}

export default CounterSection;
