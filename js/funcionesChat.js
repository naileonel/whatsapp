$(this).ready(function(){

	$(".lista").click(function(){		
		$(".chat").hide();
		$("#"+this.id.replace("lista","divContenedorMensajes")).show();
		$("#idControl").val(this.id);
	});
});


function txtChat_KeyPress(e)
{

	if (e.charCode==13) {
		
		var fecha= new Date();
		var hora= fecha.getHours();		
		$("#"+$("#idControl").val().replace("lista","mensajes")).append("<div class='mesenger'><h5 class='mariana'>Mariana Costa</h5><h6>"+$("#txtMensaje").val()+"<span class='hora'>"+fecha.getHours()+":"+fecha.getMinutes()+"</span></h6></div>");
		$("#txtMensaje").val("");

	}
}




