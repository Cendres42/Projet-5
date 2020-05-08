    // soumission du formulaire par action sur bouton de type submit
    let formValid=document.getElementById("form_1");
    formValid.addEventListener("submit",function(event){
      event.preventDefault();
      if (verifier() == true)
        envoi_commande();
    });

    function verifierTexte(elementName,inputMessage){
      let element=document.getElementById(elementName);
      let msgErreur = document.getElementById(inputMessage);
      if(element.validity.valueMissing){
        msgErreur.innerHTML="Veuillez entrer un nom";
        msgErreur.style.color="red";
        return false;
      }
      else{
        msgErreur.innerHTML="";
        return true;
      }
    }
    //fonction de vérification du formulaire avant validation (en + du HTML)
    function verifier(){
      let valid=true;
        if(verifierTexte("nom","missNom") == false)
        valid = false;

      if (verifierTexte("prenom","missPrenom") == false)
        valid = false;

      if(verifierTexte("adresse","missAdresse") == false)
        valid = false;
      if(verifierTexte("ville","missVille")== false)
      valid = false;
      if (isValid()== false)
        valid = false;
      return valid;
    }

    function isValid() {
      let chaine = document.getElementById("email");
      let msgEmail = document.getElementById("missEmail");
      // regex qui répond à la norme GRFC 5322, améliorée pour autoriser les majuscules
      const resultat = /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(chaine.value);
      if(resultat == false){
        msgEmail.textContent="Veuillez entrer un email valide";
        msgEmail.style.color="red";
        return false;
      }
      else{
        msgEmail.innerHTML="";
        return true;
      }
    }

  // fonction qui envoie la commande si formulaire complet et valide
  function envoi_commande(){
    let nom="";
    let commande ={};
    // création nouvel objet contact
    let contact={};
    contact.firstName=document.getElementById("nom").value;
    contact.lastName =document.getElementById("prenom").value;
    contact.address  =document.getElementById("adresse").value;
    contact.city     =document.getElementById("ville").value;
    contact.email    =document.getElementById("email").value;
    let products=[];
    for (let i=0; i<Panier.count(); i++){
      let product= Panier.get(i);
      // Convertion nom d'id name pour correspondre aux spec.
      product._id = product.id;
      products.push(product);
    }
    commande.products=products;
    commande.contact=contact;
    /**
      * @brief fonction asynchrone qui envoi la commande en POST au serveur
      */
      let url3="http://localhost:3000/api/teddies/order";
      let verifOK = async function(){
        const promesse = await fetch(url3, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          //l'objet commande est envoyé en JSON
          body: JSON.stringify(commande),
        });
        return promesse;
      };
      let promise=verifOK();

      //traitement de la réponse du serveur
      promise.then(promesse => {
          // si la requête a été correctement traitée par le serveur
          if (promesse.ok) {
            //traitement de la réponse JSON
            promesse.json().then(function(reqCommande){
              let id_commande=reqCommande.orderId;
              localStorage.setItem("id_commande", id_commande);
              document.location.href="commande.html";
            });
          }
          // si la requête est arrivée au serveur mais n'a pu être traitée
          else   {
            alert("Une erreur interne est survenue, veuillez contacter le service client");
            throw new Error('Network response was not ok');
          }
        })
        //erreur réseau ? pas de réponse du serveur
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
    }

  // fonction qui construit le panier et calcule le montant de la commande
  window.addEventListener("load", function() {
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
    });
