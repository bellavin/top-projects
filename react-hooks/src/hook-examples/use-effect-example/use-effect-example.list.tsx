import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, randomNumber]);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  // componentDidUpdate (только для count)
  useEffect(() => {
    console.log("count обновлён");
  }, [count]);

  // componentDidUpdate (только для numbers)
  useEffect(() => {
    console.log("numbers обновлён");
  }, [numbers]);

  // componentDidUpdate
  useEffect(() => {
    console.log("Компонент обновился");
  });

  // componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log("Компонент смонтирован");

    return () => {
      console.log("Компонент будет размонтирован");
    };
  });

  return (
    <div>
      <div>
        Счетчик: {count}{" "}
        <button onClick={handleCount}>Увеличить счетчик</button>
      </div>
      <br />
      <button onClick={handleClick}>Новое число</button>
      <ul>
        {numbers.map((number) => (
          <li key={crypto.randomUUID()}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectExample;
