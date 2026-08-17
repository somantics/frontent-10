interface Props {
  points: number;
}

function Accumulator({ points }: Props) {
  return (
    <section className="border m-2 mx-20 p-2 rounded-md">
      <h2>Accumulator</h2>
      <p>{points}</p>
      <p>Total points accumulated.</p>
    </section>
  );
}

export default Accumulator;
