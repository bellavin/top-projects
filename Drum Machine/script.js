const drumButton1 = document.querySelector(".drum-button-1");
const drumButton2 = document.querySelector(".drum-button-2");
const drumButton3 = document.querySelector(".drum-button-3");

drumButton1.addEventListener("click", () => {
  const audio = new Audio("./8R8_FreePack/BD_8R8_Chroma11.wav");
  audio.play();
});

drumButton2.addEventListener("click", () => {
  const audio = new Audio("./8R8_FreePack/SD_8R8_Chroma11.wav");
  audio.play();
});

drumButton3.addEventListener("click", () => {
  const audio = new Audio("./8R8_FreePack/HH_8R8_Chroma.wav");
  audio.play();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Numpad1" || event.code === "Numpad3") {
    const audio = new Audio("./8R8_FreePack/BD_8R8_Chroma11.wav");
    audio.play();
  }

  if (event.code === "Numpad2") {
    const audio = new Audio("./8R8_FreePack/SD_8R8_Chroma11.wav");
    audio.play();
  }

  if (event.code === "Numpad7" || event.code === "Numpad9") {
    const audio = new Audio("./8R8_FreePack/HH_8R8_Chroma.wav");
    audio.play();
  }
});
