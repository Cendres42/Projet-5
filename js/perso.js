function affichageFicheProduit(){

// récupération dans la barre d'adresse de l'id-produit
let adresse=window.location.search;
let id=(adresse.replace('?product_id=', ''));
/**
  * @brief fonction permettant de récupérer une fiche produit
  * @param url2 adresse "serveur"
  * @return une promesse qui résolue renverra l'objet ours contenant la fiche
  */
let url2=`http://localhost:3000/api/teddies/${id}`;
let getById = async function(){
  const response = await fetch(url2);
  return response.json();
};
let promise=getById(id);
//insert dans la page chaque élément de la fiche produit renvoyée
promise.then(function(ours){
    let qs = "#Bear h2 span.name";
    document.querySelector(qs).innerHTML=ours.name;
    qs = "#Bear .prix span";
    document.querySelector(qs).innerHTML=ours.price;
    qs="#Bear p";
    document.querySelector(qs).innerHTML=ours.description;
    qs="#Bear img";
    let img=document.querySelector(qs);
    img.setAttribute("src", ours.imageUrl);
    //création et insertion des options couleurs de personnalisation
    for(let u=0;u<ours.colors.length;u++){
      qs="#Bear select";
      let option=document.createElement("option");
      option.innerHTML=ours.colors[u];
      document.querySelector(qs).appendChild(option);
      }
    });
    //au clic sur bouton "Ajouter au panier", appel fonction ajout_p
    let bouton_ajout_panier=document.getElementById("ajout-panier");
    bouton_ajout_panier.addEventListener("click",function(){
      ajout_panier(id)
    });
};

window.addEventListener("load", affichageFicheProduit);
