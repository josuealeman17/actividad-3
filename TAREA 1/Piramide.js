class NivelPiramide {
    constructor(nombre) {
      this.nombre = nombre;
      this.procesos = [];
    }
  
    agregarProceso(nombreProceso, subprocesos = []) {
      const nuevoProceso = {
        nombre: nombreProceso,
        subprocesos: subprocesos,
      };
      this.procesos.push(nuevoProceso);
    }
  
    obtenerProcesos() {
      return this.procesos;
    }
  }