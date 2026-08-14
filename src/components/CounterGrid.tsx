import Counter from "./Counter";

interface Props {
  onCounterClicked: (id: number) => void;
}

function CounterGrid({ onCounterClicked }: Props) {
  return (
    <nav>
      <Counter label="Räknare 1" id={0} onIncrement={onCounterClicked} />
      <Counter label="Räknare 2" id={1} onIncrement={onCounterClicked} />
      <Counter label="Räknare 3" id={2} onIncrement={onCounterClicked} />
      <Counter label="Räknare 4" id={3} onIncrement={onCounterClicked} />
    </nav>
  );
}

export default CounterGrid;
