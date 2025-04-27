async function esperarMensaje() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola profe Dani, espero que este bien viendo mi tarea :D");
    }, 4000);
  });
    
}

async function mostrarMensaje() {
  const mensaje = await esperarMensaje();
  console.log(mensaje);
}

mostrarMensaje();

console.log("Este mensaje es el que se muestra antes de los 4 segundos");
