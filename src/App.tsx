import "./App.css";
import Accumulator from "./components/Accumulator";
import CounterSection from "./components/CounterSection";
import GoalTracker from "./components/GoalTracker";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <GoalTracker />
      <Accumulator />
      <CounterSection />
    </>
  );
}

export default App;
