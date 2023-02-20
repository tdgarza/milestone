const form = document.getElementById("order-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const order = {
    name: formData.get("name"),
    tableNumber: formData.get("table-number"),
    food: formData.get("food"),
    drink: formData.get("drink"),
    notes: formData.get("notes"),
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "guardar-orden01.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function() {
    if (xhr.status === 200) {
      window.location.href = "orden-confirmacion.html";
    }
  };
  xhr.send(JSON.stringify(order));
});
// Obtener los valores del formulario y crear un objeto con ellos
const order = {
  name: document.getElementById("name").value,
  tableNumber: document.getElementById("table-number").value,
  food: document.getElementById("food").value,
  drink: document.getElementById("drink").value,
  notes: document.getElementById("notes").value
};

// Convertir el objeto en una cadena JSON
const orderJSON = JSON.stringify(order);

// Guardar la cadena JSON en un archivo utilizando fetch()
fetch("orden.json", {
  method: "POST",
  body: orderJSON
})
.then(response => {
  console.log("La orden ha sido guardada correctamente");
})
.catch(error => {
  console.error("Error al guardar la orden:", error);
});
