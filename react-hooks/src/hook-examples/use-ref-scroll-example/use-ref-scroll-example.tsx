import { useEffect, useRef, useState } from "react";
import styles from "./use-ref-scroll-example.module.scss";

const listClass = styles["use-ref-scroll-example__list"];
const itemClass = styles["use-ref-scroll-example__item"];
const buttonClass = styles["use-ref-scroll-example__button"];

const UseRefScrollExample = () => {
  // let ulElem;
  const ulElem = useRef<HTMLUListElement | null>(null);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleScroll = () => {
    console.log("scroll");
  };

  useEffect(() => {
    // ulElem = document.querySelector(`.${listClass}`);`

    // if (ulElem === null) {
    if (ulElem.current === null) {
      return;
    }

    // ulElem.addEventListener("scroll", handleScroll);
    ulElem.current.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(ulElem);
  }, [numbers]);

  const handleClick = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const handleRemoveEvent = () => {
    // if (!ulElem) {
    if (!ulElem.current) {
      return;
    }

    // ulElem.removeEventListener("scroll", handleScroll);
    ulElem.current.removeEventListener("scroll", handleScroll);
  };

  return (
    <div>
      <h3>UseRef Scroll Example</h3>
      <ul className={listClass} ref={ulElem}>
        {numbers.map((number) => (
          <li className={itemClass} key={number}>
            {number}
          </li>
        ))}
      </ul>
      <button className={buttonClass} onClick={handleClick}>
        ✅ Добавить число
      </button>
      <button className={buttonClass} onClick={handleRemoveEvent}>
        ⛔ Удалить событие scroll
      </button>
    </div>
  );
};

export default UseRefScrollExample;
