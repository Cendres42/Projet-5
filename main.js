//fonction d'affichage des produits
function affichage_produits(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(this.readyState==XMLHttpRequest.DONE && this.status==200){ //vérification serveur prêt à répondre
    var response=JSON.parse(this.responseText); //décodage données JSON
    for (let i = 0; i <5; i++){ //boucle sur le nombre de produits
      let qs = "#Bear-"+i+ " h2 span.name"; //sélecteur
      document.querySelector(qs).innerHTML=response[i].name; //récupération du nom
      qs = "#Bear-"+i+" .prix span";
      document.querySelector(qs).innerHTML=response[i].price;//récupération du prix
      qs="#Bear-"+i+ " p";
      document.querySelector(qs).innerHTML=response[i].description; //récupération de la description
      qs="#Bear-"+i+ " img";
      let img=document.querySelector(qs);
      img.setAttribute("src",response[i].imageUrl);//récupération de l'image
      qs="#Bear-"+i+ " a";
      let lien=document.querySelector(qs);
      lien.setAttribute("href","perso.html?product_id="+response[i]._id);//récupération de l'id pour afficher le bon produit via le lien
      }
  }
}
request.open("GET", "http://localhost:3000/api/teddies"); //ouverture de la requête GET
request.send(); //envoi de la requête
}
