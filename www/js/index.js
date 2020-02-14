var apiserver = "http://172.16.21.156/voteshirt/api.php";
var participante = null;


function irTelaPrincipal(){
		$(".pagina").fadeOut('slow',function(){
			$("#pagina-principal").fadeIn('slow');	
		});
}


function eventos(){
	$("#link-cadastro").click(function(){
		
		$(".pagina").fadeOut('slow',function(){
			$("#pagina-cadastro").fadeIn('slow');	
		});
		
	})
	
	
	$("#btentrar").click(function(){
		    var email = $("#login-email").val();
			var senha = $("#login-senha").val();
			$.ajax({
				url: apiserver,
				method: 'post',
				crossDomain : true,
				data: {  op: 'va',email: email, senha: senha }
			}).done(function(msg){
				console.log(msg);
			    if (msg!=null && msg.length>2) {
					participante = JSON.parse(msg);
					if (participante[0].id!=null && participante[0].id > 0) {
						
						irTelaPrincipal();
						
					} else {
						M.toast({html:"Email ou Senha inválida"});
					}
				} else {
					M.toast({html:"Email ou Senha inválida"});
				}
				
				
			});
		
		
	});
	
	
}



$(document).ready( function(){
	  M.AutoInit(); 
      $('.sidenav').sidenav();
	  eventos();
});