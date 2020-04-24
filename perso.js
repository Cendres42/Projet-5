/**
  * @brief objet permettant de manipuler le panier
  * @return l'objet Panier
  */
let Panier = (function() {
    let products=[];

    /**
      * @brief méthode permettant d'ajouter des produits au panier
      * @param  id identitfiant du produit
      * @param name nom du produit
      * @param qty nombre d'unités ajoutées
      */
      let add = function(id,name,qty,price) {
        let newProduct  = {};
        newProduct.id   = id;
        newProduct.name = name;
        newProduct.qty  = qty;
        newProduct.price = price;

        products.push(newProduct);
        console.log(products);
    };

    /**
     * @brief méthode comptant le nbe de produits différents dans le panier
     * @return nombre de produits actuellement dans le panier
     */
     let count = function() {
       return(products.length);
    };

    let display= function(){
      //parcours le panier et affiche chaque élément qu'il contient
      for (let i=0; i<count(); i++){
        let liste_produits=document.getElementById("panier");
        let nouvelle_colonne = document.createElement('tr');
        nouvelle_colonne.setAttribute("id","panier-"+ products[i].id);
        liste_produits.appendChild(nouvelle_colonne);
        let nouveau_produit = document.createElement('td');
        nouveau_produit.setAttribute("class","pdt");
        nouvelle_colonne.appendChild(nouveau_produit);
        nouveau_produit.innerHTML=products[i].name;
        let nouvelle_qte= document.createElement('td');
        nouvelle_qte.setAttribute("class","qte");
        nouvelle_colonne.appendChild(nouvelle_qte);
        nouvelle_qte.innerHTML= products[i].qty;
        }
      };

  /**
    * @brief méthode de recherche d'un produit dans le panier
    */
    let findId = function(id){
      for (let i=0; i<count();i++){
        if(id==products[i].id){
          return ("found");
        }
      }
      return ("notFound");
    };


  /**
    * @brief permet de consulter un des produits du panier
    * @param  position position de l'élément recherché dans le panier
    * @return l'un des produits du panier
    */
    let get = function(position) {
      return(products[position]);
    };

  /**
    * @brief méthode permettant de récupérer les produits du panier
    */
    let load = function(){
      let panier_plein= JSON.parse(sessionStorage.getItem("liste_produits_panier"));
      if (panier_plein==null){
        panier_plein=[];
      }
      for (let i = 0; i < panier_plein.length; i++) {
        products.push( panier_plein[i] );
      }
      display();
    };

    /**
      * @brief méthode de construction du html pour affichage contenu panier
      */

    load();

    /**
      * @brief méthode pour sauvegarder le panier dans session
      */
    let save = function(){
       sessionStorage.setItem("liste_produits_panier", JSON.stringify(products));
     };

      /**
        * @brief méthode refresh qui va effacer panier puis le reconstruire
        */
    let refresh = function(){
      let plop =document.getElementById('panier');
      plop.innerHTML="";
      display();
    }

    };
//fonctions qui seront appelées de l'extérieur de l'objet panier
  return {
    add:   add,
    count: count,
    get:   get,
    save: save,
    refresh: refresh
  };
})();



/*panier[i].qte=parseInt(panier[i].qte, 10);
new_product.qte=parseInt(newProduct.qte, 10);
panier[i].qte= panier[i].qte+new_product.qte;
nouvelle_qte=document.querySelector("#panier-"+newProduct.id+" .qte");
nouvelle_qte.innerHTML=panier[i].qte;*/


function ajout_panier(id){

  let product_id=id;
  let product_name=document.querySelector("#Bear h2 span.name").innerHTML;
  let product_qty=document.getElementById("qt").value;
  let product_price=document.querySelector("#Bear .prix span").innerHTML;

  Panier.add(product_id, product_name, product_qty, product_price);
  Panier.save();
  Panier.refresh();

  }

/*
  let found=0;
  // si le produit est déjà dans le panier modifier la quantité
  for (let i=0; i<panier.length;i++){
    if(new_product.id==panier[i].id){
      panier[i].qte=parseInt(panier[i].qte, 10);
      new_product.qte=parseInt(newProduct.qte, 10);
      panier[i].qte= panier[i].qte+new_product.qte;
      nouvelle_qte=document.querySelector("#panier-"+newProduct.id+" .qte");
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
sessionStorage.setItem("liste_produits_panier", JSON.stringify(panier));*/
