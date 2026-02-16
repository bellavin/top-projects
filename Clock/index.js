const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const secondDegree = (now.getSeconds() / 60) * 360;
  second.style.transform = `rotate(${secondDegree}deg)`;
}

document.querySelector("button").addEventListener("click", setDate);
