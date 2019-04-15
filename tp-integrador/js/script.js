var local=0;

function validarFormulario () {
	
	var validado=true;
	var nombre=$("#nom").val();
	var apellido=$("#ape").val();
	var fecha=$("#check").val();
	var radio=$("input[id='sexo']:checked").val();

	if (!radio) {
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
        validado= false;
    }

	if (apellido===""){
		alert ("El campo apellido es obligatorio");
		validado= false;
	}


		if (!apellido.match(/^[a-zA-Z\s]+$/)) 
    {
        alert('nombre solo texto');
        validado= false;
    }

if (fecha===0 || fecha===""){
		alert ("El campo fecha es obligatorio");
		validado= false;
	}

	if (validado===true) {
		validado=false;
		document.getElementById("exito").style.display ="block";		
		//En 5 segundos lo hace desaparecer
		$("#exito").delay(5000).hide(1);
		alert("Nombre: " + nombre + "\nApellido: " + apellido +"\nFecha de Nacimiento: "+ fecha);
	}
	
	return validado;
}

function cancelar() {
var r = confirm("Seleccione ACEPTAR para cancelar.");
if (r == true) {
$("#form").reset();
} else {
	return false;
}
}

function opacity(id) {
	
	// Esto hace que "rebote" el total
	$("#total").animate({letterSpacing: "+=10px"});
	$("#total").animate({letterSpacing: "-=10px"});
	if ($("#"+id).css('opacity') ==="0.5") {
		
		
		$("#"+id).css('opacity','1');
		$("#"+id).animate({ //Anima la escala de la imagen
				width:"70%",
				height:"20%"
				});
				
			if (id==="img1" || id==="img4" || id==="img7" ||id==="img10") {
				local=local- 200;
				$('#total').text(local)
			}
			if (id==="img2" || id==="img5" || id==="img8" ||id==="img11") {
				local=local- 300;
				$('#total').text(local)
			}
			if (id==="img3" || id==="img6" || id==="img9" ||id==="img12") {
				local=local- 400;
				$('#total').text(local)
			}		
		
	}
	else{
		
	$("#"+id).css('opacity','0.5');
	
	$("#"+id).animate({ //Anima la escala de la imagen
				width:"80%",
				height:"25%"
				});

	if (id==="img1" || id==="img4" || id==="img7" ||id==="img10") {
				local=local + 200;
				$('#total').text(local)
			}
			if (id==="img2" || id==="img5" || id==="img8" ||id==="img11") {
				local=local+ 300;
				$('#total').text(local)
			}
			if (id==="img3" || id==="img6" || id==="img9" ||id==="img12") {
				local=local + 400;
				$('#total').text(local)
			}	

}
}