const mostrarFecha = () => {
    const parrafoFecha = document.querySelector(".parrafoFecha");
    const dias = [
      "domingo",
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sabado",
    ];
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const fecha = new Date();
    let diaActual = dias[fecha.getDay()];
    let numDia = fecha.getDate();
    let mesActual = meses[fecha.getMonth()];
    let anioActual = fecha.getFullYear();
    parrafoFecha.innerHTML = `${diaActual} ${numDia} de ${mesActual} del ${anioActual}`;
  };
  const mostrarHora = () => {
    const parrafoHora = document.querySelector(".parrafoHora");
    const hora = new Date();
    let horaActual = hora.getHours();
    let minActual = hora.getMinutes();
    let segActual = hora.getSeconds();
    if (horaActual < 10) {
      horaActual = "0" + horaActual;
    }
    if (minActual < 10) {
      minActual = "0" + minActual;
    }
    if (segActual < 10) {
      segActual = "0" + segActual;
    }
    if (horaActual > 0 && horaActual < 12) {
      parrafoHora.innerHTML = `${horaActual} : ${minActual} : ${segActual} AM`;
    } else if (horaActual > 12 && horaActual < 24) {
      parrafoHora.innerHTML = `${horaActual} : ${minActual} : ${segActual} PM`;
    }
  };
  setTimeout(mostrarFecha, 1000);
  setInterval(mostrarHora, 1000);