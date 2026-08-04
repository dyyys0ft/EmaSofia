const intro = document.getElementById("intro");
const website = document.getElementById("website");
const flowers = document.getElementById("flowers");

function createFlower() {
  const flower = document.createElement("div");

  flower.className = "flower";

  const angle = Math.random() * Math.PI * 2;

  const distance = 300 + Math.random() * 350;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  flower.style.left = "50%";
  flower.style.top = "50%";

  flower.style.setProperty("--x", `${x}px`);
  flower.style.setProperty("--y", `${y}px`);

  flower.style.background = [
    "#ffd6ea",
    "#e8d8ff",
    "#fff3a8",
    "#ffcce2",
    "#ffffff",
  ][Math.floor(Math.random() * 5)];

  flower.style.animationDuration = 2 + Math.random() * 2 + "s";

  flowers.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 4000);
}

/*---------------------------------------
    EXPLOSION
---------------------------------------*/

function explode() {
  for (let i = 0; i < 180; i++) {
    setTimeout(createFlower, i * 8);
  }
}

/*---------------------------------------
    TIMELINE
---------------------------------------*/

// La coneja tarda 4.5 segundos en crecer

setTimeout(() => {
  explode();
}, 4200);

// Después desaparece la intro

setTimeout(() => {
  intro.classList.add("intro-hide");

  website.classList.add("show");

  document.body.style.overflow = "auto";
}, 6500);
