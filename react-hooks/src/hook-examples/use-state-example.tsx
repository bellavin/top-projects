import { useState } from "react";

const UseStateExample = () => {
  // const numbers = [1, 2, 3, 4, 5];
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // numbers.push(randomNumber);
    // console.log(numbers);
    setNumbers([...numbers, randomNumber]);
  };

  return (
    <div>
      <h3>UseState Example</h3>
      <button onClick={handleClick}>Новое число</button>
      <ul>
        {numbers.map((number) => (
          <li key={crypto.randomUUID()}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateExample;
