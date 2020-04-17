//fonction d'affichage des produits

let response=[];

function affichage_produits(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(this.readyState==XMLHttpRequest.DONE && this.status==200){ //vérification serveur prêt à répondre
    response=JSON.parse(this.responseText);
    //décodage données JSON
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

//fonction création panier
function recup_panier(){
  panier= JSON.parse(sessionStorage.getItem("liste_produits_panier"));
  identifiant=(sessionStorage.getItem("identifiant"));
  if(panier==null){
  panier=[];
  }
  for (let i=0; i<panier.length; i++){
    let new_product=panier[i];
    liste_produits=document.getElementById("panier");
    nouvelle_colonne = document.createElement('tr');
    nouvelle_colonne.setAttribute("id","panier-"+identifiant);
    liste_produits.appendChild(nouvelle_colonne);
    nouveau_produit = document.createElement('td');
    nouveau_produit.setAttribute("class","pdt");
    nouvelle_colonne.appendChild(nouveau_produit);
    nouveau_produit.innerHTML=new_product.name;
    nouvelle_qte= document.createElement('td');
    nouvelle_qte.setAttribute("class","qte");
    nouvelle_colonne.appendChild(nouvelle_qte);
    nouvelle_qte.innerHTML= new_product.qte;
    }
}
