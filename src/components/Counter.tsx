import DeleteButton from "./DeleteButton";
import PrimaryButton from "./PrimaryButton";

interface Props {
  label: string;
  count: number;
  max: number;
}

function Counter({ label, count, max }: Props) {
  return (
    <div>
      <h1>{label}</h1>
      <DeleteButton></DeleteButton>
      <p>
        {count}/{max}
      </p>
      <PrimaryButton></PrimaryButton>
    </div>
  );
}

export default Counter;
