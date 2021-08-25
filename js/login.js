const user = document.getElementById("user")
const pass = document.getElementById("pass")

function validarDatos(){
    if(user==="prueba" && pass==="123456"){
        alert("ya ingreso con datos ficticios")
    }
    else{
        alert("Este no es un usuatio valido")
    }
}