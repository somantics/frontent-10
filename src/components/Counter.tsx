import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import PrimaryButton from "./PrimaryButton";
import { CounterContext } from "../CounterContext";

interface Props {
  id: number;
  label: string;
  onIncrement: (id: number) => void;
  onDelete: (id: number) => void;
}

interface Count {
  current?: number;
  max?: number;
}

export default function Counter({ id, label, onIncrement, onDelete }: Props) {
  const counterData = useContext(CounterContext);

  const findCounterInfo = (id: number): Count => {
    const match = counterData.find((item) => item.id === id);
    return { current: match?.count, max: match?.max };
  };
  const { current, max } = findCounterInfo(id);

  const onClick = () => {
    onIncrement(id);
  };
  const onRemove = () => {
    onDelete(id);
  };

  const isAtMax = current !== undefined && max !== undefined && current >= max;

  return (
    <div>
      <h3>{label}</h3>
      <DeleteButton text="Ta bort" onClick={onRemove} />
      <p>
        {current}/{max}
      </p>
      <PrimaryButton text="Öka värde" onClick={onClick} disabled={isAtMax} />
    </div>
  );
}
