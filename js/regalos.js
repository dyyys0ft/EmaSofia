import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

/*==================================================
        LISTA DE REGALOS
==================================================*/

const gifts = [
  {
    id: 1,
    name: "Biberón de vidrio libre de BPA",
    category: "alimentacion",
    image: "assets/regalos/biberon-vidrio.jpg",
    description: "Biberón seguro de vidrio, libre de BPA.",
  },

  {
    id: 11,
    name: "Pañales Huggies talla RN",
    category: "panales",
    image: "assets/regalos/panales-rn.jpg",
    description: "Para sus primeros días.",
  },

  {
    id: 58,
    name: "Asiento carro para bebè",
    category: "cuidado",
    image: "assets/regalos/panales-rn.jpg",
    description: "Para llevarla con nosotros a todas partes",
  },

  {
    id: 59,
    name: "Pañales Huggies talla RN",
    category: "panales",
    image: "assets/regalos/panales-rn.jpg",
    description: "Para sus primeros días.",
  },

  {
    id: 12,
    name: "Pañales Huggies talla 1",
    category: "panales",
    image: "assets/regalos/panales-rn.jpg",
    description: "Para sus primeros meses.",
  },

  {
    id: 61,
    name: "Pañales Huggies talla 2",
    category: "panales",
    image: "assets/regalos/panales-rn.jpg",
    description: "Para sus primeros meses.",
  },

  {
    id: 20,
    name: "Mameluco de algodón",
    category: "ropa",
    image: "assets/regalos/mameluco.jpg",
    description: "Suave y cómodo.",
  },

  {
    id: 21,
    name: "Vestido para bebé",
    category: "ropa",
    image: "assets/regalos/vestido.jpg",
    description: "Ideal para ocasiones especiales.",
  },

  {
    id: 22,
    name: "Monito de algodón",
    category: "ropa",
    image: "assets/regalos/monito.jpg",
    description: "Cómodo para el día a día.",
  },

  {
    id: 23,
    name: "Pijama para bebé",
    category: "ropa",
    image: "assets/regalos/pijama.jpg",
    description: "Para noches cómodas.",
  },

  {
    id: 24,
    name: "Gorritos",
    category: "ropa",
    image: "assets/regalos/gorrito.jpg",
    description: "Protegen su cabecita.",
  },

  {
    id: 27,
    name: "Zapatos",
    category: "ropa",
    description: "Pequeños y cómodos.",
  },

  {
    id: 90,
    name: "Body manga corta",
    category: "ropa",
    description: "Para mantener el calor de la bebé.",
  },

  {
    id: 91,
    name: "Monito Tejido",
    category: "ropa",
    description: "Para mantener el calor de la bebé.",
  },

  {
    id: 92,
    name: "Busitos",
    category: "ropa",
    description: "Para mantener el calor de la bebé.",
  },

  {
    id: 93,
    name: "Suéteres tejidos a mano",
    category: "ropa",
    description: "Para mantener el calor de la bebé.",
  },

  {
    id: 94,
    name: "Conjunto recién Nacido",
    category: "ropa",
    description: "Para su primera salida al mundo.",
  },

  {
    id: 28,
    name: "Chompa",
    category: "ropa",
    image: "assets/regalos/chaqueta.jpg",
    description: "Ideal para el frío.",
  },

  {
    id: 30,
    name: "Body manga larga",
    category: "ropa",
    image: "assets/regalos/body-largo.jpg",
    description: "Ideal para climas frescos.",
  },

  {
    id: 31,
    name: "Tina para baño plegable",
    category: "bano",
    image: "assets/regalos/tina.jpg",
    description: "Baños cómodos y seguros.",
  },

  {
    id: 32,
    name: "Toalla con capucha",
    category: "bano",
    image: "assets/regalos/toalla.jpg",
    description: "Muy suave para después del baño.",
  },

  {
    id: 38,
    name: "Cobija para bebé",
    category: "cuidado",
    image: "assets/regalos/cobija.jpg",
    description: "Suave y calentita.",
  },

  {
    id: 39,
    name: "Manta de algodón",
    category: "cuidado",
    image: "assets/regalos/manta-algodon.jpg",
    description: "Ideal para el descanso.",
  },

  {
    id: 70,
    name: "Fular para amarcar bebés",
    category: "cuidado",
    image: "assets/regalos/sabanas.jpg",
    description: "Porta Bebés.",
  },

  {
    id: 71,
    name: "Alfombra antigolpes",
    category: "cuidado",
    image: "assets/regalos/sabanas.jpg",
    description: "Alfombra para sus primeros gateos y pasos",
  },

  {
    id: 41,
    name: "Protector impermeable para colchón",
    category: "cuidado",
    image: "assets/regalos/protector-colchon.jpg",
    description: "Protege el colchón de accidentes.",
  },

  {
    id: 43,
    name: "Almohada de lactancia",
    category: "cuidado",
    image: "assets/regalos/almohada.jpg",
    description: "Brinda comodidad durante la lactancia.",
  },

  {
    id: 45,
    name: "Cámara para bebé",
    category: "cuidado",
    image: "assets/regalos/camara-bebe.jpg",
    description:
      "Monitor con cámara para vigilar a Emma Sofía en todo momento.",
  },

  {
    id: 50,
    name: "Osito de peluche",
    category: "juguetes",
    image: "assets/regalos/osito.jpg",
    description: "Un compañero suave para sus primeros años.",
  },

  {
    id: 51,
    name: "Sonajero musical",
    category: "juguetes",
    image: "assets/regalos/sonajero.jpg",
    description: "Estimula los sentidos del bebé.",
  },

  {
    id: 52,
    name: "Mordedor de silicona",
    category: "juguetes",
    image: "assets/regalos/mordedor.jpg",
    description: "Ideal para aliviar las molestias de la dentición.",
  },

  {
    id: 53,
    name: "Gimnasio de actividades",
    category: "juguetes",
    image: "assets/regalos/gimnasio.jpg",
    description: "Favorece el desarrollo motriz y sensorial.",
  },

  {
    id: 80,
    name: "Peluche de apego",
    category: "juguetes",
    description:
      "Peluche suave y seguro para acompañar a Emma Sofía durante sus primeros meses, brindándole tranquilidad y comodidad.",
  },

  {
    id: 81,
    name: "Cuna Corral Colecho",
    category: "descanso",
    description:
      "Cuna práctica y segura que permite mantener a la bebé cerca durante el descanso, facilitando el cuidado nocturno.",
  },

  {
    id: 82,
    name: "Colchón para bebé",
    category: "descanso",
    description:
      "Colchón diseñado para brindar soporte, comodidad y un descanso adecuado durante los primeros meses de Emma Sofía.",
  },

  {
    id: 83,
    name: "Pañalera",
    category: "accesorios",
    description:
      "Bolso organizador ideal para llevar pañales, ropa y todos los accesorios necesarios para las salidas con la bebé.",
  },

  {
    id: 84,
    name: "Termómetro para bañera",
    category: "bano",
    description:
      "Accesorio que permite controlar la temperatura del agua para que el baño de Emma Sofía sea seguro y confortable.",
  },

  {
    id: 85,
    name: "Kit de aseo bebé",
    category: "cuidado",
    description:
      "Kit con accesorios esenciales para la higiene diaria y el cuidado de la piel delicada de la bebé.",
  },

  {
    id: 100,
    name: "Mecedora Eléctrica",
    category: "cuidado",
    description: "Mecedora para dormir a la bebé",
  },
];

/*==================================================
        VARIABLES
==================================================*/

let availableGifts = [];
let currentGift = null;
let isReserving = false;

/*==================================================
        ELEMENTOS HTML
==================================================*/

const giftGrid = document.getElementById("giftGrid");

const modal = document.getElementById("reservationModal");

const selected = document.getElementById("giftSelected");

const guest = document.getElementById("guestName");

const confirm = document.getElementById("confirmReserve");

const cancel = document.getElementById("cancelReserve");

const search = document.getElementById("search");

const topButton = document.getElementById("topButton");

/*==================================================
        ESCAPE HTML
==================================================*/

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*==================================================
        RENDERIZAR REGALOS
==================================================*/

function renderGifts(list) {
  if (!giftGrid) return;

  giftGrid.innerHTML = "";

  if (list.length === 0) {
    giftGrid.innerHTML = `
      <div class="no-results">
        <p>💗 No encontramos regalos con ese criterio.</p>
      </div>
    `;

    return;
  }

  list.forEach((gift) => {
    const card = document.createElement("article");

    card.className = "gift-card";

    const ribbon = gift.reservado
      ? `
        <div class="reserved-ribbon">
          <span>Reservado por</span>
          <strong>${escapeHTML(gift.nombre || "Invitado")}</strong>
        </div>
      `
      : "";

    const button = gift.reservado
      ? `
        <button
          class="reserve-btn reserved"
          disabled
          type="button"
        >
          💖 Ya reservado
        </button>
      `
      : `
        <button
          class="reserve-btn"
          data-id="${gift.id}"
          type="button"
        >
          💗 Reservar
        </button>
      `;

    card.innerHTML = `
      ${ribbon}

      <div class="gift-content">

        <span class="category">
          ${escapeHTML(gift.category || "")}
        </span>

        <h3>
          ${escapeHTML(gift.name)}
        </h3>

        <p class="description">
          ${escapeHTML(gift.description || "")}
        </p>

        ${button}

      </div>
    `;

    giftGrid.appendChild(card);
  });

  /*
   * Agregar eventos después de crear las tarjetas.
   */
  document.querySelectorAll(".reserve-btn:not(.reserved)").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;

      if (!id) return;

      openReservation(id);
    });
  });
}

/*==================================================
        TOAST
==================================================*/

function showToast(message) {
  const toast = document.getElementById("toast");

  const text = document.getElementById("toastText");

  if (!toast || !text) return;

  text.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/*==================================================
        ABRIR MODAL
==================================================*/

function openReservation(id) {
  currentGift = gifts.find((gift) => String(gift.id) === String(id));

  if (!currentGift) {
    console.error("Regalo no encontrado:", id);

    return;
  }

  /*
   * Si por alguna razón ya está reservado,
   * no permitimos abrir el modal.
   */
  if (currentGift.reservado) {
    showToast("🎁 Este regalo ya fue reservado.");

    return;
  }

  selected.innerHTML = `
    <strong>${escapeHTML(currentGift.name)}</strong>
  `;

  guest.value = "";

  /*
   * Cada vez que se abre un nuevo regalo,
   * el botón comienza disponible.
   */
  isReserving = false;

  confirm.disabled = false;

  confirm.textContent = "Reservar";

  cancel.disabled = false;

  modal.classList.add("show");

  /*
   * Enfocar automáticamente el nombre.
   */
  setTimeout(() => {
    guest.focus();
  }, 100);
}

/*==================================================
        CERRAR MODAL
==================================================*/

cancel.addEventListener("click", () => {
  /*
   * No permitir cerrar mientras se está guardando.
   */
  if (isReserving) {
    return;
  }

  modal.classList.remove("show");
});

/*==================================================
        CLICK FUERA DEL MODAL
==================================================*/

modal.addEventListener("click", (event) => {
  if (event.target !== modal) return;

  /*
   * No cerrar durante el guardado.
   */
  if (isReserving) {
    return;
  }

  modal.classList.remove("show");
});

/*==================================================
        RESERVAR REGALO
==================================================*/

confirm.addEventListener("click", reserveGift);

async function reserveGift() {
  /*
   * =================================================
   * 🔒 BLOQUEO INMEDIATO
   * =================================================
   *
   * Esto ocurre ANTES de cualquier await.
   *
   * Así, aunque el usuario haga doble click,
   * el segundo click será ignorado.
   */

  if (isReserving) {
    return;
  }

  isReserving = true;

  confirm.disabled = true;

  cancel.disabled = true;

  confirm.textContent = "Guardando...";

  /*
   * También evitamos cerrar el modal.
   */

  try {
    if (!currentGift) {
      throw new Error("No hay un regalo seleccionado.");
    }

    const nombre = guest.value.trim();

    /*
     * ================================================
     * VALIDAR NOMBRE
     * ================================================
     */

    if (!nombre) {
      showToast("✏️ Ingresa tu nombre.");

      /*
       * No se ha intentado guardar todavía,
       * por lo que sí podemos desbloquear.
       */

      isReserving = false;

      confirm.disabled = false;

      cancel.disabled = false;

      confirm.textContent = "Reservar";

      guest.focus();

      return;
    }

    /*
     * ================================================
     * FIREBASE
     * ================================================
     */

    const reservas = collection(db, "reservas");

    /*
     * Verificar si alguien ya reservó este regalo.
     */

    const existe = query(reservas, where("id", "==", currentGift.id));

    const docs = await getDocs(existe);

    /*
     * ================================================
     * YA ESTABA RESERVADO
     * ================================================
     */

    if (!docs.empty) {
      showToast("🎁 Este regalo ya fue reservado.");

      modal.classList.remove("show");

      await loadReserved();

      /*
       * No desbloqueamos porque la operación
       * terminó y el regalo ya está reservado.
       */

      return;
    }

    /*
     * ================================================
     * GUARDAR RESERVA
     * ================================================
     */

    await addDoc(reservas, {
      id: currentGift.id,

      nombre: nombre,

      articulo: currentGift.name,

      fecha: new Date().toISOString(),
    });

    /*
     * ================================================
     * RESERVA EXITOSA
     * ================================================
     */

    confirm.textContent = "✓ Reservado";

    modal.classList.remove("show");

    showToast("💖 ¡Muchas gracias por tu regalo!");

    /*
     * Recargar reservas para que inmediatamente
     * aparezca la cinta "Reservado por..."
     */

    await loadReserved();

    /*
     * IMPORTANTE:
     *
     * isReserving permanece true.
     *
     * El botón permanece disabled.
     */
  } catch (error) {
    console.error("Error al guardar la reserva:", error);

    /*
     * ================================================
     * ERROR REAL
     * ================================================
     *
     * Solamente aquí desbloqueamos el botón.
     */

    isReserving = false;

    confirm.disabled = false;

    cancel.disabled = false;

    confirm.textContent = "Reservar";

    showToast("❌ No se pudo guardar la reserva. Intenta nuevamente.");
  }
}

/*==================================================
        CARGAR RESERVAS
==================================================*/

async function loadReserved() {
  try {
    const snapshot = await getDocs(collection(db, "reservas"));

    /*
     * Limpiar estado anterior.
     */

    gifts.forEach((gift) => {
      gift.reservado = false;

      gift.nombre = "";
    });

    /*
     * Aplicar las reservas existentes.
     */

    snapshot.forEach((doc) => {
      const reserva = doc.data();

      const gift = gifts.find((g) => Number(g.id) === Number(reserva.id));

      if (gift) {
        gift.reservado = true;

        gift.nombre = reserva.nombre || "Invitado";
      }
    });

    /*
     * Actualizar lista disponible.
     */

    availableGifts = [...gifts];

    /*
     * Renderizar.
     */

    renderGifts(availableGifts);
  } catch (error) {
    console.error("Error cargando las reservas:", error);

    showToast("❌ No se pudieron cargar las reservas.");
  }
}

/*==================================================
        FILTROS
==================================================*/

const filterButtons = document.querySelectorAll(".filter");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    /*
     * Actualizar botón activo.
     */

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.filter;

    /*
     * Todos.
     */

    if (category === "all") {
      renderGifts(availableGifts);

      return;
    }

    /*
     * Filtrar por categoría.
     */

    const filtered = availableGifts.filter(
      (gift) =>
        String(gift.category).toLowerCase() === String(category).toLowerCase(),
    );

    renderGifts(filtered);
  });
});

/*==================================================
        BUSCADOR
==================================================*/

if (search) {
  search.addEventListener("input", () => {
    const value = search.value.trim().toLowerCase();

    /*
     * Si no hay texto,
     * mostrar todos.
     */

    if (!value) {
      renderGifts(availableGifts);

      return;
    }

    /*
     * Buscar por nombre,
     * descripción o categoría.
     */

    const result = availableGifts.filter((gift) => {
      const name = String(gift.name || "").toLowerCase();

      const description = String(gift.description || "").toLowerCase();

      const category = String(gift.category || "").toLowerCase();

      return (
        name.includes(value) ||
        description.includes(value) ||
        category.includes(value)
      );
    });

    renderGifts(result);
  });
}

/*==================================================
        BOTÓN ARRIBA
==================================================*/

if (topButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/*==================================================
        TECLA ESC
==================================================*/

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  /*
   * No permitir cerrar durante el guardado.
   */

  if (isReserving) {
    return;
  }

  modal.classList.remove("show");
});

/*==================================================
        INICIALIZAR
==================================================*/

loadReserved();
