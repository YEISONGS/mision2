// ===============================
// VARIABLES Y TIPOS DE DATOS
// ===============================
var nombre = "Misión 2";             // cadena
let numeroEjemplo = 10;              // número
const esActivo = true;               // booleano
let frutas = ["manzana", "pera"];    // arreglo
let persona = { nombre: "Ana", edad: 22 }; // objeto

// ===============================
// MANEJO DEL DOM
// ===============================
const btnContar = document.getElementById("btnContar");
const btnTabla = document.getElementById("btnTabla");

const seccionContar = document.getElementById("seccionContar");
const seccionTabla = document.getElementById("seccionTabla");

const inputFrase = document.getElementById("inputFrase");
const resultadoLetras = document.getElementById("resultadoLetras");

const inputNumero = document.getElementById("inputNumero");
const resultadoTabla = document.getElementById("resultadoTabla");


// ===============================
// EVENTOS PARA MOSTRAR SECCIONES
// ===============================
btnContar.addEventListener("click", () => {
    seccionContar.style.display = "block";
    seccionTabla.style.display = "none";
});

btnTabla.addEventListener("click", () => {
    seccionContar.style.display = "none";
    seccionTabla.style.display = "block";
});


// ===============================
// PROYECTO 1: Contar letras
// ===============================

// Función tradicional
function contarLetras(frase) {
    return frase.replace(/\s+/g, '').length; // quita espacios y cuenta
}

// Evento
document.getElementById("btnContarLetras").addEventListener("click", () => {
    let frase = inputFrase.value;

    if (frase.length === 0) {
        Swal.fire("Error", "Por favor escribe una frase.", "error");
        return;
    }

    let total = contarLetras(frase);

    resultadoLetras.textContent = `La frase tiene ${total} letras.`;
});


// ===============================
// PROYECTO 2: TABLA DE MULTIPLICAR
// ===============================

// Función flecha
const generarTabla = (num) => {
    resultadoTabla.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = `${num} x ${i} = ${num * i}`;
        resultadoTabla.appendChild(li);
    }
};

// Evento
document.getElementById("btnGenerarTabla").addEventListener("click", () => {
    let n = parseInt(inputNumero.value);

    if (isNaN(n)) {
        Swal.fire("Error", "Debes escribir un número válido.", "warning");
        return;
    }

    generarTabla(n);
});
