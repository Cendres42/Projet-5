    let Produits = (function() {
        let produits=[];

        let count = function() {
          return(produits.length);
        };

        let load = function(){
          let loadPromise=new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
            // vérification serveur prêt à répondre
            if(this.readyState==XMLHttpRequest.DONE && this.status==200){
              let tousLesOurs=(JSON.parse(this.responseText));
              if (tousLesOurs==null){
                tousLesOurs=[];
              }
              for (let i=0; i<tousLesOurs.length;i++){
                let ours=tousLesOurs[i];
                produits.push(ours);
              }
              resolve(produits.length);
            }
            }
            request.open("GET", "http://localhost:3000/api/teddies/");
            request.send();// envoi de la requête
          });
          return(loadPromise);
        }
        let get =function(index){
          return(produits[index]);
        }

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
            request.open("GET", "http://localhost:3000/api/teddies/"+id);
            request.send();// envoi de la requête
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
