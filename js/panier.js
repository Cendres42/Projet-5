
    // soumission du formulaire par action sur bouton de type submit
    let formValid=document.getElementById("form_1");
    formValid.addEventListener("submit",function(event){
      event.preventDefault();
      if (verifier() == true)
        envoi_commande();
    });
    //fonction de vérification du formulaire avant validation (en + du HTML)
    function verifier(){
      let valid=true;
      let nom = document.getElementById('nom');
      let missNom = document.getElementById('missNom');
      if(nom.validity.valueMissing){
        missNom.innerHTML="Veuillez entrer un nom";
        missNom.style.color="red";
        valid=false;
      }
      else{
        missNom.innerHTML="";
      }
      let prenom = document.getElementById('prenom');
      let missPrenom = document.getElementById('missPrenom');
      if(prenom.validity.valueMissing){
        missPrenom.textContent="Veuillez entrer un prénom";
        missPrenom.style.color="red";
        valid=false;
      }
      else{
        missPrenom.innerHTML="";
      }
      let adresse = document.getElementById('adresse');
      let missAdresse = document.getElementById('missAdresse');
      if(adresse.validity.valueMissing){
        missAdresse.textContent="Veuillez entrer une adresse postale valide";
        missAdresse.style.color="red";
        valid=false;
      }
      else{
        missAdresse.innerHTML="";
      }
      let ville = document.getElementById('ville');
      let missVille = document.getElementById('missVille');
      if(ville.validity.valueMissing){
        missVille.textContent="Veuillez entrer un nom de ville";
        missVille.style.color="red";
        valid=false;
      }
      else{
        missVille.innerHTML="";
      }
      let email = document.getElementById('email');
      let missEmail = document.getElementById('missEmail');
      if(email.validity.valueMissing){
        missEmail.textContent="Veuillez entrer un email valide";
        missEmail.style.color="red";
        valid=false;
      }
      else{
        missEmail.innerHTML="";
      }
      return(valid);
  }
