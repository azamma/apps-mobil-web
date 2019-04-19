$(function() {
	
	
	
	function buscar(param) {
		
	//Limpio los divs
	for (var i = 0; i < 10; i++) {
	$( "#produ"+i ).empty();
	}
	
	var limite=40;
		
	$.ajax({
	//El tipo de petición
	type: 'GET',
	//La url de la api. Al final de la dirección se le pasa el término de la búsqueda
	url: 'https://api.mercadolibre.com/sites/MLA/search?q='+param+'&category=MLA1648&shipping=free&sort=price_desc&offset='+limite,
	
	//Si la api da una respuesta de éxito agarra la información que da y la llamo resultados
	success: function(resultados){
		
		//para cada resultado de los elementos results
		$.each(resultados.results, function(i,resultado){	
		
			if(i<limite+1){
				
			$("#produ"+i).append('<p id="nombre"> Nombre: </p><p>' + resultado.title +' </p>');
			$("#produ"+i).append('<p id="precio"> Precio: </p>$<p>' + resultado.price +' </p>');
			$("#produ"+i).append('<img src=' + resultado.thumbnail +'>');
			
			
			} 
		})
	}
	});
		
	}
	
		
	$('#buscador').click(function() {  
	 buscar($('#campo').val());
    }); 
});