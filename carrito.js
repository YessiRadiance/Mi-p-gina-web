const carrito = [];

function agregarAlCarrito(nombre, imagen) {
  carrito.push({ nombre, imagen });
  actualizarCarritoVisual();
}

function actualizarCarritoVisual() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';

  carrito.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'item-carrito';
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <span>${item.nombre}</span>
      <button onclick="eliminarItem(${index})">X</button>
    `;
    lista.appendChild(div);
  });
}

function eliminarItem(index) {
  carrito.splice(index, 1);
  actualizarCarritoVisual();
}

function enviarPedidoPorWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let mensaje = "Hola Yessi, quiero comprar los siguientes productos:\n";
  carrito.forEach((item, i) => {
    mensaje += `${i + 1}. ${item.nombre}\n`;
  });

  const enlace = `https://wa.me/573197438544?text=${encodeURIComponent(mensaje)}`;
  window.open(enlace, '_blank');
}
