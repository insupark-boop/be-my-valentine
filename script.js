function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerText = "Neha 💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
