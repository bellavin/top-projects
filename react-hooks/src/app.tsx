import ClassComponentExample from "./hook-examples/class-component-example/class-component-example";
import UseEffectExample from "./hook-examples/use-effect-example/use-effect-example";
import UseRefScrollExample from "./hook-examples/use-ref-scroll-example/use-ref-scroll-example";
import UseRefTimerExample from "./hook-examples/use-ref-timer-example/use-ref-timer-example";

const App = () => {
  return (
    <>
      <UseRefTimerExample />
      <ClassComponentExample />
      <UseEffectExample />
      <UseRefScrollExample />
    </>
  );
};

export default App;
