import { useContext } from "react";
import Counter from "./Counter";
import { CounterContext } from "../CounterContext";

interface Props {
  onCounterClicked: (id: number) => void;
}

function CounterGrid({ onCounterClicked }: Props) {
  const counters = useContext(CounterContext);
  return (
    <nav>
      {counters.map((item) => (
        <Counter
          label={`Räknare ${item.id + 1}`}
          id={item.id}
          onIncrement={onCounterClicked}
        />
      ))}
    </nav>
  );
}

export default CounterGrid;
