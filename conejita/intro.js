//==================================================
// ELEMENTOS
//==================================================

const bunny = document.getElementById("bunny");
const heart = document.getElementById("heart");
const flowers = document.getElementById("flowers");
const flash = document.getElementById("flash");
const intro = document.getElementById("intro");
const website = document.getElementById("website");

//==================================================
// CONFIGURACIÓN
//==================================================

const CONFIG = {
  bunnyAppear: 1000,
  bunnyFloat: 2000,
  heart: 3000,
  flowers: 3000,
  flash: 3500,
  reveal: 4800,
};

//==================================================
// INICIO
//==================================================

window.onload = () => {
  document.body.style.overflow = "hidden";

  startAnimation();
};

//==================================================
// SECUENCIA
//==================================================

function startAnimation() {
  // Respiración

  setTimeout(() => {
    bunny.style.animation = "breathe 1.5s ease-in-out infinite";
  }, CONFIG.bunnyFloat);

  // Corazón

  setTimeout(showHeart, CONFIG.heart);

  // Flores

  setTimeout(createFlowerExplosion, CONFIG.flowers);

  // Destello

  setTimeout(showFlash, CONFIG.flash);

  // Mostrar página

  setTimeout(showWebsite, CONFIG.reveal);
}

//==================================================
// CORAZÓN
//==================================================

function showHeart() {
  heart.animate(
    [
      {
        opacity: 0,

        transform: "translate(-50%,0) scale(.3)",
      },

      {
        opacity: 1,

        transform: "translate(-50%,-50px) scale(1.2)",
      },

      {
        opacity: 0,

        transform: "translate(-50%,-130px) scale(.8)",
      },
    ],
    {
      duration: 800,

      easing: "ease-out",
    },
  );
}

//==================================================
// FLORES
//==================================================

function createFlowerExplosion() {
  const total = 90;

  for (let i = 0; i < total; i++) {
    const flower = document.createElement("div");

    flower.innerHTML = "🌸";

    flower.style.position = "absolute";

    flower.style.left = "50%";

    flower.style.top = "45%";

    flower.style.fontSize = 18 + Math.random() * 18 + "px";

    flower.style.pointerEvents = "none";

    const angle = Math.random() * 360;

    const distance = 150 + Math.random() * 350;

    const x = Math.cos((angle * Math.PI) / 180) * distance;

    const y = Math.sin((angle * Math.PI) / 180) * distance;

    flower.animate(
      [
        {
          transform: "translate(0,0) scale(.3)",

          opacity: 1,
        },

        {
          transform: `translate(${x}px,${y}px)
                 rotate(${Math.random() * 720}deg)
                 scale(1.6)`,

          opacity: 0,
        },
      ],
      {
        duration: 1500,

        easing: "ease-out",
      },
    );

    flowers.appendChild(flower);

    setTimeout(() => flower.remove(), 1500);
  }
}

//==================================================
// FLASH
//==================================================

function showFlash() {
  flash.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], {
    duration: 500,

    easing: "ease",
  });
}

//==================================================
// REVELAR PÁGINA
//==================================================

function showWebsite() {
  intro.style.transition = "opacity 1s";

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";

    website.classList.add("show");

    document.body.style.overflow = "auto";
  }, 1500);
}

const params = new URLSearchParams(window.location.search);

window.addEventListener("load", () => {
  if (params.has("skipIntro")) {
    intro.style.display = "none";
    website.classList.add("show");
    document.body.style.overflow = "auto";
    return;
  }

  startAnimation();
});
