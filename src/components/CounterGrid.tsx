import { useContext } from "react";
import Counter from "./Counter";
import { CounterContext } from "../CounterContext";

interface Props {
  onCounterClicked: (id: number) => void;
  onCounterDelete: (id: number) => void;
}

function CounterGrid({ onCounterClicked, onCounterDelete }: Props) {
  const counters = useContext(CounterContext);
  return (
    <nav>
      {counters.map((item) => (
        <Counter
          label={`Räknare ${item.id + 1}`}
          id={item.id}
          onIncrement={onCounterClicked}
          onDelete={onCounterDelete}
        />
      ))}
    </nav>
  );
}

export default CounterGrid;
