import Piramide from '../../model/piramide';

// Crear una instancia del modelo
const modelo = new Piramide();

const botonAgregarNivel = document.createElement("button");
botonAgregarNivel.textContent = "Agregar Nivel";
botonAgregarNivel.addEventListener("click", () => {
  const nombreNivel = prompt("Ingrese el nombre del nuevo nivel:");
  modelo.agregarNivel(nombreNivel);
  actualizarVista();
});

document.body.appendChild(botonAgregarNivel);

function actualizarVista() {
  const datosPiramide = modelo.obtenerDatos();
  const contenedorDatos = document.getElementById("datosPiramide");

  contenedorDatos.innerHTML = "";

  datosPiramide.forEach((nivel) => {
    const divNivel = document.createElement("div");
    divNivel.innerHTML = `<h2>${nivel.nombre}</h2>`;

    nivel.procesos.forEach((proceso) => {
      const divProceso = document.createElement("div");
      divProceso.innerHTML = `<p>${proceso.nombre}</p>`;

      if (proceso.subprocesos.length > 0) {
        const ulSubprocesos = document.createElement("ul");
        proceso.subprocesos.forEach((subproceso) => {
          const liSubproceso = document.createElement("li");
          liSubproceso.textContent = subproceso;
          ulSubprocesos.appendChild(liSubproceso);
        });
        divProceso.appendChild(ulSubprocesos);
      }

      divNivel.appendChild(divProceso);
    });

    contenedorDatos.appendChild(divNivel);
  });
}

actualizarVista();
