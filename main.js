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
  * @return une promesse qui résolue renverra le nombre de pdts récupérés
  */
  let load = function(){
    let loadPromise=new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            // vérification serveur a répondu et requête est un succès
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
            request.send();
          });
          return(loadPromise);
        }

/**
  * @brief permet de consulter un des produits chargé depuis le serveur
  * @param  index position de l'élément recherché
  * @return l'un des produits du catalogue
  */
  let get =function(index){
      return(produits[index]);
  }


  /**
    * @brief méthode permettant de récupérer une fiche produit
    * @param id identifiant du produit
    * @return une promesse qui résolue renverra l'objet ours contenant la fiche
    */
  let getById =function(id){
      let getByIdPromise=new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          request.onreadystatechange = function() {
            // vérification serveur a répondu et requête est un succès
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
