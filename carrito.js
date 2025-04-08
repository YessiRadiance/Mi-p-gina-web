let carrito = [];

function agregarAlCarrito(nombre, imagen) {
  carrito.push({ nombre, imagen });
  alert(`${nombre} agregado al carrito.`);
}

function mostrarCarrito() {
  const modal = document.getElementById('modal-carrito');
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}" /> ${producto.nombre}`;
    lista.appendChild(li);
  });

  const texto = carrito.map(p => `- ${p.nombre}`).join('%0A');
  const url = `https://wa.me/56912345678?text=Hola!%20Quiero%20comprar:%0A${texto}`;
  document.getElementById('btn-whatsapp').href = url;

  modal.style.display = 'flex';
}

function cerrarCarrito() {
  document.getElementById('modal-carrito').style.display = 'none';
}