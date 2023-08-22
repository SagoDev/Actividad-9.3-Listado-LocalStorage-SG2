document.addEventListener("DOMContentLoaded", () => {
  const item = document.getElementById("item");
  const btnAgregar = document.getElementById("agregar");
  const btnLimpiar = document.getElementById("limpiar");
  const contenedor = document.getElementById("contenedor");

  // Si el item datos en localStorage existe, entonces se guarda en la variable, si no, se guarda un array vacío
  let arrayDatos = JSON.parse(localStorage.getItem("datos")) || [];

  // Esta función agrega todos los elementos del localStorage al contenedor
  function addEntireArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = arr[i];
      contenedor.appendChild(li);
    }
  }

  function displayAnElement(arr) {
    // Adjunta un elemento al contenedor html
    contenedor.innerHTML += `<li class="list-group-item">${
      arr[arr.length - 1]
    } </li>`;
  }

  addEntireArray(arrayDatos);

  // Este botón agrega el valor del input al array del localstorage y lo muestra en pantalla.
  btnAgregar.addEventListener("click", () => {
    // Si el input tiene valor se muestra el elemento en pantalla
    if (item.value) {
      arrayDatos.push(item.value);
      localStorage.setItem("datos", JSON.stringify(arrayDatos));
      item.value = "";
      displayAnElement(arrayDatos);
    }
  });

  // Quita la lista entera del contenedor al apretar en limpiar
  btnLimpiar.addEventListener("click", () => {
    localStorage.removeItem("datos");
    contenedor.textContent = "";
  });
});
