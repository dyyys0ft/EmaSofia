/*=========================================
        FECHA DEL EVENTO
=========================================*/

// Año, Mes (0-11), Día, Hora, Minuto
const eventDate = new Date(2026, 7, 29, 15, 0, 0);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

/*=========================================
        CONTADOR
=========================================*/

function updateCountdown() {
  const now = new Date();

  const difference = eventDate - now;

  if (difference <= 0) {
    document.querySelector(".countdown").innerHTML = `

            <div style="
                grid-column:1/-1;
                font-size:2rem;
                color:#D4AF37;
                font-weight:bold;
                padding:30px;
            ">
                🎉 ¡Hoy celebramos la llegada de Emma Sofía! 🐇💕
            </div>

        `;

    return;
  }

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));

  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const s = Math.floor((difference % (1000 * 60)) / 1000);

  days.textContent = String(d).padStart(2, "0");
  hours.textContent = String(h).padStart(2, "0");
  minutes.textContent = String(m).padStart(2, "0");
  seconds.textContent = String(s).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

/*=========================================
        SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

/*=========================================
        CORAZONES
=========================================*/

const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");

  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 18 + Math.random() * 20 + "px";

  heart.style.animationDuration = 8 + Math.random() * 8 + "s";

  heart.style.opacity = Math.random();

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 16000);
}

setInterval(createHeart, 1200);

/*=========================================
        ESTRELLAS
=========================================*/

const stars = document.querySelector(".stars");

function createStar() {
  const star = document.createElement("span");

  star.innerHTML = "✨";

  star.style.left = Math.random() * 100 + "vw";

  star.style.top = Math.random() * 100 + "vh";

  star.style.fontSize = 8 + Math.random() * 10 + "px";

  star.style.opacity = Math.random();

  stars.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000);
}

setInterval(createStar, 350);

/*=========================================
        PARTÍCULAS DORADAS
=========================================*/

const particles = document.querySelector(".particles");

function createParticle() {
  const p = document.createElement("div");

  p.className = "particle";

  p.style.left = Math.random() * 100 + "vw";

  p.style.width = 3 + Math.random() * 6 + "px";

  p.style.height = p.style.width;

  p.style.animationDuration = 10 + Math.random() * 10 + "s";

  particles.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 20000);
}

setInterval(createParticle, 450);

/*=========================================
        EFECTO SOBRE CONTADOR
=========================================*/

const boxes = document.querySelectorAll(".time-box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "translateY(-10px) scale(1.05)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "";
  });
});

/*=========================================
        APARICIÓN HERO
=========================================*/

window.addEventListener("load", () => {
  document.querySelector(".hero-card").classList.add("loaded");
});

/*=========================================
        EFECTO BRILLO EN EL TÍTULO
=========================================*/

const title = document.querySelector("h1");

setInterval(() => {
  title.animate(
    [
      {
        transform: "scale(1)",
      },

      {
        transform: "scale(1.03)",
      },

      {
        transform: "scale(1)",
      },
    ],
    {
      duration: 1200,
    },
  );
}, 7000);

/*=========================================
        SCROLL INDICATOR
=========================================*/

window.addEventListener("scroll", () => {
  const arrow = document.querySelector(".scroll-indicator");

  if (window.scrollY > 100) {
    arrow.style.opacity = 0;
  } else {
    arrow.style.opacity = 1;
  }
});

if (localStorage.getItem("introPlayed")) {
  // Saltar intro
} else {
  localStorage.setItem("introPlayed", "true");

  startAnimation();
}
