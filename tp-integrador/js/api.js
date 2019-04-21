$(function() {
	
	
	
	function buscar(param) {
		
	//Limpio los divs
	for (var i = 0; i < 10; i++) {
	$( "#produ"+i ).empty();
	}
	
	var limite=10;
		
	$.ajax({
	//El tipo de petición
	type: 'GET',
	//La url de la api. Al final de la dirección se le pasa el término de la búsqueda
	url: 'https://api.mercadolibre.com/sites/MLA/search?q=memoria ram'+param+'&category=MLA10008&shipping=free&sort=price_desc&offset='+limite,
	
	//Si la api da una respuesta de éxito agarra la información que da y la llamo resultados
	success: function(resultados){
		
		//para cada resultado de los elementos results
		$.each(resultados.results, function(i,resultado){	
		
			if(i<limite+1){
				
			$("#produ"+i).append('<p> Nombre: </p><p id="nombre'+i+'">' + resultado.title +' </p>');
			$("#produ"+i).append('<p> Precio: </p>$<p id="precio'+i+'">' + resultado.price +' </p>');
			$("#produ"+i).append('<img src=' + resultado.thumbnail +'>');
			$("#produ"+i).append('<div class="button"><input id="share'+i+'" type="button" onclick="share(this.id);" value="Compartir"/></div>');
			
			
			} 
		})
	}
	});
		
	}
	
		
	$('#buscador').click(function() {  
	 buscar($('#campo').val());
    }); 
	
	
	
});

function share(id){
	var produnumero = id.substr(id.length-1) ;
	alert( 'Se va a compartir'+$('#nombre'+produnumero).text() );

}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}