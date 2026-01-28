const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const nextPageBtn = document.getElementById("nextPageBtn");

yesBtn.addEventListener("click", () => {
  message.innerText = "Feb 14 is now scheduled with INSU 💕";
  music.play();
  launchConfetti();
  startHearts();
  nextPageBtn.style.display = "inline-block";
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
});

nextPageBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖 Neha";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = "🎉";
    confetti.style.position = "absolute";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2000);
  }
}
