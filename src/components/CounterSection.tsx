import CounterGrid from "./CounterGrid";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function CounterSection() {
  return (
    <section>
      <div>
        <PrimaryButton text="+ Lägg till räknare" onClick={() => {}} />
        <SecondaryButton text="Nollställ alla räknare" onClick={() => {}} />
      </div>
      <CounterGrid />
    </section>
  );
}

export default CounterSection;
