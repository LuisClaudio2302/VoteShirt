function eventos(){
	
	$("#btentrar").click(function(){
		
		$(".pagina").fadeOut('slow',function(){
		   $("#pagina-principal").fadeIn('slow');	
		});
		
	})
	
	$("#link-cadastro").click(function(){
		
		$(".pagina").fadeOut('slow',function(){
			$("#pagina-cadastro").fadeIn('slow');	
		});
		
	})
	
	$("#btfinalizar").click(function(){
		
		$(".pagina").fadeOut('slow',function(){
			$("#pagina-login").fadeIn('slow');	
		});
		
	})
	
}



$(document).ready( function(){
	   
      $('.sidenav').sidenav();
	  eventos();
});