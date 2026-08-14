import { createContext } from "react";

export interface CounterData {
  id: number;
  count: number;
  max: number;
}

export const defaultCounters = [
  { id: 0, count: 0, max: 3 } as CounterData,
  { id: 1, count: 0, max: 3 } as CounterData,
  { id: 2, count: 0, max: 3 } as CounterData,
  { id: 3, count: 0, max: 3 } as CounterData,
];

export const CounterContext = createContext(defaultCounters);
