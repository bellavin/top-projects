import { useState } from "react";
import List from "./use-effect-example.list";

const UseEffectExample = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h3>UseEffect Example</h3>
      <button onClick={() => setVisible((prev) => !prev)}>
        Показать / Скрыть функциональный компонент
      </button>
      <br />
      <br />
      {visible && <List />}
    </div>
  );
};

export default UseEffectExample;
