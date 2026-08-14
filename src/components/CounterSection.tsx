import { createContext, useState } from "react";
import Accumulator from "./Accumulator";
import CounterGrid from "./CounterGrid";
import GoalTracker from "./GoalTracker";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface CounterData {
  id: number;
  count: number;
  max: number;
}

const defaultCounters = [
  { id: 0, count: 0, max: 3 } as CounterData,
  { id: 1, count: 0, max: 3 } as CounterData,
  { id: 2, count: 0, max: 3 } as CounterData,
  { id: 3, count: 0, max: 3 } as CounterData,
];

const CounterContext = createContext(defaultCounters);

function CounterSection() {
  return (
    <CounterContext value={defaultCounters}>
      <GoalTracker />
      <Accumulator />
      <div>
        <PrimaryButton text="+ Lägg till räknare" onClick={() => {}} />
        <SecondaryButton text="Nollställ alla räknare" onClick={() => {}} />
      </div>
      <CounterGrid />
    </CounterContext>
  );
}

export default CounterSection;
