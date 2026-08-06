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
    category: "alimentacion ",
    image: "assets/regalos/biberon-vidrio.jpg",
    description:
      "Biberón seguro de vidrio, libre de plástico y materiales tóxicos.",
  },

  {
    id: 2,
    name: "Biberón anticólicos",
    category: "alimentacion",
    image: "assets/regalos/biberon-anticolico.jpg",
    description: "Ideal para reducir gases y molestias del bebé.",
  },

  {
    id: 3,
    name: "Esterilizador de biberones",
    category: "alimentacion",
    image: "assets/regalos/esterilizador.jpg",
    description: "Mantiene los accesorios del bebé limpios y seguros.",
  },

  {
    id: 4,
    name: "Calienta biberones",
    category: "alimentacion",
    image: "assets/regalos/calienta-biberon.jpg",
    description: "Para preparar la leche fácilmente.",
  },

  {
    id: 5,
    name: "Pañales talla RN",
    category: "panales",
    image: "assets/regalos/panales-rn.jpg",
    description: "Pañales para los primeros días de Emma Sofía.",
  },

  {
    id: 6,
    name: "Pañales talla 1",
    category: "panales",
    image: "assets/regalos/panales-1.jpg",
    description: "Pañales etapa recién nacida.",
  },

  {
    id: 7,
    name: "Pañales talla 2",
    category: "panales",
    image: "assets/regalos/panales-2.jpg",
    description: "Pañales para crecimiento del bebé.",
  },

  {
    id: 8,
    name: "Toallitas húmedas para bebé",
    category: "panales",
    image: "assets/regalos/toallitas.jpg",
    description: "Suaves y especiales para piel delicada.",
  },

  {
    id: 9,
    name: "Mameluco de algodón rosa",
    category: "ropa",
    image: "assets/regalos/mameluco.jpg",
    description: "Ropa cómoda y suave para Emma Sofía.",
  },

  {
    id: 10,
    name: "Vestido rosa de bebé",
    category: "ropa",
    image: "assets/regalos/vestido.jpg",
    description: "Un vestido especial para nuestra pequeña.",
  },

  {
    id: 11,
    name: "Monito de algodón",
    category: "ropa",
    image: "assets/regalos/monito.jpg",
    description: "Prenda cómoda para uso diario.",
  },

  {
    id: 12,
    name: "Pijama de bebé",
    category: "ropa",
    image: "assets/regalos/pijama.jpg",
    description: "Ideal para noches cómodas.",
  },

  {
    id: 13,
    name: "Gorritos para bebé",
    category: "ropa",
    image: "assets/regalos/gorrito.jpg",
    description: "Protección suave para su cabecita.",
  },

  {
    id: 14,
    name: "Medias de bebé",
    category: "ropa",
    image: "assets/regalos/medias.jpg",
    description: "Pequeños detalles llenos de amor.",
  },

  {
    id: 15,
    name: "Tina para baño",
    category: "bano",
    image: "assets/regalos/tina.jpg",
    description: "Baños cómodos y seguros.",
  },

  {
    id: 16,
    name: "Toalla con capucha",
    category: "bano",
    image: "assets/regalos/toalla.jpg",
    description: "Suave para después del baño.",
  },

  {
    id: 17,
    name: "Kit de shampoo y jabón",
    category: "bano",
    image: "assets/regalos/shampoo.jpg",
    description: "Productos delicados para bebé.",
  },

  {
    id: 18,
    name: "Coche para bebé",
    category: "paseo",
    image: "assets/regalos/coche.jpg",
    description: "Para paseos cómodos con Emma Sofía.",
  },

  {
    id: 19,
    name: "Portabebé ergonómico",
    category: "paseo",
    image: "assets/regalos/portabebe.jpg",
    description: "Para llevarla siempre cerca.",
  },

  {
    id: 20,
    name: "Silla para automóvil",
    category: "paseo",
    image: "assets/regalos/silla-auto.jpg",
    description: "Seguridad para cada viaje.",
  },

  {
    id: 21,
    name: "Osito de peluche",
    category: "juguetes",
    image: "assets/regalos/osito.jpg",
    description: "Un compañero para sus primeros sueños.",
  },

  {
    id: 22,
    name: "Sonajero musical",
    category: "juguetes",
    image: "assets/regalos/sonajero.jpg",
    description: "Estimulación para sus primeros meses.",
  },

  {
    id: 23,
    name: "Mordedor de silicona",
    category: "juguetes",
    image: "assets/regalos/mordedor.jpg",
    description: "Seguro y suave para bebé.",
  },

  {
    id: 24,
    name: "Cobija para bebé",
    category: "cuidado",
    image: "assets/regalos/cobija.jpg",
    description: "Calidez y comodidad.",
  },

  {
    id: 25,
    name: "Manta de muselina",
    category: "cuidado",
    image: "assets/regalos/muselina.jpg",
    description: "Ligera y delicada.",
  },

  {
    id: 26,
    name: "Almohada de lactancia",
    category: "cuidado",
    image: "assets/regalos/almohada.jpg",
    description: "Ayuda durante la lactancia.",
  },

  {
    id: 27,
    name: "Termómetro digital",
    category: "cuidado",
    image: "assets/regalos/termometro.jpg",
    description: "Control rápido de temperatura.",
  },

  {
    id: 28,
    name: "Aspirador nasal",
    category: "cuidado",
    image: "assets/regalos/aspirador.jpg",
    description: "Cuidado para sus primeros meses.",
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

<div class="gift-image">

<img 
src="${gift.image}"
alt="${gift.name}"
loading="lazy"
onerror="this.src='assets/regalos/default.jpg'">

</div>


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
