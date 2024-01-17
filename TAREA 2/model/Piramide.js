class Piramide {
  constructor() {
    this.niveles = [];
  }

  agregarNivel(nombreNivel) {
    const nuevoNivel = {
      nombre: nombreNivel,
      procesos: [],
    };
    this.niveles.push(nuevoNivel);
  }

  agregarProceso(nombreNivel, nombreProceso, subprocesos = []) {
    const nivel = this.niveles.find((n) => n.nombre === nombreNivel);
    if (nivel) {
      const nuevoProceso = {
        nombre: nombreProceso,
        subprocesos: subprocesos,
      };
      nivel.procesos.push(nuevoProceso);
    }
  }

  obtenerDatos() {
    return this.niveles;
  }
}
