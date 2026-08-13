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
      <h3>{label}</h3>
      <DeleteButton text="Ta bort" onClick={() => {}} />
      <p>
        {count}/{max}
      </p>
      <PrimaryButton text="Öka värde" onClick={() => {}} />
    </div>
  );
}

export default Counter;
