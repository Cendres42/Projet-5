//Déclaration des variables:
let bouton_ajout_panier=document.getElementById("ajout-panier");
let panier=[];
let liste_produits="";
let nouveau_produit="";
let nouvelle_qte="";


//Boutons d'action:
bouton_ajout_panier.addEventListener("click",ajout_panier);

//fonction d'affichage de l'ours sur lequel l'utilisaeur a cliqué
  var request=new XMLHttpRequest();
  request.onreadystatechange=function (){
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){ //vérification serveur prêt à répondre
      var response=JSON.parse(this.responseText);
      let qs = "#Bear h2 span.name"; //idem fonction affichage produits
      document.querySelector(qs).innerHTML=response.name; //récupération des éléments le concernant
      qs = "#Bear .prix span";
      document.querySelector(qs).innerHTML=response.price;
      qs="#Bear p";
      document.querySelector(qs).innerHTML=response.description;
      qs="#Bear img";
      let img=document.querySelector(qs);
      img.setAttribute("src",response.imageUrl);
      for(let u=0;u<response.colors.length;u++){
        qs="#Bear select";
        let option=document.createElement("option");
        option.innerHTML=response.colors[u];
        document.querySelector(qs).appendChild(option);
      }
    }
  }
  let adresse=window.location.search; //récupération dans la barre d'adresse de l'id-produit
  let identifiant=(adresse.replace('?product_id=', ''));  //récupération dans la barre d'adresse de l'id-produit
  request.open("GET", "http://localhost:3000/api/teddies/"+identifiant); //ouverture de la requête GET pour l'id récupéré
  request.send();//envoi de la requête
  sessionStorage.setItem("identifiant", identifiant);


//function ajout_panier(){

function ajout_panier(){
  panier= JSON.parse(sessionStorage.getItem("liste_produits_panier"));
  if(panier==null){
  panier=[];
  }
  let new_product={};
  new_product.id=identifiant;
  new_product.name=document.querySelector("#Bear h2 span.name").innerHTML;
  new_product.qte=document.getElementById("qt").value;
  new_product.price=document.querySelector("#Bear .prix span").innerHTML;
  let found=0;
  for (let i=0; i<panier.length;i++){
    if(new_product.id==panier[i].id){
      panier[i].qte=parseInt(panier[i].qte, 10);
      new_product.qte=parseInt(new_product.qte, 10);
      panier[i].qte= panier[i].qte+new_product.qte;
      nouvelle_qte=document.querySelector("#panier-"+identifiant+" .qte");
      nouvelle_qte.innerHTML=panier[i].qte;
      found=1;
    }
  }
    if(found==0){
    panier.push(new_product);
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
sessionStorage.setItem("liste_produits_panier", JSON.stringify(panier));
}


//fonction récupération panier
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

window.addEventListener("load", recup_panier());
