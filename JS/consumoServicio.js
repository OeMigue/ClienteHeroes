export async function consumirAPI(datosDelFormulario) {
    // 1. Para qué BackEnd voy - Para donde voy?
    let url="localhost:8080/personajes"

    // 2. Configuracion de la petición - A hacer qué?
    let peticion ={
        method: "POST",
        body: datosDelFormulario
    }

    // 3. Ir al Back - Vaya pues
    let respuesta=await fetch(/* Para donde voy? --> */url, /* A hacer qué? --> */peticion)
    return await respuesta.json()
}