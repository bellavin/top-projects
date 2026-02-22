// console.log(inputElem)
// console.dir(inputElem)
const input1Elem = document.querySelector(".input-1");
const input2Elem = document.querySelector(".input-2");
const spanElem = document.querySelector(".math-sign-span");
const mathSignElems = document.querySelectorAll(".math-sign");
const resultElem = document.querySelector(".result");

const handleInput = () => {
  switch (spanElem.textContent) {
    case "+":
      resultElem.textContent =
        Number(input1Elem.value) + Number(input2Elem.value);
      break;
    case "-":
      resultElem.textContent =
        Number(input1Elem.value) - Number(input2Elem.value);
      break;
    case "*":
      resultElem.textContent =
        Number(input1Elem.value) * Number(input2Elem.value);
      break;
    case "/":
      resultElem.textContent =
        Number(input1Elem.value) / Number(input2Elem.value);
      break;
  }
};
input1Elem.addEventListener("input", handleInput);
input2Elem.addEventListener("input", handleInput);

mathSignElems.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    spanElem.textContent = event.target.textContent;
    handleInput();
  });
});
