const primerNivel = new NivelPiramide("Base Fundacional");

primerNivel.agregarProceso("Hábitos de Alimentación Saludable", [
  "Consumo equilibrado",
  "Evitar alimentos procesados",
]);
primerNivel.agregarProceso("Hidratación Adecuada", [
  "Consumo suficiente de agua",
]);
primerNivel.agregarProceso("Descanso y Sueño", ["Establecer rutinas de sueño"]);

console.log("Procesos del Primer Nivel:", primerNivel.obtenerProcesos());
