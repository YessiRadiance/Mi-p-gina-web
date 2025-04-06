
let carrito = [];

function agregarAlCarrito(nombre, imagen) {
  carrito.push({ nombre, imagen });
  alert(`${nombre} ha sido agregado al carrito.`);
}

function generarMensajeWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let mensaje = "Hola Yessi, quiero comprar los siguientes productos:%0A";
  carrito.forEach((producto, index) => {
    mensaje += `%0A${index + 1}. ${producto.nombre} - Imagen: ${producto.imagen}`;
  });

  const telefono = "573197438544";
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}
