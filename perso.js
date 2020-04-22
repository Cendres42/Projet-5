// création objet panier
// création fonction anonyme
// élements renvoyés dans panier
let Panier = (function() {

    let products=[];

      let add = function(id,name,qty) {
        let newProduct = {};
        newProduct.id   = id;
        newProduct.name = name;
        newProduct.qty  = qty;

        products.push(newProduct);
    };

      let count = function() {
      return(products.length);
    };

    let get = function(position) {
      return(products[position]);
    };

    let load = function(){
      let ours= JSON.parse(sessionStorage.getItem("liste_produits_panier"));
      if (ours==null){
        ours=[];
      }
      ours.forEach(element=>function(element){
        products.push(element)
      });
    };
    load();

  return {
    add:   add,
    count: count,
    get:   get
  };
})();

function ajout_panier(){
  panier= JSON.parse(sessionStorage.getItem("liste_produits_panier"));
  //affectation valeur à panier pour éviter valeur "null"
  if(panier==null){
  panier=[];
  }
  // création d'un objet new_product avec 4 propriétés (variables membres)
  let new_product={};
  new_product.id=identifiant;
  new_product.name=document.querySelector("#Bear h2 span.name").innerHTML;
  new_product.qte=document.getElementById("qt").value;
  new_product.price=document.querySelector("#Bear .prix span").innerHTML;
  let found=0;
  /* vérifier si le produit est déjà dans le panier
  le cas échéant modifier la quantité*/
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
  // dans le cas contraire ajouter le produit et sa quantité au panier
    if(found==0){
      panier.push(new_product);
      liste_produits=document.getElementById("panier");
      // création d'une nouvelle ligne dans la table de produits
      nouvelle_colonne = document.createElement('tr');
      nouvelle_colonne.setAttribute("id","panier-"+identifiant);
      liste_produits.appendChild(nouvelle_colonne);
      // ajout d'une cellule avec le nom du produit
      nouveau_produit = document.createElement('td');
      nouveau_produit.setAttribute("class","pdt");
      nouvelle_colonne.appendChild(nouveau_produit);
      nouveau_produit.innerHTML=new_product.name;
      // ajout d'une cellule avec la quantité
      nouvelle_qte= document.createElement('td');
      nouvelle_qte.setAttribute("class","qte");
      nouvelle_colonne.appendChild(nouvelle_qte);
      nouvelle_qte.innerHTML= new_product.qte;
    }
sessionStorage.setItem("liste_produits_panier", JSON.stringify(panier));
}





 //Déclaration des variables globales:
let bouton_ajout_panier=document.getElementById("ajout-panier");
let panier=[];
let liste_produits="";
let nouveau_produit="";
let nouvelle_qte="";

//Boutons d'action:
bouton_ajout_panier.addEventListener("click",ajout_panier);
