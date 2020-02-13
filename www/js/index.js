function eventos(){
	
	$("#btentrar").click(function(){
		
		$(".pagina").fadeOut('slow',function(){
		   $("#pagina-principal").fadeIn('slow');	
		});
		
		
		
		
	})
	
	
	
	
}



$(document).ready( function(){
	   
      $('.sidenav').sidenav();
	  eventos();
});