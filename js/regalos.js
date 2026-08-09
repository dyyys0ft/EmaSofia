import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
/*==================================================
        CONFIGURACIÓN WHATSAPP
==================================================*/

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
    id: 2,
    name: "Biberón anticólicos",
    category: "alimentacion",
    image: "assets/regalos/biberon-anticolico.jpg",
    description: "Ayuda a reducir gases y molestias.",
  },
  {
    id: 3,
    name: "Esterilizador de biberones",
    category: "alimentacion",
    image: "assets/regalos/esterilizador.jpg",
    description: "Mantiene limpios los accesorios del bebé.",
  },
  {
    id: 4,
    name: "Calienta biberones",
    category: "alimentacion",
    image: "assets/regalos/calienta-biberon.jpg",
    description: "Calienta la leche rápidamente.",
  },
  {
    id: 5,
    name: "Cepillo limpia biberones",
    category: "alimentacion",
    image: "assets/regalos/cepillo-biberon.jpg",
    description: "Limpieza profunda para biberones.",
  },

  {
    id: 7,
    name: "Baberos impermeables",
    category: "alimentacion",
    image: "assets/regalos/baberos.jpg",
    description: "Protegen la ropa durante las comidas.",
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
    name: "Mecedora eléctrica",
    category: "Cuidado",
    image: "assets/regalos/panales-rn.jpg",
    description: "Para dormir rapido a la bebé",
  },
  {
    id: 59,
    name: "Pañales Huggies talla RN",
    category: "panales",
    image: "assets/regalos/panales-rn.jpg",
    description: "Para sus primeros días.",
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
    id: 40,
    name: "Sábanas para cuna",
    category: "cuidado",
    image: "assets/regalos/sabanas.jpg",
    description: "Juego de sábanas suaves.",
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
    name: "Mecedoraé",
    category: "cuidado",
    description: "Mecedora para dormir a la bebé",
  },
];

/*==================================================
        CREAR TARJETAS
==================================================*/

const giftGrid = document.getElementById("giftGrid");

function renderGifts(list) {
  giftGrid.innerHTML = "";

  list.forEach((gift) => {
    const card = document.createElement("article");

    card.className = "gift-card";

    card.innerHTML = `

        ${
          gift.reservado
            ? `
            <div class="reserved-ribbon">
                Reservado por<br>
                <strong>${gift.nombre}</strong>
            </div>
        `
            : ""
        }

       

        <div class="gift-content">

            <span class="category">
                ${gift.category}
            </span>

            <h3>
                ${gift.name}
            </h3>

            <p class="description">
                ${gift.description}
            </p>

            ${
              gift.reservado
                ? `
                <button class="reserve-btn reserved" disabled>
                    💖 Reservado
                </button>
                `
                : `
                <button
                    class="reserve-btn"
                    data-id="${gift.id}">
                    💗 Reservar
                </button>
                `
            }

        </div>

        `;

    giftGrid.appendChild(card);
  });

  // Agregar eventos a los botones nuevos
  document.querySelectorAll(".reserve-btn:not(.reserved)").forEach((btn) => {
    btn.onclick = () => {
      openReservation(btn.dataset.id);
    };
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");

  const text = document.getElementById("toastText");

  if (!toast || !text) return;

  text.innerHTML = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/*==================================================
        FILTROS
==================================================*/

const buttons = document.querySelectorAll(".filter");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));

    button.classList.add("active");

    const category = button.dataset.filter;

    if (category === "all") {
      renderGifts(availableGifts);

      return;
    }

    const filtered = availableGifts.filter(
      (gift) => gift.category === category,
    );

    renderGifts(filtered);
  });
});

/*==================================================
        BUSCADOR
==================================================*/

const search = document.getElementById("search");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const result = availableGifts.filter((gift) =>
    gift.name.toLowerCase().includes(value),
  );

  renderGifts(result);
});

/*==================================================
        BOTÓN ARRIBA
==================================================*/

const topButton = document.getElementById("topButton");

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

const modal = document.getElementById("reservationModal");

const selected = document.getElementById("giftSelected");

const guest = document.getElementById("guestName");

const confirm = document.getElementById("confirmReserve");

const cancel = document.getElementById("cancelReserve");

let currentGift = null;

function openReservation(id) {
  currentGift = gifts.find((g) => g.id == id);

  selected.innerHTML = `<strong>${currentGift.name}</strong>`;

  guest.value = "";

  modal.classList.add("show");
}

cancel.onclick = () => {
  modal.classList.remove("show");
};

confirm.onclick = reserveGift;

async function reserveGift() {
  const nombre = guest.value.trim();

  if (nombre == "") {
    showToast("✏️ Ingresa tu nombre.");

    return;
  }

  const reservas = collection(db, "reservas");

  const existe = query(
    reservas,

    where("id", "==", currentGift.id),
  );

  const docs = await getDocs(existe);

  if (!docs.empty) {
    showToast("🎁 Este regalo ya fue reservado.");

    modal.classList.remove("show");

    loadReserved();

    return;
  }

  await addDoc(reservas, {
    id: currentGift.id,

    nombre: nombre,

    articulo: currentGift.name,

    fecha: new Date().toISOString(),
  });

  modal.classList.remove("show");

  showToast("💖 ¡Muchas gracias por tu regalo!");

  loadReserved();
}

async function loadReserved() {
  const snapshot = await getDocs(collection(db, "reservas"));

  // Limpiar estado anterior
  gifts.forEach((gift) => {
    gift.reservado = false;
    gift.nombre = "";
  });

  snapshot.forEach((doc) => {
    const reserva = doc.data();

    const gift = gifts.find((g) => Number(g.id) === Number(reserva.id));

    if (gift) {
      gift.reservado = true;
      gift.nombre = reserva.nombre;
    }
  });

  availableGifts = [...gifts];

  renderGifts(availableGifts);
}

loadReserved();

let availableGifts = [];

const ribbon = gift.reservado
  ? `
<div class="reserved-ribbon">
    Reservado por<br>
    <strong>${gift.nombre}</strong>
</div>`
  : "";

card.innerHTML = `
${ribbon}

<div class="gift-image">
    <img
        src="${gift.image}"
        alt="${gift.name}"
        loading="lazy"
        onerror="this.src='assets/regalos/default.jpg'">
</div>

<div class="gift-content">

    <span class="category">${gift.category}</span>

    <h3>${gift.name}</h3>

    <p class="description">${gift.description}</p>

    ${
      gift.reservado
        ? `<button class="reserve-btn reserved" disabled>
              💝 Ya reservado
           </button>`
        : `<button class="reserve-btn"
              data-id="${gift.id}">
              💗 Reservar
           </button>`
    }

</div>
`;

snapshot.forEach((doc) => {
  const data = doc.data();

  const gift = gifts.find((g) => g.id === data.id);

  if (gift) {
    gift.reservado = true;

    gift.nombre = data.nombre;
  }
});

renderGifts(gifts);
