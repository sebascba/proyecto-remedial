document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

var registrarse = []

function registrar(){
    let objeto = {
        "correo":document.getElementById("correo").value,
        "contrasenia":document.getElementById("contrasenia").value,
        "confirmacionContra":document.getElementById("confirmacionContra").value
    };

    if(document.getElementById("contrasenia").value == document.getElementById("confirmacionContra").value){
        registrarse.push(objeto);
    
        window.alert("usted se ha registrado satisfactoriamente")
    }else{
        window.alert("asegurese de que las contraseñas son iguales")
    }
    
}

function login(){
    let objeto = {
        "correo":document.getElementById("correo1").value,
        "contrasenia":document.getElementById("contrasenia1").value,
    };
    var objeto1 = registrarse.find((item) => item.correo === objeto.correo);
    if(objeto.correo === objeto1.correo && (objeto.contrasenia === objeto1.contrasenia)){
        window.alert("usted  ha iniciado seccion");

        window.location.href="index.html";
    }
    else if(objeto.correo !== objeto1.correo || (objeto.contrasenia !== objeto1.contrasenia)){
        window.alert("asegurese de que su correo y contraseña esten correctos")
    }
}

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
} 