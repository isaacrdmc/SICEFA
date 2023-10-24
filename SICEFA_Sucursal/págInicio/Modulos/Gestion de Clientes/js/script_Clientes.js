
let indexClientesSeleccionado;
let obj = [];

let jsonData = '[{"nombreCliente":"Isaac", "apelldiPaterno":"Ramírez", "apellidoMaterno":"De Maria Y Campos", "generoCliente":"Hombre", "nacimientoCliente":"04/10/2004", "rfcCliente":"No se", "curpCliente":"RAMI041004HGTMRSA7", "domicilioCliente":"Mi casa", "cpCliente":"38350", "ciudadCliente":"León", "estadoCliente":"GTO", "estatus":"Si", "rutaFoto":"/img/Clientess/", "codigoBarras":"1234567890", "estatus":"Disponible", "ingresosCliente":"20/09/2014", "ingresosCliente":"8000", "puestoCliente":"Gerente", "salarioCliente":"9000", "codigoEmpre":"AAAAA000000"},{"nombreCliente":"Isaac", "apelldiPaterno":"Ramírez", "apellidoMaterno":"De Maria Y Campos", "generoCliente":"Hombre", "nacimientoCliente":"04/10/2004", "rfcCliente":"No se", "curpCliente":"RAMI041004HGTMRSA7", "domicilioCliente":"Mi casa", "cpCliente":"38350", "ciudadCliente":"León", "estadoCliente":"GTO", "estatus":"Si", "rutaFoto":"/img/Clientess/", "codigoBarras":"1234567890", "estatus":"Disponible", "ingresosCliente":"20/09/2014", "ingresosCliente":"8000", "puestoCliente":"Gerente", "salarioCliente":"9000", "codigoEmpre":"AAAAA000000"}]';

function init() {
    obj = JSON.parse(jsonData);
    console.log(obj);
    actualizaTabla();
}

function obtenerNombreFoto() {
    let nombreFoto;
    nombreFoto = document.getElementById("txtfoto").value;
    nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\") + 1);
    return nombreFoto;
}

function actualizaTabla() {
    let cuerpo = "";
    obj.forEach(function (newClientes, index) {
        let registro =
            '<tr onclick="selectCliente(' + index + ');">' +
            '<td>' + index + '</td>' +
            '<td>' + newClientes.nombreCliente + '</td>' +
            '<td>' + newClientes.apelldiPaterno + '</td>' +
            '<td>' + newClientes.curpCliente + '</td>' +
            '<td>' + newClientes.rfcCliente + '</td>' +
            '<td> <img src="' + newClientes.rutaFoto + newClientes.foto + '" width="100"> </td>' +
            '<td>' + newClientes.generoCliente + '</td>' +
            '<td>' + newClientes.cpCliente + '</td>' +
            '<td>' + newClientes.estadoCliente + '</td>' +
            '<td>' + newClientes.ciudadCliente + '</td>' +
            '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblClientess").innerHTML = cuerpo;
}

function selectCliente(index) {
    document.getElementById("txtNom").value = obj[index].nombreCliente;
    document.getElementById("txtPrmAp").value = obj[index].apelldiPaterno;
    document.getElementById("txtSegAp").value = obj[index].apellidoMaterno;
    document.getElementById("txtGen").value = obj[index].generoCliente;
    document.getElementById("txtNacim").value = obj[index].nacimientoCliente;
    document.getElementById("txtRFC").value = obj[index].rfcCliente;
    document.getElementById("txtCURP").value = obj[index].curpCliente;
    document.getElementById("txtDomi").value = obj[index].domicilioCliente;
    document.getElementById("txtCP").value = obj[index].cpCliente;
    document.getElementById("txtCiud").value = obj[index].ciudadCliente;
    document.getElementById("txtEst").value = obj[index].estadoCliente;

    // Datos adicionales
    document.getElementById("txtIngres").value = obj[index].ingresosCliente;//Fecha
    document.getElementById("txtPuesto").value = obj[index].puestoCliente;
    document.getElementById("txtSalario").value = obj[index].salarioCliente;// Decimal
    document.getElementById("txtCodEmp").value = obj[index].codigoEmpre;

    // Fotos
    document.getElementById("txtfoto").src = obj[index].rutaFoto + obj[index].foto;
    document.getElementById("txtfoto").value = "";

    // Botones
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexClientesSeleccionado = index;
}

function modificarCliente() {
    let nombre, apellPaterno, apellMaterno, genero, 
    nacimiento, rfc, curp, domicilio, cp, ciudad, 
    estado, ingresos, puesto, salario, codigoEmpre, foto;                                            

    nombre = document.getElementById("txtNom").value;
    apellPaterno = document.getElementById("txtPrmAp").value;
    apellMaterno = document.getElementById("txtSegAp").value;
    genero = document.getElementById("txtGen").value;
    nacimiento = document.getElementById("txtNacim").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    domicilio = document.getElementById("txtDomi").value;
    cp = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiud").value;
    estado = document.getElementById("txtEst").value;
    ingresos = document.getElementById("txtIngres").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    codigoEmpre = document.getElementById("txtCodEmp").value;
    foto = obtenerNombreFoto();

    let ClienteModificado = {
        'nombreCliente': nombre,
        'apelldiPaterno': apellPaterno,
        'apellidoMaterno': apellMaterno,
        'generoCliente': genero,
        'nacimientoCliente': nacimiento,
        'rfcCliente': rfc,
        'curpCliente': curp,
        'domicilioCliente': domicilio,
        'cpCliente': cp,
        'ciudadCliente': ciudad,
        'estadoCliente': estado,
        'ingresosCliente': ingresos,
        'puestoCliente': puesto,
        'salarioCliente': salario,
        'codigoEmpre': codigoEmpre,
        'foto': foto
    };

    obj[indexClientesSeleccionado] = ClienteModificado;
    actualizaTabla();
    limpiar();
    alert('Registro modificado con éxito!');
}

// Resto del código...

function agregarCliente() {
    let nombre, apellPaterno, apellMaterno, genero, nacimiento, rfc, curp, domicilio, cp, ciudad, estado, ingresos, puesto, salario, codigoEmpre,  foto;                                            

    nombre = document.getElementById("txtNom").value;
    apellPaterno = document.getElementById("txtPrmAp").value;
    apellMaterno = document.getElementById("txtSegAp").value;
    genero = document.getElementById("txtGen").value;
    nacimiento = document.getElementById("txtNacim").value;
    rfc = document.getElementById("txtRFC").value;
    curp = document.getElementById("txtCURP").value;
    domicilio = document.getElementById("txtDomi").value;
    cp = document.getElementById("txtCP").value;
    ciudad = document.getElementById("txtCiud").value;
    estado = document.getElementById("txtEst").value;
    ingresos = document.getElementById("txtIngres").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    codigoEmpre = document.getElementById("txtCodEmp").value;
    foto = obtenerNombreFoto();

    let nuevoCliente = {
        'nombreCliente': nombre,
        'apelldiPaterno': apellPaterno,
        'apellidoMaterno': apellMaterno,
        'generoCliente': genero,
        'nacimientoCliente': nacimiento,
        'rfcCliente': rfc,
        'curpCliente': curp,
        'domicilioCliente': domicilio,
        'cpCliente': cp,
        'ciudadCliente': ciudad,
        'estadoCliente': estado,
        'ingresosCliente': ingresos,
        'puestoCliente': puesto,
        'salarioCliente': salario,
        'codigoEmpre': codigoEmpre,
        'foto': foto
    };

    obj.push(nuevoCliente);
    actualizaTabla();
    limpiar();
    alert('Registro agregado con éxito!');
}

// Resto del código...


function limpiar() {
    document.getElementById("txtNom").value = "";
    document.getElementById("txtPrmAp").value = "";
    document.getElementById("txtSegAp").value = "";
    document.getElementById("txtGen").value = "";
    document.getElementById("txtNacim").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtCURP").value = "";
    document.getElementById("txtDomi").value = "";
    document.getElementById("txtCP").value = "";
    document.getElementById("txtCiud").value = "";
    document.getElementById("txtEst").value = "";
    document.getElementById("txtTel").value = "";
    document.getElementById("txtIngres").value = "";
    document.getElementById("txtPuesto").value = "";
    document.getElementById("txtSalario").value = "";
    document.getElementById("txtCodEmp").value = "";
    document.getElementById("txtfoto").src = "img/default.jpg";
    document.getElementById("txtfoto").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexClientesSeleccionado = 0;
}
// Resto del código...

function eliminarCliente() {
    if (confirm("¿Estás seguro de que deseas eliminar este Cliente?")) {
        obj.splice(indexClientesSeleccionado, 1);
        actualizaTabla();
        limpiar();
        alert('Registro eliminado con éxito!');
    }
}

function despliegaFoto(fotoRuta) {
    let nombreFoto = obtenerNombreFoto();
    let ruta = 'img/';
    document.getElementById("txtfoto").src = ruta + nombreFoto;
}

init();
