
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
      const resultat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(chaine.value);
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
