const propiedadesVenta = [

{
    nombre:"Luxury Beach Villa",
    src:"assets/img/house1.jpg",
    descripcion:"Beautiful villa with ocean view.",
    ubicacion:"Punta Cana",
    habitaciones:4,
    costo:80000,
    smoke:false,
    pets:true
},

{
    nombre:"Modern Penthouse",
    src:"assets/img/house2.jpg",
    descripcion:"Luxury penthouse in downtown.",
    ubicacion:"New York",
    habitaciones:3,
    costo:1200000,
    smoke:false,
    pets:false
},

{
    nombre:"Santorini House",
    src:"assets/img/house3.jpg",
    descripcion:"White luxury house with infinity pool.",
    ubicacion:"Greece",
    habitaciones:5,
    costo:990000,
    smoke:true,
    pets:true
},

{
    nombre:"Dubai Mansion",
    src:"assets/img/house7.jpeg",
    descripcion:"Luxury mansion in Dubai Hills.",
    ubicacion:"Dubai",
    habitaciones:6,
    costo:3000000,
    smoke:false,
    pets:true
}

];

const contenedor = document.querySelector("#venta");

let html = "";

propiedadesVenta.forEach(propiedad=>{

html+=`

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

<p>${propiedad.smoke ? "🚬 Smoking Allowed":"🚭 No Smoking"}</p>

<p>${propiedad.pets ? "🐶 Pets Allowed":"🚫 No Pets"}</p>

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

});

contenedor.innerHTML = html;