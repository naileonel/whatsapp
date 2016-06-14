/* mensajes */
$(this).ready(function(){

	$(".lista").click(function(){		
		$(".chat").hide();
		$("#"+this.id.replace("lista","divContenedorMensajes")).show();
		$("#idControl").val(this.id);
	});
});

/* enviar */
function txtChat_KeyPress(e)
{

	if (e.charCode==13) {
		
		var fecha= new Date();
		var hora= fecha.getHours();		
		$("#"+$("#idControl").val().replace("lista","mensajes")).append("<div class='mesenger'><h5 class='mariana'>Mariana Costa</h5><h6>"+$("#txtMensaje").val()+"<span class='hora'>"+fecha.getHours()+":"+fecha.getMinutes()+"</span></h6></div>");
		$("#txtMensaje").val("");

	}
}


/* Funcion del Buscador de Palabras */



$('.sub-menu').click(function() {
  var data = $(this).attr('data')
  var fotos = ["avatar.jpg", "logocodeacademy.png", "katy.jpg","jose.jpg", "andrea.jpg","aldo.jpg","mariapaula.jpg", "raymi.jpg", "rodulfo.jpg","anamaria.jpg", "mariana.jpg"];
  var nombres = ["Alfredo Lopez", "Laboratoria Peru", "Katy Sanchez", "Mereganita Del Angel", "Andrea Lamas", "Aldo Alfaro", "Maria Paula Rivarola", "Raymi saldomando", "Rodulfo Prieto", "Ana Maria Martinez", "Mariana Costa"];
  $('#foto').html('<img class="media-object " src="image/' +fotos[data]+ ' alt="...">');
  $('#nombres').html('<h5>' +nombres[data]+ '</h5>');
});

function input() {
  var llamarID = document.getElementById("#imagenPersona ");
  return llamarID.value;
}

$('body').keyup(function enter(e) {
  var agregar = input();
    if (agregar !== '') {
      if(e.keyCode == 13) {       
        actual();
        ObtenerLista(agregar);
      clean();
          $('#buscar-pal').submit();
      }
    }
});