const user = document.getElementById("user").value
const pass = document.getElementById("pass").value

function validarDatos(){
    if(user=="prueba" && pass=="123456"){
        alert("ya ingreso con datos ficticios")
    }
    else{
        alert("Este no es un usuatio valido")
    }
}