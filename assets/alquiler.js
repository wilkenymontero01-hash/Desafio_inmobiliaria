const propiedadesAlquiler = [

{
    nombre:"Luxury Apartment",
    src:"assets/img/house4.jpg",
    descripcion:"Modern apartment with amazing city views.",
    ubicacion:"Miami",
    habitaciones:2,
    costo:2500,
    smoke:false,
    pets:true
},

{
    nombre:"Minimal Loft",
    src:"assets/img/house5.jpeg",
    descripcion:"Beautiful loft in the city center.",
    ubicacion:"Toronto",
    habitaciones:1,
    costo:1800,
    smoke:true,
    pets:false
},

{
    nombre:"Paris Residence",
    src:"assets/img/house6.jpg",
    descripcion:"Elegant apartment in Paris.",
    ubicacion:"Paris",
    habitaciones:3,
    costo:3200,
    smoke:false,
    pets:true
},

{
    nombre:"Lake House",
    src:"assets/img/house8.jpg",
    descripcion:"House with lake views.",
    ubicacion:"Canada",
    habitaciones:4,
    costo:2800,
    smoke:true,
    pets:true
}

];

const contenedor = document.querySelector("#alquiler");

let html = "";

propiedadesAlquiler.forEach(propiedad => {

html += `

<div class="col-lg-4 col-md-6 mb-4">

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

<p>

${propiedad.smoke
? "🚬 Smoking Allowed"
: "🚭 No Smoking"}

</p>

<p>

${propiedad.pets
? "🐶 Pets Allowed"
: "🚫 No Pets"}

</p>

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