
function mostrar_error_campo(idError, codigoError){
    let errorDiv = document.getElementById('div_error_'+idError);
    errorDiv.style.display = 'block';
    errorDiv.innerHTML = codigoError;
    errorDiv.style.borderBlockColor = 'red';
    document.getElementById('submit_button').focus();
}

function mostrar_exito_campo(idExito){
    let errorDiv = document.getElementById(idExito);
    errorDiv.style.display = 'none';
    errorDiv.innerHTML = '';
    error.style.borderBlockColor = 'green';
}

function comprobarCampo(campo){
    let valor = campo.value.trim();

    if (valor.length < 1){
        mostrar_error_campo('id', 'id_size_min_KO');
    }
    else if(valor.length > 11){
        mostrar_error_campo('id','id_size_max_KO');

    }else{
        mostrar_exito_campo('id')
    }

}

function validar_formulario(){
    
}


    
