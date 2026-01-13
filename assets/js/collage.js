const base = document.querySelector("base")?.href || "";

const data = {
  1: {
    img: base + "/assets/images/collage/2025-resmed.jpg",
    title: "2025 resMed",
    text: "Resultados globales y nacionales que muestran alta prevalencia de somnolencia, estrés y descanso insuficiente."
  },
  2: {
    img: base + "/assets/images/collage/farmacos.jpg",
    title: "consumo de farmacos",
    text: "La mayoría no consume medicamentos, pero los que sí los usan lo hacen por ansiedad, depresión y problemas gástricos."
  },
  3: {
    img: base + "/assets/images/collage/energizantes.jpg",
    title: "energizantes",
    text: "El consumo de café y bebidas energéticas está ligado al insomnio y retraso del sueño."
  },
  4: {
    img: base + "/assets/images/collage/sueno.jpg",
    title: "estado de sueño",
    text: "Dormir 7 horas no garantiza descanso cuando hay estrés e interrupciones."
  },
  5: {
    img: base + "/assets/images/collage/estilo.jpg",
    title: "estilo de vida",
    text: "El estilo de vida sedentario impacta negativamente la energía y la calidad del sueño."
  },
  6: {
    img: base + "/assets/images/collage/estres.jpg",
    title: "estres",
    text: "El estrés es el problema emocional más frecuente y el principal detonante del mal descanso."
  }
};

function openImage(id){
  document.getElementById("viewerImage").src = data[id].img;
  document.getElementById("viewerTitle").innerText = data[id].title;
  document.getElementById("viewerText").innerText = data[id].text;
}
