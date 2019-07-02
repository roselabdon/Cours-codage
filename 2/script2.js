$( document ).ready(function() {
  alert('Hello')
})
function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> soyez pret à renouveler de nouveaux défis ! </h4>');

};
// Appel la fonction
welcome();

function getUsername() {
    //affiche une boite de dialogue 
    var  user = prompt("Veuillez rentrez votre nom:", "");
    // la fonction se termine en retournant le nom récupéré par la boite de dialogue
    return user
}





