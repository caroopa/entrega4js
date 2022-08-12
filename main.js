let pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["Muzarella", "tomate", "aceitunas"],
    precio: 1080,
    imagen: "muzza.jpg",
  },
  {
    id: 2,
    nombre: "Fugazzeta",
    ingredientes: ["Cebolla", "muzarella"],
    precio: 840,
    imagen: "fuga.jpg",
  },
  {
    id: 3,
    nombre: "Napolitana",
    ingredientes: ["Muzarella", "tomate", "jamón", "aceitunas"],
    precio: 1560,
    imagen: "napo.jpg",
  },
  {
    id: 4,
    nombre: "Calabresa",
    ingredientes: ["Muzarella", "tomate", "pepperoni", "aceitunas"],
    precio: 1380,
    imagen: "calabresa.jpg",
  },
  {
    id: 5,
    nombre: "Capresse",
    ingredientes: ["Muzarella", "tomate", "albahaca", "aceitunas"],
    precio: 1200,
    imagen: "caprese.jpg",
  },
  {
    id: 6,
    nombre: "Provolone",
    ingredientes: ["Provolone", "tomate", "aceitunas"],
    precio: 1260,
    imagen: "provo.jpg",
  },
];

// *------------------------------------------------ENTREGA 4------------------------------------------------

// En este último desafío general vamos a utilizar el mismo array "Pizzas🍕":
// 👉 Guardarlo en el local storage.
// 👉 Renderizar HTML desde JS.
// 👉 Renderizar en cards todas las pizzas del array (Incluir nombre, imagen, precio e ingredientes).
// 👉 Crear una barra de búsqueda (input), la cual tenga la función de mostrarnos sólo las pizzas cuyos
// nombres coincidan con la búsqueda realizada.

localStorage.setItem("pizzas", JSON.stringify(pizzas));

const container = document.querySelector(".container");
window.addEventListener("load", () => pintarHTML());
function pintarHTML() {
  container.innerHTML = pizzas
    .map((pizza) => {
      return `
				<div class="card">
					<h1>${pizza.nombre}</h1>
					<img src="img/${pizza.imagen}" alt="Pizza" />
					<h2>$${pizza.precio}</h2>
					<h2>Ingredientes</h2>
					<p>${pizza.ingredientes.join(", ")}</p>
				</div>
			`;
    })
    .join("");
}

const form = document.getElementById("form");
const input = document.querySelector(".search-input");
const todo = document.querySelector(".todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pizzaBuscada = input.value.trim();
  if (pizzaBuscada === "") {
    alert("Por favor, ingresa una pizza");
    return;
  } else {
    pintarHTMLBuscada(pizzaBuscada);
  }
});

function pintarHTMLBuscada(pizzaBuscada) {
  let pizzaEncontrada = false;
  let pizzasParaPintar = [];
  for (let i in pizzas) {
    if (pizzas[i].nombre.toLowerCase().includes(pizzaBuscada.toLowerCase())) {
      pizzaEncontrada = true;
      pizzasParaPintar.push(pizzas[i]);
    }
  }

  if (pizzaEncontrada) {
    todo.classList.remove("hidden");
    container.innerHTML = "";
    container.innerHTML = pizzasParaPintar
      .map((pizza) => {
        return `
				<div class="card">
					<h1>${pizza.nombre}</h1>
					<img src="img/${pizza.imagen}" alt="Pizza" />
					<h2>$${pizza.precio}</h2>
					<h2>Ingredientes</h2>
					<p>${pizza.ingredientes.join(", ")}</p>
				</div>
			`;
      })
      .join("");
  } else {
    alert("No hay un nombre de pizza que contenga esa palabra.");
  }
}

todo.addEventListener("click", () => {
  todo.classList.add("hidden");
  pintarHTML();
});
