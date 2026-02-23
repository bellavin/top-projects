import { useEffect, useRef, useState } from "react";

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const UseRefTimerExample = () => {
  const [timeLeft, setTimeLeft] = useState(100);
  // Не будет работать, так как при каждом рендере будет создаваться новая переменная timer
  // которая не сохраняет значение между рендерами
  // let timer;

  // Будет работать, так как useRef сохраняет значение между рендерами и не вызывает повторный рендер при изменении
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const handleStartClick = () => {
    timerRef.current = setInterval(() => {
      // Не будет работать, так как замыкание сохраняет старое значение timeLeft
      // setTimeLeft(timeLeft);

      // Будет работать, так как мы используем функцию обновления состояния, которая получает актуальное значение timeLeft
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  };

  const handleStopClick = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h1>Time Left: {formatTime(timeLeft)}</h1>
      <button onClick={handleStartClick}>▶️ Старт</button>
      <button onClick={handleStopClick}>⏹ Стоп</button>
    </div>
  );
};

export default UseRefTimerExample;
