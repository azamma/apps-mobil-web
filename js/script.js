var local=0;

function validarFormulario () {
	
	var validado=true;
	var nombre=document.getElementById("nom").value;
	var apellido=document.getElementById("ape").value;
	var fecha=document.getElementById("check").value;
	var sexo="";
	var radio=document.forms.form.sexo;

	for (let i = 0; i < radio.length; i++ ) {
		if (radio[i].checked) {
			sexo=radio[i].value;
		}
	}

	if (sexo==="") {
		alert("Elija un sexo");
	 	validado=false;
	 }

	if (nombre===""){
		alert ("El campo nombre es obligatorio");
		validado= false;
	}

	if (!nombre.match(/^[a-zA-Z\s]+$/)) 
    {
        alert('Nombre solo letras');
        return false;
    }

	if (apellido===""){
		alert ("El campo apellido es obligatorio");
		validado= false;
	}


		if (!apellido.match(/^[a-zA-Z\s]+$/)) 
    {
        alert('nombre solo texto');
        return false;
    }

if (fecha===0 || fecha===""){
		alert ("El campo fecha es obligatorio");
		validado= false;
	}

	if (validado===true) {
		alert("Nombre: " + nombre + "\nApellido: " + apellido +"\nFecha de Nacimiento: "+ fecha);
	}
}

function cancelar() {
var r = confirm("elija una opcion!");
if (r == true) {
document.getElementById("form").reset();
} else {
	return false;
}
}

function opacity(id) {
	
	if (document.getElementById(id).style.opacity==="0.5") {
		document.getElementById(id).setAttribute("style","opacity:1; -moz-opacity:1; filter:alpha(opacity=0)");
			if (id==="img1" || id==="img4" || id==="img7" ||id==="img10") {
				local=local- 200;
				document.getElementById("total").innerHTML = local;
			}
			if (id==="img2" || id==="img5" || id==="img8" ||id==="img11") {
				local=local- 300;
				document.getElementById("total").innerHTML = local;
			}
			if (id==="img3" || id==="img6" || id==="img9" ||id==="img12") {
				local=local- 400;
				document.getElementById("total").innerHTML = local;
			}
	}
	else{
	document.getElementById(id).setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
	if (id==="img1" || id==="img4" || id==="img7" ||id==="img10") {
				local=local + 200;
				document.getElementById("total").innerHTML = local;
			}
			if (id==="img2" || id==="img5" || id==="img8" ||id==="img11") {
				local=local+ 300;
				document.getElementById("total").innerHTML = local;
			}
			if (id==="img3" || id==="img6" || id==="img9" ||id==="img12") {
				local=local + 400;
				document.getElementById("total").innerHTML = local;
			}
}
}