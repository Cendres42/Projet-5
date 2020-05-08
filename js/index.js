window.addEventListener("load", function(){
/**
  * @brief fonction permettant de charger les produits du catalogue
  * @return une promesse contenant le tableau de produits au format json
  */
  let url1="http://localhost:3000/api/teddies/";
  let load = async function(){
    const response = await fetch(url1);
    return response.json();
  };
  let promise=load();
  //résolution de la promesse et récupération du tableau de produit
  promise.then(function(listeOurs){
  //insert dans la page chaque produit renvoyé par le catalogue
  for (let i=0; i<listeOurs.length;i++){
    //let ours =Produits.get(i);
    let ours=listeOurs[i];

    //création d'un élément conteneur pour l'un des produits
    let bears = document.getElementById("bears");
    let new_bear=document.createElement('div');
    new_bear.setAttribute("class","bear");
    bears.appendChild(new_bear);

    //création d'un élément titre pour le nom de l'ours
    let new_titre=document.createElement('h2');
    new_titre.innerHTML="Ours en peluche "+ours.name;
    new_bear.appendChild(new_titre);

    //création d'un élément structurant contenant les éléments du produit
    let new_produit=document.createElement('div');
    new_produit.setAttribute("class","produit");
    new_bear.appendChild(new_produit);
    //création d'un élément structurant contenant image
    let new_cadre_img=document.createElement('div');
    new_cadre_img.setAttribute("class", "cadre-img");
    new_produit.appendChild(new_cadre_img);
    //création d'un élément structurant contenant prix et description
    let new_cadre_pdt=document.createElement('div');
    new_cadre_pdt.setAttribute("class", "cadre-pdt");
    new_produit.appendChild(new_cadre_pdt);

    //création d'un élément avec l'image du produit et lien vers fiche
    let new_img=document.createElement('a');
    new_img.setAttribute("href","perso.html?product_id="+ours._id);
    new_cadre_img.appendChild(new_img);
    let new_source=document.createElement("img");
    new_source.setAttribute("src",ours.imageUrl);
    new_img.appendChild(new_source);

    //création d'un élément contenant la description du produit
    let new_description=document.createElement('p')
    new_cadre_pdt.appendChild(new_description);
    new_description.innerHTML=ours.description;

    //création d'un élément contenant le prix du produit
    let new_prix=document.createElement('div');
    new_prix.setAttribute("class", "prix");
    new_cadre_pdt.appendChild(new_prix);
    new_prix.innerHTML="Prix : "+ours.price+"&nbsp;&euro;";
    }
  });
});
