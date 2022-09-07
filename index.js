const nuestroMenu = [
    {nombre: 'cafe espresso', precio: 300},
    {nombre: 'late', precio: 320},
    {nombre: 'lagrima', precio: 280},
    {nombre: 'late vainilla', precio: 350,},
    {nombre: 'flat white', precio: 200},
    {nombre: 'budin de limon', precio: 380},
    {nombre: 'bubin marmolado', precio: 400},
    {nombre: 'bubin de banana', precio: 500},
    {nombre: 'avocado toast', precio: 1250},
    {nombre: 'tostatas francesas', precio: 1350},
    {nombre: 'huevos revueltos', precio: 1100},
]
let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const nombres = nuestroMenu.map((obj)=> obj.nombre);
let listaProductos = prompt(`hola, que deseas pedir hoy:  ${nombres}`);
let valorProductos = 0
let seguirComprando = true
let agregar
//SE AGREGO UN ELEMENTO AL MENU
let nuevoProducto = nuestroMenu.push({nombre:'cafe frio',precio:550})
let nuevoProducto = nuestroMenu.push({nombre:'cafe frio',precio:550, id: 12, imagen:'imagenPrueba.jpg'});
const titulo = document.createElement('h1');
titulo.innerText = 'BIENVENIDOS A PARAMO CAFE'
const domTitulo = document.querySelector('.container_titulo')
domTitulo.appendChild(titulo)


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
}

alert(`que tengas buen provecho el sub-total a pagar es ${valorProductos}`)

