document.getElementById(datos)
document.getElementById("botonDatos").addEventListener("click", displayData);

document.getElementById("ocultarDatos").addEventListener("click", hideData);

function displayData(){
    document.getElementById("datos").hidden=false;
    document.getElementById("botonDatos").hidden=true;

    
}

function hideData(){
    document.getElementById("datos").hidden=true;
    document.getElementById("botonDatos").hidden=false;
}