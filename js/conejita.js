const bunny = document.getElementById("bunny");

const corners = ["tl", "tr", "bl", "br"];

function randomCorner() {
  return corners[Math.floor(Math.random() * corners.length)];
}

function showBunny() {
  // Limpiar clases anteriores
  bunny.classList.remove("tl", "tr", "bl", "br", "show");

  // Elegir esquina aleatoria
  bunny.classList.add(randomCorner());

  // Forzar reflow para reiniciar la animación
  void bunny.offsetWidth;

  // Mostrar
  bunny.classList.add("show");

  // Ocultar después de 4 segundos
  setTimeout(() => {
    bunny.classList.remove("show");
  }, 4000);
}

// Esperar un poco antes de la primera aparición
setTimeout(showBunny, 3000);

// Repetir cada 15 segundos
setInterval(showBunny, 15000);
