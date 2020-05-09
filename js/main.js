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
      * @param price prix unitaire du produit ajouté
      */
      let add = function(id,name,qty,price) {
        let args= arguments.length;
        if (args!==4){
          console.log("appel de add avec un nbe invalide d'arguments")
          return;
        }
        //modification quantité si produit déjà présent dans le panier
        let index=findId(id);
        if(index!=null){
          let pdt=get(index)
          let new_qty=pdt.qty + qty;
          setQty(index,new_qty);
        }
        // ajout produit et quantité si nouveau produit
        else{
          let newProduct  = {};
          newProduct.id   = id;
          newProduct.name = name;
          newProduct.qty  = qty;
          newProduct.price = price;
          products.push(newProduct);
        }
        // reconstruction puis sauvegarde panier dans cession
        refresh();
        save();
      };

    /**
      * @brief méthode vidant le panier
      */
     let clear=function(){
       products=[];
     };

    /**
      * @brief méthode comptant le nbe de produits différents dans le panier
      * @return nombre de produits actuellement dans le panier
      */
    let count = function() {
        return(products.length);
    };


    /**
      * @brief méthode affichant le résumé du panier en haut de page
      * @return rien si panier vide
      */
    let display= function(){
        let liste_produits=document.getElementById("panier");
        if(liste_produits==null){
          return;
        }
      //parcours le panier et affiche chaque élément qu'il contient
        for (let i=0; i<count(); i++){
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
    * @param id id du produit
    * @return position du produit dans le panier, ou null si non trouvé
    */
    let findId = function(id){
      for (let position=0; position<count();position++){
        if(id==products[position].id){
          return (position);
        }
      }
      return (null);
    };

  /**
    * @brief permet de consulter un des produits du panier
    * @param  position position de l'élément recherché dans le panier
    * @return l'un des produits du panier
    */
    let get = function(position) {
      if(position>=products.length){
        return(null);
      }
      return(products[position]);
    };

  /**
    * @brief méthode permettant de récupérer les produits du panier
    */
    let load = function(){
      let panier_plein= JSON.parse(localStorage.getItem("liste_produits_panier"));
      if (panier_plein==null){
        panier_plein=[];
      }
      for (let i = 0; i < panier_plein.length; i++) {
        products.push( panier_plein[i] );
      }
      display();
    };

    load();

    /**
      * @brief méthode qui va effacer panier puis le reconstruire
      */
    let refresh = function(){
      let plop =document.getElementById('panier');
      if(plop !==null)
      {
      plop.innerHTML="";
      display();
      }
    };

    /**
      * @brief méthode pour sauvegarder le panier dans session
      */
    let save = function(){
       localStorage.setItem("liste_produits_panier", JSON.stringify(products));
     };

    /**
      * @brief méthode modifiant la quantité si produit déjà présent dans panier
      * @param position position du produit dans le produits
      * @param newQty nouvelle quantité après addition quantité ajoutée
      */
    let setQty=function(position,newQty){
      products[position].qty=newQty;
    };

//fonctions qui seront appelées de l'extérieur de l'objet panier
  return {
    add:   add,
    count: count,
    get:   get,
    save: save,
    load:load,
    refresh: refresh,
    setQty:setQty,
    findId:findId,
    clear: clear,
    display:display
  };
})();
