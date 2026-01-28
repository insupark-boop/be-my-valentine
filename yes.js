setInterval(() => {
  const emoji = document.createElement("div");
  emoji.innerText = "🔥💃🎉";
  emoji.style.position = "absolute";
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 2000);
}, 300);
