document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy;

      try {
        await navigator.clipboard.writeText(value);

        const original = button.textContent;

        button.textContent = "✅ Copiado";

        setTimeout(() => {
          button.textContent = original;
        }, 2000);
      } catch (error) {
        console.error(error);

        alert("No se pudo copiar.");
      }
    });
  });
});

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.onclick = async () => {
    const value = button.dataset.copy;

    await navigator.clipboard.writeText(value);

    showThanks();
  };
});

function showThanks() {
  const overlay = document.getElementById("thanksOverlay");

  const particles = document.getElementById("particles");

  overlay.classList.add("show");

  for (let i = 0; i < 60; i++) {
    const p = document.createElement("div");

    p.className = "petal";

    p.innerHTML = Math.random() > 0.5 ? "🌸" : "💖";

    const angle = Math.random() * 360;

    const distance = 120 + Math.random() * 220;

    const x = Math.cos((angle * Math.PI) / 180) * distance;

    const y = Math.sin((angle * Math.PI) / 180) * distance;

    p.animate(
      [
        {
          transform: "translate(0,0) scale(.3)",
          opacity: 1,
        },

        {
          transform: `translate(${x}px,${y}px) rotate(${Math.random() * 720}deg) scale(1.6)`,
          opacity: 0,
        },
      ],
      {
        duration: 2200,

        easing: "ease-out",
      },
    );

    particles.appendChild(p);

    setTimeout(() => p.remove(), 2200);
  }

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 3200);
}
