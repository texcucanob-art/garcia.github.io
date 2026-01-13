function abrirDetalle(imagen, titulo, descripcion){
  document.getElementById("visor-img").src = imagen.src;
  document.getElementById("visor-title").innerText = titulo;
  document.getElementById("visor-desc").innerText = descripcion;
}
