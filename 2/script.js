
$( document ).ready(function() {
	alert("Bienvenue");
	$("p").on( "click", function() {

if ($( this ).hasClass('red')){
	$( this ).removeClass('red');
}else{
	$( this ).addClass('red');
	}
	$(this).html("ARE YOU READY?")
});

}); 









