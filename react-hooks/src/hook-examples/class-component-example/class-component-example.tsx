import { useState } from "react";
import List from "./class-component-example.list";

const ClassComponentExample = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h3>Class Component Example</h3>
      <button onClick={() => setVisible((prev) => !prev)}>Скрыть</button>
      <br />
      <br />
      {visible && <List />}
    </div>
  );
};

export default ClassComponentExample;
