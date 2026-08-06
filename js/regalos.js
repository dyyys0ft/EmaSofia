import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { db } from "./firebase.js";

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
    id: 12,
    name: "Pañales Huggies talla 1 ",
    category: "panales",
    image: "assets/regalos/panales-1.jpg",
    description: "Perfectos para las primeras semanas.",
  },

  {
    id: 15,
    name: "Toallitas húmedas",
    category: "panales",
    image: "assets/regalos/toallitas.jpg",
    description: "Especiales para piel delicada.",
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
    image: "assets/regalos/zapaticos.jpg",
    description: "Pequeños y cómodos.",
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


<button
class="reserve-btn"
data-id="${gift.id}">

💗 Reservar

</button>


</div>

`;

    giftGrid.appendChild(card);
  });
  document.querySelectorAll(".reserve-btn").forEach((btn) => {
    btn.onclick = () => {
      openReservation(btn.dataset.id);
    };
  });
}

renderGifts(gifts);

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
      renderGifts(gifts);
    } else {
      renderGifts(gifts.filter((gift) => gift.category === category));
    }
  });
});

/*==================================================
        BUSCADOR
==================================================*/

const search = document.getElementById("search");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const result = gifts.filter((gift) =>
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
    alert("Ingresa tu nombre");

    return;
  }

  const reservas = collection(db, "reservas");

  const existe = query(
    reservas,

    where("id", "==", currentGift.id),
  );

  const docs = await getDocs(existe);

  if (!docs.empty) {
    alert("Este regalo ya fue reservado.");

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

  alert("¡Gracias por reservar!");

  loadReserved();
}

async function loadReserved() {
  const snapshot = await getDocs(collection(db, "reservas"));

  const ids = [];

  snapshot.forEach((doc) => {
    ids.push(doc.data().id);
  });

  const disponibles = gifts.filter((g) => !ids.includes(g.id));

  renderGifts(disponibles);
}

loadReserved();
