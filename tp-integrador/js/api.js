$(function() {
	
	
	
	function buscar(param) {
		
	//Limpio los divs
	for (var i = 0; i < 10; i++) {
	$( "#produ"+i ).empty();
	}
	
	var filtrosExtra=$( "#filtroEnvio option:selected" ).val()+$( "#filtroPrecio option:selected" ).val();
	
	var limite=parseFloat($( "#filtroCantidad option:selected" ).val())+1;
		
	$.ajax({
	//El tipo de petición
	type: 'GET',
	//La url de la api. Al final de la dirección se le pasa el término de la búsqueda
	url: 'https://api.mercadolibre.com/sites/MLA/search?q=memoria ram'+param+'&category=MLA10008'+filtrosExtra+'&limit='+limite,
	
	//Si la api da una respuesta de éxito agarra la información que da y la llamo resultados
	success: function(resultados){
		
		//para cada resultado de los elementos results
		$.each(resultados.results, function(i,resultado){	
		
			if(i<limite){
			$("#contenedor").append('<div id="produ'+i+ '" class="row bg-white mt-2"> </div>');
			$("#produ"+i).append('<div id="descripcion'+i+ '"class="col-7 mt-3 mb-3 border border-warning"> </div>');		
			$("#descripcion"+i).append('<p id="nombre'+i+'"> <b>Nombre: </b>' + resultado.title +' </p> ');
			$("#descripcion"+i).append('<p id="precio'+i+'"> <b>Precio: </b> $' + resultado.price +' </p>');
			$("#produ"+i).append('<div id= "img'+i+ '" class="col-3 mt-4 "> </div>');
			$("#img"+i).append('<img class="imgproducto" src=' + resultado.thumbnail +'>');
			$("#produ"+i).append('<div id="cmp'+i+ '" class="col-2  mt-3 mb-3"> </div>');
			$("#cmp"+i).append('<img id="compartir' +i+ '" class="compartir" src="./img/compartir.png" onclick="share(this.id);">');
			
			
			} 
		})
	}
	});
		
	}
	
		
	$('#buscador').click(function() {  
	 buscar($('#campo').val());
    }); 
	
	
	
});

function share(id){  c
	
	var produnumero = id.substr(id.length-1) ;
	
	alert( 'Se va a compartir: '+$('#nombre'+produnumero).text() );
	alert( 'Filtro: '+filtro_cantidad+filtro_envio+filtro_precio );


}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}