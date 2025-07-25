function nextPage(page) {
  window.location.href = page;
}

const text = "Happy Birthday, Zaheen 🎂 You mean the world to me, Madam jii 💖 I really love you a lot baccha 💓";
let index = 0;
function typeText() {
  const target = document.getElementById("typing-text");
  if (target && index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 70);
  }
}
window.onload = typeText;

const canvas = document.getElementById('confetti-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const confetti = [];

  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < confetti.length; i++) {
      const p = confetti[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += 1;
      if (p.y > canvas.height) p.y = -10;
    }
    requestAnimationFrame(draw);
  }
  draw();
}
