
$( document ).ready(function() {
	alert("Bienvenue");
	$("p").on( "click", function() {

if ($( "p" ).hasClass('red')){
	$( "p" ).removeClass('red');
}else{
	$( "p" ).addClass('red');
	}
});

}); 









