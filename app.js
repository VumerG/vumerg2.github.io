import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUybRrA_A8xMVlFuXRYbO2w1OyHoAexGI",
  authDomain: "sembranet.firebaseapp.com",
  projectId: "sembranet",
  storageBucket: "sembranet.firebasestorage.app",
  messagingSenderId: "335597209535",
  appId: "1:335597209535:web:e986829fa6dc91a272c30a",
  measurementId: "G-KCVD57P6EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 

const form = document.getElementById('registroForm');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = document.getElementById('btnGuardar');
        btn.disabled = true;
        btn.innerText = "Registrando Proceso...";

        // Objeto basado estrictamente en el recetario agroindustrial
        const registroTecnico = {
            // 1. Parámetros Generales
            productoNombre: document.getElementById('producto').value,
            fotoMateriaPrima: document.getElementById('imgProducto').value,
            temporada: document.getElementById('temporada').value,
            region: document.getElementById('region').value,

            // 2. Parámetros Receta
            recetaNombre: document.getElementById('nombreReceta').value,
            fotoProcesoFinal: document.getElementById('imgProceso').value,
            instrucciones: document.getElementById('instrucciones').value,
            equipoUtilizado: document.getElementById('equipo').value,

            // 3. Parámetros Técnicos
            brix: parseFloat(document.getElementById('brix').value) || 0,
            ph: parseFloat(document.getElementById('ph').value) || 0,
            rendimientoFinal: parseFloat(document.getElementById('rendimiento').value) || 0,
            costoTotal: parseFloat(document.getElementById('costo').value) || 0,
            
            fechaCaptura: serverTimestamp() 
        };

        try {
            // Guardamos en la colección "recetario_tecnico"
            const docRef = await addDoc(collection(db, "recetario_tecnico"), registroTecnico);
            
            console.log("¡Guardado! ID:", docRef.id);
            alert("✅ Registro Agroindustrial Exitoso\nID: " + docRef.id);
            
            form.reset(); 
        } catch (error) {
            console.error("Error al guardar:", error);
            alert("❌ Error: No se pudo guardar la información.");
        } finally {
            btn.disabled = false;
            btn.innerText = "Guardar Registro en Firebase";
        }
    });
}
