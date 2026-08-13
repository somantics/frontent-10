import Counter from "./Counter";

function CounterGrid() {
  return (
    <nav>
      <Counter label="Räknare 1" count={0} max={3} />
      <Counter label="Räknare 2" count={0} max={3} />
      <Counter label="Räknare 3" count={0} max={3} />
      <Counter label="Räknare 4" count={0} max={3} />
    </nav>
  );
}

export default CounterGrid;
