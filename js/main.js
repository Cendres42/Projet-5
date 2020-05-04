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
      let add = function(_id,name,qty,price) {
        let args= arguments.length;
        if (args!==4){
          console.log("appel de add avec un nbe invalide d'arguments")
          return;
        }
        let newProduct  = {};
        newProduct.id   = _id;
        newProduct.name = name;
        newProduct.qty  = qty;
        newProduct.price = price;
        products.push(newProduct);
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
      plop.innerHTML="";
      display();
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

//fonction  d'ajout de produits dans le panier au clic sur "Ajouter au panier"
function ajout_panier(id){

  let product_id=id;
  //Récupération des données saisies par l'utilisateur
  let product_name=document.querySelector("#Bear h2 span.name").innerHTML;
  let product_qty=parseInt(document.getElementById("qt").value,10);
  let product_price=document.querySelector("#Bear .prix span").innerHTML;
  //modification quantité si produit déjà présent dans le panier
  let index=Panier.findId(id);
  if(index!=null){
    let pdt=Panier.get(index)
    let qty=pdt.qty + product_qty;
    Panier.setQty(index,qty);
  }
  // ajout produit et quantité si nouveau produit
  else{
    Panier.add(product_id, product_name, product_qty, product_price);
  }
  // reconstruction puis sauvegarde panier dans cession
  Panier.refresh();
  Panier.save();
}



    // fonction qui construit le panier et calcul le montant de la commande
    function panierCommande(){
      //déclaration des variables
      let totalHT=0;
      let letotalHT="";
      let tva=0;
      let ttc=0;
      let latva="";
      let lettc="";

      let new_product={};
      //récupération du contenu du panier pour préparer le tableau commande
      for (let i=0; i<Panier.count(); i++){
        let new_product=Panier.get(i);
        let panier_commande=document.getElementById("panier_commande");
        let nouvelle_ligne_cmd = document.createElement('tr');
        nouvelle_ligne_cmd.setAttribute("id","panier_commande-"+new_product.id);
        panier_commande.appendChild(nouvelle_ligne_cmd);
        produit_commande = document.createElement('td');
        produit_commande.setAttribute("class","pdt");
        nouvelle_ligne_cmd.appendChild(produit_commande);
        produit_commande.innerHTML=new_product.name;
        let prix= document.createElement('td');
        prix.setAttribute("class","prix");
        nouvelle_ligne_cmd.appendChild(prix);
        new_product.price=parseInt(new_product.price,10);
        prix.innerHTML=new_product.price + " &euro;";
        qte_commande= document.createElement('td');
        qte_commande.setAttribute("class","qt");
        nouvelle_ligne_cmd.appendChild(qte_commande);
        qte_commande.innerHTML= new_product.qty;
        let sous_total= document.createElement('td');
        sous_total.setAttribute("class","st");
        nouvelle_ligne_cmd.appendChild(sous_total);
        let sous_total_value=new_product.qty*new_product.price;
        sous_total.innerHTML=sous_total_value+ " &euro;";
        totalHT=totalHT+sous_total_value;
      }
      //calcul du montant de la commande et sauvegarde des données
        tva=totalHT*0.2;
        ttc=totalHT+tva;
        let nouveau_HT=document.getElementsByClassName("ht")
        nouveau_HT[0].innerHTML=totalHT+ " &euro;";
        latva=document.getElementsByClassName("tva");
        latva[0].innerHTML=tva+ " &euro;";
        lettc=document.getElementsByClassName("ttc");
        lettc[0].innerHTML=ttc+ " &euro;";
        localStorage.setItem("ttc", ttc);
    }

    // fonction qui envoie la commande si formulaire complet et valide
    function envoi_commande(event){
      let nom="";
      let commande ={};
      // création nouvel objet contact
      let contact={};
      contact.firstName=document.getElementById("nom").value;
      contact.lastName=document.getElementById("prenom").value;
      contact.address=document.getElementById("adresse").value;
      contact.city=document.getElementById("ville").value;
      contact.email=document.getElementById("email").value;
      let products=[];
      for (let i=0; i<Panier.count(); i++){
        let product= Panier.get(i);
        // Convertion nom d'id name pour correspondre aux spec.
        product._id = product.id;
        products.push(product);
      }
      commande.products=products;
      commande.contact=contact;

      let url3="http://localhost:3000/api/teddies/order";
      let verifOK = async function(){
        const promesse = await fetch(url3, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commande),
        });
        return promesse;
      };
      let reqCommande = verifOK().then(promesse => {
          if (!promesse.ok) {
            alert("Une erreur interne est survenue, veuillez contacter le service client");
            throw new Error('Network response was not ok');
          }
          return promesse.json();
        });
      //insert dans la page chaque élément de la fiche produit renvoyée
      reqCommande.then(function(reqCommande){
        let id_commande=reqCommande.orderId;
        localStorage.setItem("id_commande", id_commande);
        document.location.href="commande.html";
      });
}

    function commande_valide(){
        document.querySelector("#commande span").innerHTML=localStorage.getItem("id_commande");
        document.querySelector("#montant span").innerHTML=localStorage.getItem("ttc");
    }
