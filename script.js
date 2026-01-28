const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const photo = document.querySelector(".valentine-img");

yesBtn.addEventListener("click", () => {
  message.innerText =
    "Yay!! 💕 I can’t wait to spend Valentine’s with you, Neha 😘";

  photo.style.display = "block";
  music.volume = 0.6;
  music.play();
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
