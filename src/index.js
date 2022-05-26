 // Traigo la libreria de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import "./estilos.css"

// Agarrar una app que ya existe de REACT y mostrarla en el DOM

 //Mostrar la app en el dom

 //Crear un punto inicial (Root) en donde la APP se va a montar (Dibujar)
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);