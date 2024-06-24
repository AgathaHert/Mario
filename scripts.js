
const formulario = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-form")

function mostrarForm(){
    formulario.style.left = "50%"
    formulario.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    formulario.style.left = "-450px"
    formulario.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"
}