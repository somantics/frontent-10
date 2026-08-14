interface Props {
  points: number;
}

function Accumulator({ points }: Props) {
  return (
    <section>
      <h2>Accumulator</h2>
      <p>{points}</p>
      <p>Total points accumulated.</p>
    </section>
  );
}

export default Accumulator;
