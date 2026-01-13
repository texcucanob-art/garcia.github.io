function mostrarDetalle(imagen, titulo, texto){
  document.getElementById("detail-img").src = imagen.src;
  document.getElementById("detail-title").innerText = titulo;
  document.getElementById("detail-text").innerText = texto;
}
