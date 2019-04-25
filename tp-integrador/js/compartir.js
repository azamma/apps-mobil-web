$(function() {
	
	//En esta variable se guarda todo el contenido de la barra de busqueda
	var queryString = decodeURIComponent(window.location.search);
	//Acá obtengo toda la info
	queryString = queryString.substring(1);
	//Acá separo el nombre y el precio
	var queries = queryString.split("&");
	
	//Cargo en los campos lo recuperado
	$('#art').val(queries[3]); //nombre
	$('#precio').val(queries[1]); //precio
	
	
	$('#form').submit(function (evt) {

   	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "aguzamma@gmail.com",
    Password : "c9bfea30-f0d4-410a-a886-9ee8b7712efe",
    To : $('#receptor').val(),
    From : $('#emisor').val(),
    Subject : "Busqueda de Rams",
    Body : $('#art').val() + $('#precio').val()
	}).then(
		message => alert('Se envió la búsqueda')		
	);

	history.back();
		
	//Esto evita que se recargue la página
    evt.preventDefault();
	});
	
	
});


	