// FIREBASE SDK

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// CONFIGURAÇÃO FIREBASE

const firebaseConfig = {

  apiKey: "AIzaSyAnd5UwCVjd-AN-mzUBYZjaWM7pPkHXukM",

  authDomain: "clinicadentaria-2a0ae.firebaseapp.com",

  projectId: "clinicadentaria-2a0ae",

  storageBucket: "clinicadentaria-2a0ae.firebasestorage.app",

  messagingSenderId: "772221231913",

  appId: "1:772221231913:web:8c677db736d3d0ad4f0d38",

  measurementId: "G-8SWNH0K35R"

};

// INICIAR FIREBASE

const app = initializeApp(firebaseConfig);

// DATABASE

const db = getFirestore(app);

// EXPORTAR DATABASE

export { db };
