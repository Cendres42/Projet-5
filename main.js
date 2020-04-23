/**
  * @brief objet permettant de manipuler le catalogue des produits
  * @return l'objet Produits
  */
  let Produits = (function() {
  let produits=[];

  /**
    * @brief méthode permettant de compter le nombre de produits
    * @return la longueur du tableau de produits
    */
  let count = function() {
  return(produits.length);
  };

/**
  * @brief méthode permettant de charger les produits du catalogue
  * @return une promesse qui résolue renverra la longueur du tableau pdts
  */
  let load = function(){
    let loadPromise=new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            // vérification serveur prêt à répondre
            if(this.readyState==XMLHttpRequest.DONE && this.status==200){
              let tousLesOurs=(JSON.parse(this.responseText));
              // création tableau ours si inexistant
              if (tousLesOurs==null){
                tousLesOurs=[];
              }
              // insert dans tableau produits chaque produit renvoyé par serveur
              for (let i=0; i<tousLesOurs.length;i++){
                let ours=tousLesOurs[i];
                produits.push(ours);
              }
              resolve(produits.length);
            }
            }
            // envoi de la requête au serveur
            request.open("GET", "http://localhost:3000/api/teddies/");
            request.send();e
          });
          return(loadPromise);
        }

/**
  * @brief méthode permettant de
  * @param
  * @return
  */
  let get =function(index){
      return(produits[index]);
  }


  /**
    * @brief méthode permettant de récupérer une fiche produit
    * @param id du produit
    * @return une promesse qui résolue renverra l'objet ours contenant la fiche
    */
  let getById =function(id){
      let getByIdPromise=new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          request.onreadystatechange = function() {
            // vérification serveur prêt à répondre
              if(this.readyState==XMLHttpRequest.DONE && this.status==200){
                let ours=(JSON.parse(this.responseText));
                resolve(ours);
              }
            }
            //envoi de la requête au serveur en précisant id du produit
            request.open("GET", "http://localhost:3000/api/teddies/"+id);
            request.send();
          });
          return(getByIdPromise);
        }

        return {
        count: count,
        load:   load,
        get: get,
        getById: getById
      };
    })();


/*fonction récupération panier
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
}*/

/*window.addEventListener("load", function(){
  let Products=new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    // vérification serveur prêt à répondre
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){
    //résolution de la promesse
      resolve(JSON.parse(this.responseText));
    }
  }
    request.open("GET", "http://localhost:3000/api/teddies/");
    request.send();// envoi de la requête
  });
//comportement quand la promesse est résolue
  Products.then(allProductsList);

});*/
