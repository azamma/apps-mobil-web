$(function() {
	
	
	
	function buscar(param) {
		
	//Limpio los divs
	for (var i = 0; i < 10; i++) {
	$( "#produ"+i ).empty();
	}
	
	var filtrosExtra=$( "#filtroEnvio option:selected" ).val()+$( "#filtroPrecio option:selected" ).val();
	
	var limite=parseFloat($( "#filtroCantidad option:selected" ).val());
		
	$.ajax({
	//El tipo de petición
	type: 'GET',
	//La url de la api. Al final de la dirección se le pasa el término de la búsqueda
	url: 'https://api.mercadolibre.com/sites/MLA/search?q=memoria ram'+param+'&category=MLA10008'+filtrosExtra,
	
	//Si la api da una respuesta de éxito agarra la información que da y la llamo resultados
	success: function(resultados){
		
		//para cada resultado de los elementos results
		$.each(resultados.results, function(i,resultado){	
		
			if(i<limite){
			$("#contenedor").append('<div id="produ'+i+ '" class="row bg-white mt-2"> </div>');
			$("#produ"+i).append('<div id="descripcion'+i+ '"class="col-7 mt-4 mb-3"> </div>');		
			$("#descripcion"+i).append('<p id="nombre'+i+'"> <b>Nombre: </b>' + resultado.title +' </p> ');
			$("#descripcion"+i).append('<p id="precio'+i+'"> <b>Precio: </b> $' + resultado.price +' </p>');
			$("#produ"+i).append('<div  id= "img'+i+ '" class="col-3 mt-4 "> </div>');
			$("#img"+i).append('<img class="imgproducto" src=' + resultado.thumbnail +'>');
			$("#produ"+i).append('<div id="cmp'+i+ '" class="col-2  mt-3 mb-3"> </div>');
			$("#cmp"+i).append('<img id="compartir' +i+ '" class="compartir rounded-circle mt-5" src="./img/compartir.png" onclick="share(this.id);">');
			
			
			} 
		})
	}
	});
		
	}
	
		
	$('#buscador').click(function() {  
	 buscar($('#campo').val());
    }); 
	
	

	// Get the input field
var input = document.getElementById("campo");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("buscador").click();
  }
});
	
});

function share(id){  
	
	var produnumero = id.substr(id.length-1) ;
	var precio= $('#precio'+produnumero).text();
	var nombre= $('#nombre'+produnumero).text();
	
	var queryString = "?precio=&" + precio + "&nombre=&" + nombre;
	window.location.href = "compartir.html" + queryString;
	


}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}