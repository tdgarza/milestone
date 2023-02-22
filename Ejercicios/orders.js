let orders = [];

function saveOrder() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const food = document.getElementById('food').value;
  const quantity = document.getElementById('quantity').value;

  const order = {name, email, phone, food, quantity};
  orders.push(order);

  saveOrdersInLocalStorage();
  addOrderToTable(order);
}

function saveOrdersInLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrdersFromLocalStorage() {
  const ordersJson = localStorage.getItem('orders');
  if (ordersJson) {
    orders = JSON.parse(ordersJson);
    for (const order of orders) {
      addOrderToTable(order);
    }
  }
}

function addOrderToTable(order) {
  const tableBody = document.getElementById('ordersTable');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${order.name}</td>
    <td>${order.email}</td>
    <td>${order.phone}</td>
    <td>${order.food}</td>
    <td>${order.quantity}</td>
  `;

  tableBody.appendChild(row);
}

loadOrdersFromLocalStorage();

function guardarOrden() {
    // crea un objeto que representa la orden de comida
    var orden = {
      nombre: document.getElementById("nombre").value,
      direccion: document.getElementById("direccion").value,
      telefono: document.getElementById("telefono").value,
      // agrega aquí todas las propiedades que necesitas guardar
    };
  
    // agrega la orden al array de órdenes
    var ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    ordenes.push(orden);
  
    // convierte el array a una cadena JSON y guárdalo en localStorage
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
  }