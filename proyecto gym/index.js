const h4Login = document.getElementById("h4-login");
function ir(){
	let password = "coder";
	let usuario = "Coder";
	if(document.form.password.value == password && document.form.login.value == usuario){
		//alert("Wellcome");
        swal({
            title: `Bienvenido ${usuario}`,
            icon: "success",
          });
		//window.location.href="actividades.html";
	}else{
        swal({
            title: "Error",
            text: "El usuario no se encuentra",
            icon: "error",
          });
		/* const elemento = document.createElement("h4");
        elemento.innerHTML = `Lo siento no es un usuario correcto`;
        h4Login.appendChild(elemento); */
	}
}

/* funciones para agregar rutinas */

//-------Registro de actividades--------
const ejercicio = document.getElementById("ejercicio");
const series = document.getElementById("series");
const repeticiones = document.getElementById("repeticiones");

ejercicio.addEventListener("input", (e)=>{
    if(e.target.value.length === 0){
        console.log("este campo es obligatorio");
    }
})

series.addEventListener("input", (e)=>{
    if(e.target.value.length === 0){
        console.log("este campo es obligatorio");
    }
})

repeticiones.addEventListener("input", (e)=>{
    if(e.target.value.length === 0){
        console.log("este campo es obligatorio");
    }
})

//-----Creacion de tabla de ejercicios------

let fomulario = document.getElementById("formulario");
const respuestaFormulario = document.getElementById("respuesta-formulario");

let validarFormulario = (e) => {
    e.preventDefault();
    const elemento = document.createElement("tr");
    elemento.innerHTML = `<td>${ejercicio.value}</td> <td>${series.value}</td> <td>${repeticiones.value}</td> <td><button onclick="borrame(this)"><img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/></button></td>`
    respuestaFormulario.appendChild(elemento);
}

fomulario.addEventListener("submit", validarFormulario);


//-----Boton para borrar ejercicios------

const borrame=(t) =>{
    t.parentElement.parentElement.remove();
 
}

  //--------Pintar la tabla dependiendo del dia ----------
function seleccionar(){
    let dia = document.getElementById("dia");
    let dias= dia.value;
    /* if(dias === "Dia1"){
        document.getElementById("respuesta-formulario").style.backgroundColor = "rgba(248, 70, 70, 0.911)"; 
    }else if (dias === "Dia2"){
        document.getElementById("respuesta-formulario").style.backgroundColor = "#C0A1F2";
    }else{
        document.getElementById("respuesta-formulario").style.backgroundColor = "#A1F2AB";
    } */
    dias ==="Dia1"?document.getElementById("respuesta-formulario").style.backgroundColor = "rgba(248, 70, 70, 0.911)" : dias === "Dia2" ? document.getElementById("respuesta-formulario").style.backgroundColor = "#C0A1F2" : document.getElementById("respuesta-formulario").style.backgroundColor = "#A1F2AB";
}

