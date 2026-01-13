const data = {
  1: {
    img: "/assets/images/2025-resmed.jpg",
    title: "2025 resMed",
    text: "Resultados globales y nacionales que muestran alta prevalencia de somnolencia, estrés y descanso insuficiente."
  },
  2: {
    img: "/assets/images/farmacos.jpg",
    title: "consumo de farmacos",
    text: "La mayoría no consume medicamentos, pero los que sí los usan lo hacen por ansiedad, depresión y problemas gástricos."
  },
  3: {
    img: "/assets/images/energizantes.jpg",
    title: "energizantes",
    text: "El consumo de café y bebidas energéticas está ligado al insomnio, retraso del sueño y fatiga crónica."
  },
  4: {
    img: "/assets/images/sueno.jpg",
    title: "estado de sueño",
    text: "Dormir 7 horas no garantiza descanso si existen interrupciones, estrés y malestar emocional."
  },
  5: {
    img: "/assets/images/estilo.jpg",
    title: "estilo de vida",
    text: "Sedentarismo, mala alimentación y poca hidratación afectan directamente el descanso y la energía diaria."
  },
  6: {
    img: "/assets/images/estres.jpg",
    title: "estres",
    text: "El estrés es el problema emocional más reportado y uno de los principales detonantes de mala calidad del sueño."
  }
};

function openImage(id){
  document.getElementById("viewerImage").src = data[id].img;
  document.getElementById("viewerTitle").innerText = data[id].title;
  document.getElementById("viewerText").innerText = data[id].text;
}
