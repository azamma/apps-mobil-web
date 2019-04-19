$(function() {
	
	
    	$.ajax({
	//El tipo de petición
	type: 'GET',
	//La url de la api. Al final de la dirección se le pasa el término de la búsqueda
	url: 'https://api.mercadolibre.com/sites/MLA/search?q=memoriaram',
	
	//Si la api da una respuesta de éxito agarra la información que da y la llamo resultados
	success: function(resultados){
		
		//para cada resultado de los elementos results
		$.each(resultados.results, function(i,resultado){	
		
			if(i<11){
				
			$("#produ"+i).append('<p id="nombre"> Nombre: </p><p>' + resultado.title +' </p>');
			$("#produ"+i).append('<p id="precio"> Precio: </p>$<p>' + resultado.price +' </p>');
			$("#produ"+i).append('<img src=' + resultado.thumbnail +'>');
			
			
			} 
		})
	}
	});
});