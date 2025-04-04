
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAwjvYQ4N_yOi0eKfcm5GD7x_tnzvDw644",
    authDomain: "ia-pisicologa.firebaseapp.com",
    projectId: "ia-pisicologa",
    storageBucket: "ia-pisicologa.firebasestorage.app",
    messagingSenderId: "633911040193",
    appId: "1:633911040193:web:82ddbe2c096f12bb8a1c40",
    measurementId: "G-G5CDKPZSH7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({
    experimentalForceLongPolling: true,
    useFetchStreams: false,
    merge: true 
  });

const intervalo = document.querySelector('.intervalo');
const button = document.querySelector('.butao');

button.addEventListener('click', function() {
    const entrada = document.getElementById('entrada').value;

    if (entrada.trim() === "") {
        intervalo.textContent = "Por favor, insira algum texto!";
        return;
      }

    intervalo.innerHTML = "Carregando...";
    
    setTimeout(() => {
        intervalo.innerHTML = "É foda ein, mas não desista!";
    }, 3000);

    db.collection("mensagens").add({
        conteudo: entrada,
        timestamp: new Date()
    })
        .then(() => {
          console.log("deu certin")
        })
        .catch((error) => {
            console.log("erro")
    });
});
