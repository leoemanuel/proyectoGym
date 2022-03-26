const h4Login = document.getElementById("h4-login");
function ir(){
	let password = "daniel";
	let usuario = "daniel";
	if(document.form.password.value == password && document.form.login.value == usuario){

        swal({
            title: `Bienvenido ${usuario}`,
            icon: "success",
          });
          const succes = setTimeout(usuariox, 1000)
            function usuariox(){
                window.location.href="../usuario/usuario.html";
            }

	}else{
        swal({
            title: "Error",
            text: "El usuario no se encuentra",
            icon: "error",
          });

	}
}

