
// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS


import { API_KEY, SESSION_TOKEN} from "./env.js";

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// Las variables de entorno se importan directamente desde env.js

// Configuración  NO SE USA ASÍ QUE SE ELIMINA


// SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS


// Función principal de inicialización
function inicializar() {
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
}

// Función para guardar un registro
function guardarRegistro() {
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    // Validaciones regex agregadas - los inputs ahora validan en el HTML con pattern
    // Validación adicional del lado del servidor para mayor seguridad
    
    // Regex para validar nombre (letras y espacios)
    const nombreRegex = /^[A-Za-zÀ-ÿñÑ\s]+$/;
    // Regex para validar teléfono (10 dígitos)
    const telefonoRegex = /^[0-9]{10}$/;
    // Regex para validar CURP (formato oficial)
    const curpRegex = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/;
    // Regex para validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Validaciones con mensajes genéricos
    if (!nombreRegex.test(nombre)) {
        alert("ERROR: Formato de nombre inválido");
        return;
    }
    
    if (!telefonoRegex.test(telefono)) {
        alert("ERROR: El teléfono debe contener 10 dígitos");
        return;
    }
    
    if (!curpRegex.test(curp)) {
        alert("ERROR: Formato de CURP inválido");
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert("ERROR: Formato de email inválido");
        return;
    }
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: SESSION_TOKEN
    };
    
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    

    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
    
    // Simulación de envío a servidor (hardcoded URL)
    
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
}

// Función que simula envío a servidor
//FUNCION INUTIL 
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
    
           // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
        // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS

    
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    

    
        // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
        
        // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
        // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
        // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
    


// Función inutil 

// Función inutil 

// Función de diagnóstico (expone información del sistema)
// Función inutil 

    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    


// Ejecutar diagnóstico al cargar




    //funcion eliminada por código expuesto

//// Variable global adicional
// variable inutil
// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() { 
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
    inicializar();
    

    // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
    // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
    // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS
    // SE ELIMINARON LAS VARIABLES DE ENTORNO HARDCOREADAS CON CONSOLES LOGS

    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
});

    //funcion eliminada por código expuesto

    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    //CONSOLE LOG DE REGISTRO ELIMINADOS PORQUE EXPONIAN DATOS SENSIBLES
    
