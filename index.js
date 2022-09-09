const nuestroMenu = [
    {nombre: 'cafe espresso', precio: 300, id: 1, imagen:'imagenPrueba.jpg'},
    {nombre: 'late', precio: 320, id: 2, imagen:'imagenPrueba.jpg'},
    {nombre: 'lagrima', precio: 280, id: 3, imagen:'imagenPrueba.jpg'},
    {nombre: 'late vainilla', precio: 350, id: 4, imagen:'imagenPrueba.jpg'},
    {nombre: 'flat white', precio: 200, id: 5, imagen:'imagenPrueba.jpg'},
    {nombre: 'budin de limon', precio: 380, id: 6, imagen:'imagenPrueba.jpg'},
    {nombre: 'bubin marmolado', precio: 400, id: 7, imagen:'imagenPrueba.jpg'},
    {nombre: 'bubin de banana', precio: 500, id: 8, imagen:'imagenPrueba.jpg'},
    {nombre: 'avocado toast', precio: 1250, id: 9, imagen:'imagenPrueba.jpg'},
    {nombre: 'tostatas francesas', precio: 1350, id: 10, imagen:'imagenPrueba.jpg'},
    {nombre: 'huevos revueltos', precio: 1100, id: 11, imagen:'imagenPrueba.jpg'}
];
let carrito = [];
const divisa = '$';
const domItems = document.querySelector('#items');
const domCarrito = document.querySelector('#carrito');
const domTotal = document.querySelector('#total');
const domBotonVaciar = document.querySelector('#boton-vaciar');
<<<<<<< HEAD
let nuevoProducto = nuestroMenu.push({nombre:'cafe frio',precio:550, id: 12, imagen:'imagenPrueba.jpg'});
const titulo = document.createElement('h1');
titulo.innerText = 'BIENVENIDOS A PARAMO CAFE'
const domTitulo = document.querySelector('.container_titulo')
domTitulo.appendChild(titulo)

/**
 * Dibuja todos los productos.
 */
function dibujarProductos() {
    nuestroMenu.forEach((info) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'agregar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        domItems.appendChild(miNodo);
    });
}

function anadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    dibujarCarriro()
}
=======
const nombres = nuestroMenu.map((obj)=> obj.nombre);
let listaProductos = prompt(`hola, que deseas pedir hoy:  ${nombres}`);
let valorProductos = 0
let seguirComprando = true
let agregar
//SE AGREGO UN ELEMENTO AL MENU
let nuevoProducto = nuestroMenu.push({nombre:'cafe frio',precio:550});
let nuevoProducto = nuestroMenu.push({nombre:'cafe frio',precio:550, id: 12, imagen:'imagenPrueba.jpg'});
const titulo = document.createElement('h1');
titulo.innerText = 'BIENVENIDOS A PARAMO CAFE'
const domTitulo = document.querySelector('.container_titulo');
domTitulo.appendChild(titulo);


while(seguirComprando === true){
    const productoSeleccionado = nuestroMenu.find(pro=>pro.nombre === listaProductos)
    if (productoSeleccionado){
        valorProductos = valorProductos + productoSeleccionado.precio
    }
    agregar = parseInt (prompt(`Quieres agregar algo mas? 1.Si 2.No`))
    if(agregar=== 1){
        listaProductos = prompt(`hola, que deseas agregar:  ${nombres}`)
        valorProductos + listaProductos.precio
    }else if(agregar===2){
        seguirComprando = false
    }
};

alert(`que tengas buen provecho el sub-total a pagar es ${valorProductos}`);
// Se retorno una lista de los productos en consola pero la idea es que retornen en el DOM, estoy en eso.
let misProductos = nuestroMenu.map(function(lista) { return lista.nombre; });
console.log(misProductos);
>>>>>>> b75eb67eaeeb34fc74d3ee66e7b3e54a4d81c2d0

function dibujarCarriro() {
    domCarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
    const miItem = nuestroMenu.filter((itemBaseDatos) => {
    return itemBaseDatos.id === parseInt(item);
    });

    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
    return itemId === item ? total += 1 : total;
    }, 0);

    const miNodo = document.createElement('li');
    miNodo.classList.add('list-group-item', 'text-left', 'mx-2');
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
    domCarrito.appendChild(miNodo);
    });
}


// Inicio
dibujarProductos()
dibujarCarriro()
