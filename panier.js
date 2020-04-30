
    // soumission du formulaire par action sur bouton de type submit
    let formValid=document.getElementById("form_1");
    formValid.addEventListener("submit",verifier);
    //fonction de vérification du formulaire avant validation (en + du HTML)
    function verifier(event){
      event.preventDefault();
      let valid=true;
      let nom = document.getElementById('nom');
      let missNom = document.getElementById('missNom');
      if(nom.validity.valueMissing){
        missNom.innerHTML="Veuillez entrez un nom";
        missNom.style.color="red";
        valid=false;
      }
      else{
        missNom.innerHTML="";
      }
      let prenom = document.getElementById('prenom');
      let missPrenom = document.getElementById('missPrenom');
      if(prenom.validity.valueMissing){
        missPrenom.textContent="Veuillez entrez un prénom";
        missPrenom.style.color="red";
        valid=false;
      }
      else{
        missPrenom.innerHTML="";
      }
      let adresse = document.getElementById('adresse');
      let missAdresse = document.getElementById('missAdresse');
      if(adresse.validity.valueMissing){
        missAdresse.textContent="Veuillez entrez une adresse postale valide";
        missAdresse.style.color="red";
        valid=false;
      }
      else{
        missAdresse.innerHTML="";
      }
      let ville = document.getElementById('ville');
      let missVille = document.getElementById('missVille');
      if(ville.validity.valueMissing){
        missVille.textContent="Veuillez entrez un nom de ville";
        missVille.style.color="red";
        valid=false;
      }
      else{
        missVille.innerHTML="";
      }
      let email = document.getElementById('email');
      let missEmail = document.getElementById('missEmail');
      if(email.validity.valueMissing){
        missEmail.textContent="Veuillez entrez un email valide";
        missEmail.style.color="red";
        valid=false;
      }
      else{
        missEmail.innerHTML="";
      }
      if(valid==true){
        envoi_commande();
      }
  }
