let bouton_ajout_panier=document.getElementById("ajout-panier");
let panier=[];
let liste_produits="";
let nouveau_produit="";
let nouvelle_qte="";
let nom="";
let prix="";
let sous_total_value=0;
let sous_total="";
let totalHT=0;
let letotalHT="";
let tva=0;
let ttc=0;
let latva="";
let nouveau_tva="";
let lettc="";
let nouveau_ttc="";

let aller_panier=document.getElementById("commande");
aller_panier.addEventListener("click",panier_commande);

function panier_commande(){
  panier= JSON.parse(sessionStorage.getItem("liste_produits_panier"));
  identifiant=(sessionStorage.getItem("identifiant"));
  if(panier==null){
  panier=[];
  }
  let new_product={};
  for (let i=0; i<panier.length; i++){
    let new_product=panier[i];
    let panier_commande=document.getElementById("panier_commande");
    let nouvelle_ligne_cmd = document.createElement('tr');
    nouvelle_ligne_cmd.setAttribute("id","panier_commande-"+identifiant);
    panier_commande.appendChild(nouvelle_ligne_cmd);
    produit_commande = document.createElement('td');
    produit_commande.setAttribute("class","pdt");
    nouvelle_ligne_cmd.appendChild(produit_commande);
    produit_commande.innerHTML=new_product.name;
    prix= document.createElement('td');
    prix.setAttribute("class","prix");
    nouvelle_ligne_cmd.appendChild(prix);
    new_product.price=parseInt(new_product.price,10);
    prix.innerHTML=new_product.price;
    qte_commande= document.createElement('td');
    qte_commande.setAttribute("class","qt");
    nouvelle_ligne_cmd.appendChild(qte_commande);
    new_product.qte=parseInt(new_product.qte,10);
    qte_commande.innerHTML= new_product.qte;
    sous_total= document.createElement('td');
    sous_total.setAttribute("class","st");
    nouvelle_ligne_cmd.appendChild(sous_total);
    sous_total_value=new_product.qte*new_product.price;
    sous_total.innerHTML=sous_total_value;
    totalHT=totalHT+sous_total_value;
  }
    tva=totalHT*0.2;
    ttc=totalHT+tva;
    letotalHT=document.getElementById("totalHT");
    nouveau_HT=document.createElement('td');
    nouveau_HT.setAttribute("class","ht");
    letotalHT.appendChild(nouveau_HT);
    nouveau_HT.innerHTML=totalHT;
    latva=document.getElementById("tva");
    nouveau_tva=document.createElement('td');
    nouveau_tva.setAttribute("class","tva");
    latva.appendChild(nouveau_tva);
    nouveau_tva.innerHTML=tva;
    lettc=document.getElementById("ttc");
    nouveau_ttc=document.createElement('td');
    nouveau_ttc.setAttribute("class","ttc");
    lettc.appendChild(nouveau_ttc);
    nouveau_ttc.innerHTML=ttc;
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
