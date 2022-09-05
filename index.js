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
const nombres = nuestroMenu.map((obj)=> obj.nombre);
let listaProductos = prompt(`hola, que deseas pedir hoy:  ${nombres}`);
const productoSeleccionado = nuestroMenu.find(pro=>pro.nombre === listaProductos);
let valorProductos = 0
let seguirComprando = true
let agregar

while(seguirComprando === true){
    valorProductos = valorProductos + productoSeleccionado.precio
    agregar = parseInt (prompt(`Quieres agregar algo mas? 1.Si 2.No`))
    if(agregar=== 1){
        listaProductos = prompt(`hola, que deseas agregar:  ${nombres}`);
        valorProductos + listaProductos.precio
    }else if(agregar===2){
        seguirComprando = false
    }
}

alert(`que tengas buen provecho el total a pagar es ${valorProductos}`)
