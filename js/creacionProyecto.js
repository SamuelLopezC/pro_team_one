//Aqui estan las variables del DOM
const $inputNombreLeader = document.getElementById('project_name');
const $inputNombreProject = document.getElementById('leader');
const $fechaInicio = document.getElementById('begin_date');
const $fechaFin = document.getElementById('end_date');
const $description = document.getElementById('description');
const $btnAddProduct = document.getElementById('btn-contacto-submit');


//Aqui se crea el objeto con los productos

let objetoProductos = [];

//Aqui se agregan los eventos
$btnAddProduct.addEventListener('click', agregaProducto);
$inputNombreLeader.addEventListener('input', obtenerDatosInput);
$inputNombreProject.addEventListener('input', obtenerDatosInput);
$fechaInicio.addEventListener('input', obtenerDatosInput);
$fechaFin.addEventListener('input', obtenerDatosInput);
$description.addEventListener('input', obtenerDatosInput);

//Aqui van las funciones

function agregaProducto() {
    window.sessionStorage.setItem('nuevo-proyecto', JSON.stringify(objetoProductos));  
}

function obtenerDatosInput(e) {
    e.preventDefault();
    let tmp = {[e.target.getAttribute('id')]: e.target.value};
    objetoProductos.push(tmp);
}