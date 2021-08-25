

function validarDatos(){
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value

    if(user=="prueba" && pass=="123456"){
        alert("ya ingreso con datos ficticios")
    }
    else{
        alert("Este no es un usuario valido")
    }
}