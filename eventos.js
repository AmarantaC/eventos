class cartaTarot{
    constructor(id,nombre, mensaje, img){
        this.id = id;
        this.nombre = nombre;
        this.mensaje = mensaje;
        this.img = img;               
    }
};

const laLoca = new cartaTarot (
    id = 0,
    nombre = "La loca",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/0.jpg",
);

const laMaga = new cartaTarot (
    id = 1,
    nombre = "La Maga",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/1.jpg",
);

const laSumaSacerdotisa = new cartaTarot (
    id = 2,
    nombre = "La Suma Sacerdotisa",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/2.jpg",
);

const laEmperatriz = new cartaTarot (
    id = 3,
    nombre = "La Emperatriz",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/3.jpg",
);

const elEmperador = new cartaTarot (
    id = 4,
    nombre = "El Emperador",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/4.jpg",
);

const laSacerdotisa = new cartaTarot (
    id = 5,
    nombre = "La Sacerdotisa",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/5.jpg",
);

const losAmantes = new cartaTarot (
    id = 6,
    nombre = "Los Amantes",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/6.jpg",
);

const elCarruaje = new cartaTarot (
    id = 7,
    nombre = "El Carruaje",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/7.jpg",
);

const laFueza = new cartaTarot (
    id = 8,
    nombre = "La Fuerza",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/8.jpg",
);

const elHermitaño = new cartaTarot (
    id = 9,
    nombre = "El Hermitaño",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/9.jpg",
);

const elMundo = new cartaTarot (
    id = 9,
    nombre = "El Mundo",
    mensaje = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus minima laborum cum, molestias atque reiciendis mollitia deserunt",
    img = "img/tarot/9.jpg",
);

const cartasTarot = [laLoca, laSumaSacerdotisa, laEmperatriz, elEmperador, laSacerdotisa, 
losAmantes, elCarruaje, laFueza, elHermitaño, elMundo];



const modal = document.getElementById("modal")
const contenedor_texto = document.getElementById("contenedor_texto")


let numSuerte = (Math.round(Math.random() * 10));
console.log(numSuerte);
let cartaSuerte = cartasTarot.find(cartaTarot => cartaTarot.id === numSuerte);

let bienvenida = document.createElement("div");
bienvenida.innerHTML=`
<div class="contenedor_texto" id="contenedor_texto">
<h1>¿Quieres saber que te depara en el futuro?</h1>
<h2>Elige una carta:</h2>
<div class="cartas" id="cartas">
    <button class="carta">
        <img src="img/carta.jpg" alt="carta a">
    </button>
    <button class="carta">
        <img src="img/carta.jpg" alt="carta b">
    </button>              
    <button class="carta">
        <img src="img/carta.jpg" alt="carta c">
    </button>
</div>
` ;
contenedor_texto.appendChild(bienvenida);

let despedida = document.createElement("div");
despedida.innerHTML =`
<h2>Adios</h2>
`;

const cartas = document.getElementsByClassName("carta");


for(var i = 0; i < cartas.length; i++) {
    cartas[i].addEventListener('click', leerCarta);
    
}

function leerCarta(){
    lectura = document.createElement("div")
            lectura.classList.add("carta_elegida")
            lectura.innerHTML= `
            <div class=contenedor_texto>
                <h1>${cartaSuerte.nombre}</h1>
                <p>${cartaSuerte.mensaje}</p>
            </div>
            <div class="imagen">
                <img src=${cartaSuerte.img}>
            </div>
            <i class="cerrar" id="cerrar">X</i>    
            `    
            modal.appendChild(lectura);  
            
            const cerrar = document.getElementById("cerrar");
                cerrar.addEventListener("click",()=>{
                modal.removeChild(lectura); 
                contenedor_texto.removeChild(bienvenida); 
                contenedor_texto.appendChild(despedida); 

            });
}



