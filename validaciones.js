function mostrar_error_campo(idError, codigoError) {
    let errorDiv = document.getElementById('div_error_' + idError);
    if(errorDiv){
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = codigoError;
        errorDiv.style.borderBlockColor = 'red';
        document.getElementById('submit_button').focus();
    }else{
        console.error("no se encotro div error")
    }

}

function mostrar_exito_campo(idExito) {
    let errorDiv = document.getElementById('div_error_' + idExito);
    errorDiv.style.display = 'none';
    errorDiv.innerHTML = '';
    errorDiv.style.borderBlockColor = 'green';
}

function comprobarCampo(campo) {
    let valor = campo.value.trim();

    switch (campo.id) { // Cambiado de valor.id a campo.id
        case 'id':
            if (valor.length < 1) {
                mostrar_error_campo(campo.id, 'id_size_min_KO');
            } else if (valor.length > 11) {
                mostrar_error_campo(campo.id, 'id_size_max_KO');
            } else {
                mostrar_exito_campo(campo.id);
            }
            break;
        case 'name':
            if (valor.length < 3) {
                mostrar_error_campo(campo.id, 'name_size_min_KO');
            } else if (valor.length > 16) {
                mostrar_error_campo(campo.id, 'name_size_max_KO');
            } else {
                mostrar_exito_campo(campo.id);
            }
            break;
        case 'email':
            if (valor.length < 6) {
                mostrar_error_campo(campo.id, 'email_size_min_KO');
            } else if (valor.length > 25) {
                mostrar_error_campo(campo.id, 'email_size_max_KO');
            } else {
                mostrar_exito_campo(campo.id);
            }
            break;
        case 'descripcion':
            if (valor.length < 20) {
                mostrar_error_campo(campo.id, 'descripcion_size_min_KO');
            } else if (valor.length > 100) {
                mostrar_error_campo(campo.id, 'descripcion_size_max_KO');
            } else {
                mostrar_exito_campo(campo.id);
            }
            break;
        case 'file':
            if (valor.length < 6) {
                mostrar_error_campo(campo.id, 'file_size_min_KO');
            } else if (valor.length > 20) {
                mostrar_error_campo(campo.id, 'file_size_max_KO');
            } else {
                mostrar_exito_campo(campo.id);
            }
            break;
        default:
            break;
    }
}

function validarFormulario() {
    // Aquí puedes añadir la lógica de validación final del formulario
}
