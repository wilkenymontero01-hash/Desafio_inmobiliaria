// ============================
// PROPIEDADES
// ============================

const propiedadesVenta = [

{
    nombre: "Luxury Beach Villa",
    src: "assets/img/house1.jpg",
    descripcion: "Beautiful villa with ocean view.",
    ubicacion: "Punta Cana",
    habitaciones: 4,
    costo: 850000,
    smoke: false,
    pets: true
},

{
    nombre: "Modern Penthouse",
    src: "assets/img/house2.jpg",
    descripcion: "Luxury penthouse in downtown.",
    ubicacion: "New York",
    habitaciones: 3,
    costo: 1200000,
    smoke: false,
    pets: false
},

{
    nombre: "Santorini House",
    src: "assets/img/house3.jpg",
    descripcion: "White luxury house with infinity pool.",
    ubicacion: "Greece",
    habitaciones: 5,
    costo: 990000,
    smoke: true,
    pets: true
},

{
    nombre: "Dubai Mansion",
    src: "assets/img/house4.jpg",
    descripcion: "Luxury mansion in Dubai Hills.",
    ubicacion: "Dubai",
    habitaciones: 6,
    costo: 3000000,
    smoke: false,
    pets: true
}

];

const propiedadesAlquiler = [

{
    nombre: "Luxury Apartment",
    src: "assets/img/house4.jpg",
    descripcion: "Modern apartment with amazing views.",
    ubicacion: "Miami",
    habitaciones: 2,
    costo: 2500,
    smoke: false,
    pets: true
},

{
    nombre: "Minimal Loft",
    src: "assets/img/house5.jpeg",
    descripcion: "Beautiful loft in the city center.",
    ubicacion: "Toronto",
    habitaciones: 1,
    costo: 1800,
    smoke: true,
    pets: false
},

{
    nombre: "Paris Residence",
    src: "assets/img/house6.jpg",
    descripcion: "Elegant apartment in Paris.",
    ubicacion: "Paris",
    habitaciones: 3,
    costo: 3200,
    smoke: false,
    pets: true
},

{
    nombre: "Lake House",
    src: "assets/img/house3.jpg",
    descripcion: "House near the lake.",
    ubicacion: "Canada",
    habitaciones: 4,
    costo: 2800,
    smoke: true,
    pets: true
}

];

// ============================
// RENDER VENTA
// ============================

const venta = document.querySelector("#venta");

if (venta) {

    let html = "";

    propiedadesVenta.slice(0,3).forEach(propiedad => {

        html += crearCard(propiedad);

    });

    venta.innerHTML = html;

}

// ============================
// RENDER ALQUILER
// ============================

const alquiler = document.querySelector("#alquiler");

if (alquiler) {

    let html = "";

    propiedadesAlquiler.slice(0,3).forEach(propiedad => {

        html += crearCard(propiedad);

    });

    alquiler.innerHTML = html;

}
const buscador=document.querySelector("#search");

if(buscador){

buscador.addEventListener("keyup",()=>{

const texto=buscador.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(texto)

? "block"

: "none";

});

});

}

// ============================
// CARD
// ============================

function crearCard(propiedad){

return `

<div class="col-md-4 mb-4">

<div class="card h-100">

<img src="${propiedad.src}" class="card-img-top">

<div class="card-body">

<div class="d-flex justify-content-between align-items-center">

<h4>${propiedad.nombre}</h4>

<span class="badge bg-warning text-dark">

Luxury

</span>

</div>

<p>${propiedad.descripcion}</p>

<p>📍 ${propiedad.ubicacion}</p>

<p>🛏 ${propiedad.habitaciones} Rooms</p>

<p class="price">$${propiedad.costo}</p>
<p>

⭐⭐⭐⭐⭐

</p>

<div class="icons">

<p>${propiedad.smoke ? "🚬 Smoking Allowed" : "🚭 No Smoking"}</p>

<p>${propiedad.pets ? "🐶 Pets Allowed" : "🚫 No Pets"}</p>

</div>

<a href="#" class="btn btn-dark w-100 mt-3">

    View Property

</a>

<button

class="btn btn-outline-danger w-100 mt-2 favorite"

data-name="${propiedad.nombre}"

>

❤ Save Property

</button>

</div>

</div>

</div>

`;

}
const darkBtn = document.querySelector("#darkMode");

if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

    });

}
document.addEventListener("click",(e)=>{

if(e.target.classList.contains("favorite")){

const nombre=e.target.dataset.name;

let favoritos=JSON.parse(localStorage.getItem("favoritos"))||[];

if(!favoritos.includes(nombre)){

favoritos.push(nombre);

localStorage.setItem("favoritos",JSON.stringify(favoritos));

alert("Property added to favorites ❤️");

}else{

alert("Already saved.");

}

}

});