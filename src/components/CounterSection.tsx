import CounterGrid from "./CounterGrid";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function CounterSection() {
  return (
    <section>
      <div>
        <PrimaryButton></PrimaryButton>
        <SecondaryButton></SecondaryButton>
      </div>
      <CounterGrid />
    </section>
  );
}

export default CounterSection;
