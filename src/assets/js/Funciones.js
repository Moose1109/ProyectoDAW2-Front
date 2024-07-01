function actualizarCampos() {
    console.log("Actualizando campos...");
    var select = document.getElementById("inputCatProducto");
    var precioInput = document.getElementById("precio");
    var codigoInput = document.getElementById("codigo");
    var stockInput = document.getElementById("stock");

    var precio = select.options[select.selectedIndex].getAttribute("data-precio");
    var stock = select.options[select.selectedIndex].getAttribute("data-stock");
    var codigo = select.options[select.selectedIndex].getAttribute("data-codigo");

    precioInput.value = precio || "";
    stockInput.value = stock || "";
    codigoInput.value = codigo || "";

}

document.getElementById("inputCatProducto").addEventListener("change", actualizarCampos);



function actualizarCamposCliente() {
    console.log("Actualizando campos...");
    var select = document.getElementById("inputCliente");
    var clienteInput = document.getElementById("nomcliente");
    var dniInput = document.getElementById("dni");
    var telofonoInput = document.getElementById("telefono");
    var codigoInput = document.getElementById("codigoCliente");

    var codigo = select.options[select.selectedIndex].getAttribute("data-codigo");
    var cliente = select.options[select.selectedIndex].getAttribute("data-cliente");
    var dni = select.options[select.selectedIndex].getAttribute("data-dni");
    var telefono = select.options[select.selectedIndex].getAttribute("data-telefono");

    codigoInput.value = codigo || "";
    clienteInput.value = cliente || "";
    dniInput.value = dni || "";
    telofonoInput.value = telefono || "";

}   
document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("idcliente");
    if (selectElement) {
        selectElement.addEventListener("change", actualizarCamposCliente);
    }
});
