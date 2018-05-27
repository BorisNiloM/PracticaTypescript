

function error(mensaje):never{

    throw new Error(mensaje);
}

error("Error critico... linea 11 alcanzada..");
