function validarFormulario(e){
  var error = false;
  var messages = '';
  var nombre = document.getElementsByName('nombre')[0].value;
  if (!nombre){
    messages+= 'Debe rellenar el campo nombre\n';
    error = true;
  }
  var apellido = document.getElementsByName('apellido')[0].value;
  if (!apellido){
    messages+= 'Debe rellenar el campo apellido\n';
    error = true;
  }
  var nacimiento = document.getElementsByName('nacimiento')[0].value;
  if (!nacimiento) {
    messages+= 'Debe rellenar el campo nacimiento\n';
    error = true;
  }
