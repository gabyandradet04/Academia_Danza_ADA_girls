$(document).ready(function(){
	var ul = $('#error');
	
	$('#enviar').on('click',function(event){
		event.preventDefault();
		var nombre =$('#nombre').val();
		var apellido =$('#apellido').val();
		var mail =$('#mail').val();
		var motivo =$('#motivo').val();
		var interes =$('#interes').val();
		var consulta =$('#consulta').val();
		if(validar(nombre,apellido,mail,motivo,consulta)==true){
			var jSON = {"nombre":nombre,"apellido":apellido,"mail":mail,"motivo":motivo, "interes":interes}
			console.log(jSON);
		}

	});
});


function validarRequeridos(campo){
      campo.trim();
	

	if(campo.length == 0){

		return false;
	}
	
	return true;
}


function validarMail(mail){
   mail.trim();

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if(emailRegex.test(mail)){

  	return true;
  }

  return false;
}

//********************************************
function validar(nombre,apellido,mail,motivo,consulta){
var ul = $('#error');
	valido = true; 

		if(validarRequeridos(nombre)== false){

			msg = "<li>El nombre es un campo requerido</li>";
			ul.append(msg);
			valido = false;
		}
		if(validarRequeridos(apellido) == false){
			msg = "<li>El apellido es un campo requerido</li>";
			ul.append(msg);
			valido = false;
		}


		if(validarRequeridos(mail)== false){

			msg = "<li>El mail es un campo requerido</li>";
			ul.append(msg);
			valido = false;

		}else{

			if(validarMail(mail) == false){

				msg = "<li>Debe ingresar mail valido.</li>";
				ul.append(msg);
				valido = false;	
			}
		}

		if(validarRequeridos(motivo)==false){
			msg= "<li>El motivo es un campo requerido</li>";
			ul.append(msg);
			valido=false;
		}
		if(validarRequeridos(consulta)==false){
			msg= "<li>El consulta es un campo requerido</li>";
			ul.append(msg);
			valido=false;
		}

		return valido;
}

