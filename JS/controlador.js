//REFERENCIAS AL FORMULARIO

let nombres = document.getElementById("nombres")
let cantidadDeVida = document.getElementById("vida")
let poderAtaque = document.getElementById("ataque")
let poderDeDefensa = document.getElementById("defensa")
let fotografia = document.getElementById("foto")
let fechaDeCreación = document.getElementById("fecha")

let botonFormulario = document.getElementById("boton")

//DETECTO EL EVENTO DE HACERLE CLICK AL BOTON

botonFormulario.addEventListener("click", (evento) => {
    evento.preventDefault()
    /* Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    }); */

    /* Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    }); */

    let datosQueVoyAhEnviarAlBack = {
        "nombre": nombres.value,
        "cantidadVida": cantidadDeVida.value,
        "poderAtaque": poderAtaque.value,
        "poderDefensa": poderDeDefensa.value,
        "fotografia": fotografia.value,
        "fechaCreacion": fechaDeCreación.value
    }
    let datosListos = JSON.stringify(datosQueVoyAhEnviarAlBack)

    alert(datosListos)
})