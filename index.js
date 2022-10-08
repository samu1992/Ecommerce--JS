let carrito = [];
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
let nuevoProducto = nuestroMenu.push({nombre:'cafe frio',precio:550, id: 12, imagen:'imagenPrueba.jpg'});

const divisa = '$';
const domItems = document.querySelector('#items');
const domCarrito = document.querySelector('#carrito');
const domTotal = document.querySelector('#total');
const domBotonVaciar = document.querySelector('#boton-vaciar');

function titulo(){
    const titulo = document.createElement('h1');
    titulo.innerText = 'BIENVENIDOS A PARAMO CAFE'
    const domTitulo = document.querySelector('.container_titulo');
    domTitulo.appendChild(titulo);
}


function dibujarProductos() {
    nuestroMenu.forEach((info) => {
        const miNodo = document.createElement('div');
                miNodo.classList.add('card', 'col-sm-4');
        
        const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
        
        const miNodoTitle = document.createElement('h5');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.nombre;
        
        const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-fluid');
                miNodoImagen.setAttribute('src', info.imagen);
        
        const miNodoPrecio = document.createElement('p');
                miNodoPrecio.classList.add('card-text');
                miNodoPrecio.textContent = `${info.precio}${divisa}`;
        
        const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = 'AGREGAR';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', anadirProductoAlCarrito);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        domItems.appendChild(miNodo);
    });
}

function anadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'));
    localStorage.setItem('tuCompra',JSON.stringify(carrito));
    Toastify({
        text: 'agregado correctamente',
        duration: 2000
    }).showToast();
    dibujarCarriro();
}

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

    const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        domCarrito.appendChild(miNodo);
    });
    domTotal.textContent = calcularTotal();
};

function vaciarCarrito(){
    carrito=[];
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'carrito eliminado con exito',
        showConfirmButton: false,
        timer: 2500
    });
    dibujarCarriro();
};
domBotonVaciar.addEventListener('click', vaciarCarrito);

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    Toastify({
        text: 'producto eliminado',
        duration: 2000,
        gravity: "top",
        position: "left",
        style: {
            background: "linear-gradient(to right, #618780, #B2EAE0)",
        }
    }).showToast();
    dibujarCarriro();
};

function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = nuestroMenu.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2)
};

dibujarProductos();
dibujarCarriro();
titulo();

const finalizar = document.getElementById('terminar-compra')
finalizar.onclick = alerta
function alerta() {
    Swal.fire({
        title: 'gracias por tu compra',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    carrito = [];
    dibujarCarriro();
};

const containerPro = document.getElementById('desplegarProductos');
const desplegar = document.getElementById('masProductos');

desplegar.onclick = () => {
    fetch('menu.json')
        .then(Response => Response.json())
        .then(info => {
            const elMenu = info.productos
            elMenu.forEach(infor => {
                const container = document.createElement('div');
                container.classList.add('row', 'col-sm-2');
                container.innerHTML = `<div class="card">
                                        <img src="imagenPrueba.jpg" class="img-fluid" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${infor.nombre}</h5>
                                            <p class="card-text">${infor.precio}${divisa}</p>
                                            <button class="btn btn-primary">AGREGAR</button>
                                        </div>
                                    </div>`
                containerPro.append(container);
            });
        });
    };