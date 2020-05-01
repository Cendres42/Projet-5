let testOk=0;
let testPasOk=0;

//fonction de test d'ajout d'un produit au panier
function testAdd1() {
  // Efface contenu du panier
  Panier.clear();
  //test ajout objet complet
  let testAddResult1=document.getElementById("testAdd1");
  Panier.add("idone","Calinours",2,1000);
  Panier.save();
  let panier_sauvegarde = JSON.parse(localStorage.getItem("liste_produits_panier"));
  if ((panier_sauvegarde[0].id!== "idone")|| (panier_sauvegarde[0].name!== "Calinours") || (panier_sauvegarde[0].qty !== 2) || (panier_sauvegarde[0].price!== 1000)){
    testAddResult1.innerHTML='Simple add failed!';
    testPasOk++;
  }
  else{
    testAddResult1.innerHTML='Simple add success!!!';
    testOk++;
  }
};

function testAdd2() {
    // Efface contenu du panier
    Panier.clear();
    //	Test ajout objet incomplet
    let testAddResult2=document.getElementById("testAdd2");
    Panier.add("idone","Calinours",2);
    Panier.save();
    let panier_sauvegarde = JSON.parse(localStorage.getItem("liste_produits_panier"));
    if (panier_sauvegarde.length!== 0) {
      testAddResult2.innerHTML='Incomplet add failed!';
      testPasOk++;
     }
      else{
        testAddResult2.innerHTML='Incomplet add success!!!';
        testOk++;
      }
    };

function testAdd3() {
    // Efface contenu du panier
    Panier.clear();
    //	Test ajout objet vide
    let testAddResult3=document.getElementById("testAdd3");
    Panier.add("");
    Panier.save();
    let panier_sauvegarde = JSON.parse(localStorage.getItem("liste_produits_panier"));
    if (panier_sauvegarde.length!== 0) {
      testAddResult3.innerHTML='Void add failed!';
      testPasOk++;
   }
    else{
      testAddResult3.innerHTML='Void add success!!!';
      testOk++;
    }

};

function testAdd4() {
  // Efface contenu du panier
  Panier.clear();
  //Test ajout objet avec trop de paramètres
  let testAddResult4=document.getElementById("testAdd4");
  Panier.add("idone","Calinours",2,1000,"plop");
  Panier.save();
  let panier_sauvegarde = JSON.parse(localStorage.getItem("liste_produits_panier"));
  if (panier_sauvegarde.length!== 0) {
    testAddResult4.innerHTML='Toofull add failed!';
    testPasOk++;
 }
  else{
    testAddResult4.innerHTML='Toofull add success!!!';
    testOk++;
  }
};

//Test de la méthode count comptant le nbe de produits différents dans le panier
function testCount1(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testCount1=document.getElementById("testCount1");
    Panier.add("idone","Calinours",2,1000);
    let longueur=Panier.count();
    if (longueur!== 1){
      testCount1.innerHTML='Simple count failed!';
      testPasOk++;
    }
    else{
      testCount1.innerHTML='Simple count success!!!';
      testOk++;
    }
};

function testCount2(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testCount2=document.getElementById("testCount2");
    for (let i=0; i<1000;i++){
    Panier.add("idone","Calinours",2,1000);
    }
    let longueur=Panier.count();
    if (longueur!== 1000){
      testCount2.innerHTML='Big count failed!';
      testPasOk++;
    }
    else{
      testCount2.innerHTML='Big count success!!!';
      testOk++;
    }
};

function testCount3(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testCount3=document.getElementById("testCount3");
    let longueur=Panier.count();
    if (longueur!== 0){
      testCount3.innerHTML='Empty count failed!';
      testPasOk++;
    }
    else{
      testCount3.innerHTML='Empty count success!!!';
      testOk++;
    }
};

//Test de la méthode findId qui récupère la position du produit dans le panier
function testFindId1(){
    // Efface contenu du panier
    Panier.clear();
    let testFindId1=document.getElementById("testFindId1");
    Panier.add("idone","Calinours",2,1000);
    let position=Panier.findId("idone");
    if (position!== 0){
      testFindId1.innerHTML='Simple findId failed!';
      testPasOk++;
    }
    else{
      testFindId1.innerHTML='Simple findId success!!!';
      testOk++;
    }
};

function testFindId2(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testFindId2=document.getElementById("testFindId2");
    Panier.add("idone","Calinours",2,1000);
    Panier.add("idtwo","Calinours",2,1000);
    Panier.add("idthree","Calinours",2,1000);
    let position=Panier.findId("idtwo");
    if (position!== 1){
      testFindId2.innerHTML='Middle findId failed!';
      testPasOk++;
    }
    else{
      testFindId2.innerHTML='Middle findId success!!!';
      testOk++;
    }
};

function testFindId3(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testFindId3=document.getElementById("testFindId3");
    Panier.add("idone","Calinours",2,1000);
    Panier.add("idtwo","Calinours",2,1000);
    Panier.add("idthree","Calinours",2,1000);
    let position=Panier.findId("idplop");
    if (position!== null){
      testFindId3.innerHTML='Empty findId failed!';
      testPasOk++;
    }
    else{
      testFindId3.innerHTML='Empty findId success!!!';
      testOk++;
    }
};

//Test de la méthode get qui récupère un produit à partir de sa position
function testGet1(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testGet1=document.getElementById("testGet1");
    Panier.add("idone","Calinours",2,1000);
    let produit=Panier.get(0);
    if ((produit.id!== "idone")|| (produit.name!== "Calinours") || (produit.qty !== 2) || (produit.price!== 1000)){
      testGet1.innerHTML='Simple get failed!';
      testPasOk++;
    }
    else{
      testGet1.innerHTML='Simple get success!!!';
      testOk++;
    }
};

function testGet2(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testGet2=document.getElementById("testGet2");
    Panier.add("idone","Bisounours",3,800);
    Panier.add("idtwo","Calinours",2,1000);
    Panier.add("idthree","Nours",1,1020);
    let produit=Panier.get(1);
    if ((produit.id!== "idtwo")|| (produit.name!== "Calinours") || (produit.qty !== 2) || (produit.price!== 1000)){
      testGet2.innerHTML='Middle get failed!';
      testPasOk++;
    }
    else{
      testGet2.innerHTML='Middle get success!!!';
      testOk++;
    }
};

function testGet3(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
    let testGet3=document.getElementById("testGet3");
    Panier.add("idone","Calinours",2,1000);
    Panier.add("idtwo","Calinours",2,1000);
    Panier.add("idthree","Calinours",2,1000);
    let produit=Panier.get(3);
    if (produit!== null){
      testGet3.innerHTML='Empty get failed!';
      testPasOk++;
    }
    else{
      testGet3.innerHTML='Empty get success!!!';
      testOk++;
    }
};

//Test de la méthode setQty qui modifie la quantité dans le panier
function testsetQty1(){
  // Efface contenu du panier
  Panier.clear();
  //ajout objet complet
  let testsetQty1=document.getElementById("testsetQty1");
  Panier.add("idone","Calinours",2,1000);
  Panier.setQty(0, 5);
  let ours=Panier.get(0);
  if (ours.qty!== 5){
      testsetQty1.innerHTML='Simple setQty failed!';
      testPasOk++;
    }
    else{
      testsetQty1.innerHTML='Simple setQty success!!!';
      testOk++;
    }
};

function testsetQty2(){
  // Efface contenu du panier
  Panier.clear();
  //ajout objet complet
  let testsetQty2=document.getElementById("testsetQty2");
  Panier.add("idone","Bisounours",1, 800);
  Panier.add("idtwo","Calinours",1, 1000);
  Panier.add("idthree","Nours",1, 1020);
  Panier.setQty(1,5);
  if ((Panier.get(0).qty !== 1) || (Panier.get(1).qty !== 5) || (Panier.get(2).qty !== 1)){
      testsetQty2.innerHTML='Middle setQty failed!';
      testPasOk++;
    }
    else{
      testsetQty2.innerHTML='Middle setQty success!!!';
      testOk++;
    }
};

function testLoad1() {
  // Efface contenu du panier
  Panier.clear();
  //test ajout objet complet
  let testLoad1=document.getElementById("testLoad1");
  Panier.add("idone","Calinours",2,1000);
  Panier.save();
  Panier.clear();
  Panier.load();
  Panier.get(0)
  if ((Panier.get(0).id!== "idone")|| (Panier.get(0).name!== "Calinours") || (Panier.get(0).qty !== 2) || (Panier.get(0).price!== 1000)){
    testLoad1.innerHTML='Simple load failed!';
    testPasOk++;
  }
  else{
    testLoad1.innerHTML='Simple load success!!!';
    testOk++;
  }
};


function testLoad2() {
  Panier.clear();
  let testLoad2=document.getElementById("testLoad2");
  let testData = [{id:"idone", name:"Bisounours", qty:2, price:800},
                  {id:"idtwo", name:"Calinours", qty:3, price:1000},
                  {id:"idthree", name:"Nours", qty:1, price:1100}
                ];
  for (let i = 0; i < testData.length; i++){
    Panier.add(testData[i].id, testData[i].name, testData[i].qty, testData[i].price);
  }
  Panier.save();
  Panier.clear();
  Panier.load();
  for (let i = 0; i < testData.length; i++){
    let load = Panier.get(i);
    if ((load.id !== testData[i].id) || (load.name !== testData[i].name) || (load.qty !== testData[i].qty) || (load.price !== testData[i].price)){
    testLoad2.innerHTML='Middle load failed!';
    testPasOk++;
    }
    else{
      testLoad2.innerHTML='Middle load success!!!';
      testOk++;
    }
  }
};

function testLoad3() {
  // Efface contenu du panier
  localStorage.removeItem("liste_produits_panier");
  //test ajout objet complet
  let testLoad3=document.getElementById("testLoad3");
  Panier.clear();
  Panier.load();
  if (Panier.count()!==0){
    testLoad3.innerHTML='Empty load failed!';
    testPasOk++;
  }
  else{
    testLoad3.innerHTML='Empty load success!!!';
    testOk++;
  }
};

function testDisplay1(){
  let testDisplay1=document.getElementById("testDisplay1");
  let panier=document.getElementById("panier");
  panier.innerHTML="";
  Panier.clear();
  Panier.add("idone","Calinours",2,1000);
  Panier.save();
  Panier.display();
  let valide=true;
      let ligne=document.querySelectorAll('#panier tr');
      let element=ligne[0].querySelectorAll('td');
        if(Panier.count()!==ligne.length){
          valide=false;
        }
        if(ligne[0].getAttribute("id")!==("panier-"+ Panier.get(0).id)){
          valide=false;
        }
        if(element.length!==2){
          valide=false;
        }
        if(element[0].getAttribute("class")!==("pdt")){
          valide=false;
        }
        if(element[0].innerHTML!==Panier.get(0).name){
          valide=false;
        }
        if(element[1].getAttribute("class")!==("qte")){
          valide=false;
        }
        if(element[1].innerHTML!=Panier.get(0).qty){
          valide=false;
        }
        if (valide==false){
          testDisplay1.innerHTML="Simple Display failed";
          testPasOk++;
        }
        else{
          testDisplay1.innerHTML="Simple Display success";
          testOk++;
        }
};

function testDisplay2(){
  let testDisplay2=document.getElementById("testDisplay2");
  let panier=document.getElementById("panier");
  panier.innerHTML="";
  Panier.clear();
  Panier.add("idone","Calinours",2,1000);
  Panier.add("idtwo","Calinours",1, 1000);
  Panier.add("idthree","Nours",1, 1020);
  Panier.save();
  Panier.display();
  let valide=true;
  let ligne=document.querySelectorAll('#panier tr');
  if(Panier.count()!==ligne.length){
    valide=false;
  }
  for (let i=0; i<Panier.count(); i++){
      let element=ligne[i].querySelectorAll('td');
        if(ligne[i].getAttribute("id")!==("panier-"+ Panier.get(i).id)){
        valide=false;
        }
        if(element.length!==2){
          valide=false;
        }
        if(element[0].getAttribute("class")!==("pdt")){
          valide=false;
        }
        if(element[0].innerHTML!==Panier.get(i).name){
          valide=false;
        }
        if(element[1].getAttribute("class")!==("qte")){
          valide=false;
        }
        if(element[1].innerHTML!=Panier.get(i).qty){
          valide=false;
        }
      }
        if (valide==false){
          testDisplay2.innerHTML="Simple Display failed";
          testPasOk++;
        }
        else{
          testDisplay2.innerHTML="Simple Display success";
          testOk++;
        }
};

function testDisplay3(){
  let testDisplay3=document.getElementById("testDisplay3");
  let panier=document.getElementById("panier");
  panier.setAttribute("id", "panierInactif");
  panier.innerHTML="";
  Panier.clear();
  Panier.add("idone","Calinours",2,1000);
  Panier.display();
  if (panier.innerHTML!==""){
    testDisplay3.innerHTML="Empty Display failed";
    testPasOk++;
  }
  else{
    testDisplay3.innerHTML="Empty Display success";
    testOk++;
  }
  panier.setAttribute("id", "panier");
}


function testRefresh1(){
  let testRefresh1=document.getElementById("testRefresh1");
  let panier=document.getElementById("panier");
  Panier.clear();
  Panier.add("idone","Calinours",2,1000);
  Panier.save();
  Panier.refresh();
  let valide=true;
      let ligne=document.querySelectorAll('#panier tr');
      let element=ligne[0].querySelectorAll('td');
        if(Panier.count()!==ligne.length){
          valide=false;
        }
        if(ligne[0].getAttribute("id")!==("panier-"+ Panier.get(0).id)){
          valide=false;
        }
        if(element.length!==2){
          valide=false;
        }
        if(element[0].getAttribute("class")!==("pdt")){
          valide=false;
        }
        if(element[0].innerHTML!==Panier.get(0).name){
          valide=false;
        }
        if(element[1].getAttribute("class")!==("qte")){
          valide=false;
        }
        if(element[1].innerHTML!=Panier.get(0).qty){
          valide=false;
        }
        if (valide==false){
          testRefresh1.innerHTML="Simple Refresh failed";
          testPasOk++;
        }
        else{
          testRefresh1.innerHTML="Simple Refresh success";
          testOk++;
        }
}

function testRefresh2(){
  let testRefresh2=document.getElementById("testRefresh2");
  let panier=document.getElementById("panier");
  Panier.clear();
  Panier.add("idone","Calinours",2,1000);
  Panier.add("idtwo","Calinours",1, 1000);
  Panier.add("idthree","Nours",1, 1020);
  Panier.save();
  Panier.refresh();
  let valide=true;
  let ligne=document.querySelectorAll('#panier tr');
  if(Panier.count()!==ligne.length){
    valide=false;
  }
  for (let i=0; i<Panier.count(); i++){
      let element=ligne[i].querySelectorAll('td');
        if(ligne[i].getAttribute("id")!==("panier-"+ Panier.get(i).id)){
        valide=false;
        }
        if(element.length!==2){
          valide=false;
        }
        if(element[0].getAttribute("class")!==("pdt")){
          valide=false;
        }
        if(element[0].innerHTML!==Panier.get(i).name){
          valide=false;
        }
        if(element[1].getAttribute("class")!==("qte")){
          valide=false;
        }
        if(element[1].innerHTML!=Panier.get(i).qty){
          valide=false;
        }
      }
        if (valide==false){
          testRefresh2.innerHTML="Middle Refresh failed";
          testPasOk++;
        }
        else{
          testRefresh2.innerHTML="Middle Refresh success";
          testOk++;
        }
};

function testSave(){
  let testSave=document.getElementById("testSave");
  localStorage.removeItem("liste_produits_panier");
  Panier.add("idone","Calinours",2,1000);
  Panier.save();
  let panier_sauvegarde = JSON.parse(localStorage.getItem("liste_produits_panier"));
  if ((panier_sauvegarde[0].id!== "idone")|| (panier_sauvegarde[0].name!== "Calinours") || (panier_sauvegarde[0].qty !== 2) || (panier_sauvegarde[0].price!== 1000)){
    testSave.innerHTML='Simple save failed!';
    testPasOk++;
  }
  else{
    testSave.innerHTML='Simple save success!!!';
    testOk++;
  }
}

function testClear(){
  let testClear=document.getElementById("testClear");
  Panier.add("idone","Calinours",2,1000);
  Panier.clear();
  if (Panier.get(0)!== null){
    testClear.innerHTML='Simple clear failed!';
    testPasOk++;
  }
  else{
    testClear.innerHTML='Simple clear success!!!';
    testOk++;
  }
}

function testAjoutPanier1(){
  let testAjoutPanier1=document.getElementById("testAjoutPanier1")
  Panier.clear();
  localStorage.removeItem("liste_produits_panier");
  ajout_panier("idone");
  let panier_sauvegarde = JSON.parse(localStorage.getItem("liste_produits_panier"));
  if ((panier_sauvegarde[0].name!== "Calinours") || (panier_sauvegarde[0].qty !== 2) || (panier_sauvegarde[0].price!= 1000)){
    testAjoutPanier1.innerHTML='Simple ajout_panier failed!';
    testPasOk++;
  }
  else{
    testAjoutPanier1.innerHTML='Simple ajout_panier success!!!';
    testOk++;
  }
}

function testAjoutPanier2(){
  let testAjoutPanier2=document.getElementById("testAjoutPanier2")
  Panier.clear();
  localStorage.removeItem("liste_produits_panier");
  Panier.add("idone","Calinours",2,1000);
  ajout_panier("idone");
  let panier_sauvegarde = JSON.parse(localStorage.getItem("liste_produits_panier"));
  if ((panier_sauvegarde[0].name!== "Calinours") || (panier_sauvegarde[0].qty !== 4) || (panier_sauvegarde[0].price!= 1000)){
    testAjoutPanier2.innerHTML='Middle ajout_panier failed!';
    testPasOk++;
  }
  else{
    testAjoutPanier2.innerHTML='Middle ajout_panier success!!!';
    testOk++;
  }
};

function testPanierCommande1(){
  let testPanierCommande1=document.getElementById("testPanierCommande1");
  Panier.clear();
  localStorage.removeItem("liste_produits_panier");
  let panier_commande=document.getElementById("panier_commande");
  panier_commande.innerHTML="";
  Panier.add("idone","Calinours",2,1000);
  panierCommande();
  let valide=true;
  let ligne=document.querySelectorAll('#panier_commande  tr');
  if(Panier.count()!==(ligne.length)){
      valide=false;
    }
    if(ligne[0].getAttribute("id")!==("panier_commande-"+Panier.get(0).id)){
      valide=false;
    }
    let element=ligne[0].querySelectorAll('td');
    if(element.length!==4){
      valide=false;
    }
    if(element[0].getAttribute("class")!==("pdt")){
      valide=false;
    }
    if(element[0].innerHTML!==Panier.get(0).name){
      valide=false;
    }
    if(element[1].getAttribute("class")!==("prix")){
      valide=false;
    }
    if(element[1].innerHTML!=(Panier.get(0).price + " €")){
      valide=false;
    }
    if(element[2].getAttribute("class")!==("qt")){
      valide=false;
    }
    if(element[2].innerHTML!=Panier.get(0).qty){
      valide=false;
    }
    if(element[3].getAttribute("class")!==("st")){
      valide=false;
    }
    if(element[3].innerHTML!=((Panier.get(0).qty*Panier.get(0).price) + " €")){
      valide=false;
    }
    let calcul=document.querySelectorAll("tr.math");
    let montantHT=calcul[0].querySelectorAll('td');
    let montantTVA=calcul[1].querySelectorAll('td');
    let montantTTC=calcul[2].querySelectorAll('td');
    if(montantHT[1].getAttribute("class") !==("ht")){
        valide=false;
    }
    if(montantHT[1].innerHTML!=(element[3].innerHTML)){
      valide=false;
    }
   if (montantTVA[1].getAttribute("class") !==("tva")){
     valide=false;
   }
    if (montantTVA[1].innerHTML!=(parseInt(montantHT[1].innerHTML,10)*0.2 +" €")){
      valide=false;
    }
    if(montantTTC[1].getAttribute("class")!==("ttc")){
      valide=false;
    }
    if(montantTTC[1].innerHTML!=((parseInt(montantTVA[1].innerHTML,10))+(parseInt(montantHT[1].innerHTML,10))+" €")){
      valide=false;
    }
    if((localStorage.getItem("ttc")+" €") != (montantTTC[1].innerHTML)){
      valide=false;
    }
    if (valide==false){
      testPanierCommande1.innerHTML="Simple panier_commande failed";
      testPasOk++;
    }
    else{
      testPanierCommande1.innerHTML="Simple panier_commande success";
      testOk++;
    }
};


function testPanierCommande2(){
  let testPanierCommande2=document.getElementById("testPanierCommande2");
  Panier.clear();
  localStorage.removeItem("liste_produits_panier");
  let panier_commande=document.getElementById("panier_commande");
  panier_commande.innerHTML="";
  Panier.add("idone","Calinours",2,1000);
  Panier.add("idtwo","Calinours",1, 1000);
  Panier.add("idthree","Nours",1, 1020);
  panierCommande();
  let valide=true;
  let ligne=document.querySelectorAll('#panier_commande tr');
  let calculMontantHT=0;
    if(Panier.count()!==(ligne.length)){
      valide=false;
    }
    for(let i=0 ; i<Panier.count() ; i++){
      if(ligne[i].getAttribute("id")!==("panier_commande-"+ Panier.get(i).id)){
        valide=false;
      }
    let element=ligne[i].querySelectorAll('td');
      if(element.length!==4){
        valide=false;
      }
      if(element[0].innerHTML!==Panier.get(i).name){
        valide=false;
      }
      if(element[1].innerHTML!=(Panier.get(i).price + " €")){
        valide=false;
      }
      if(element[2].innerHTML!=Panier.get(i).qty){
        valide=false;
      }
     if(element[3].innerHTML!=((Panier.get(i).qty*Panier.get(i).price) + " €")){
        valide=false;
      }
    calculMontantHT= calculMontantHT+(parseInt(element[3].innerHTML,10));
    }
    let calcul=document.querySelectorAll("tr.math");
    let montantHT=calcul[0].querySelectorAll('td');
    let montantTVA=calcul[1].querySelectorAll('td');
    let montantTTC=calcul[2].querySelectorAll('td');
    if(montantHT[1].innerHTML!=(calculMontantHT+" €")){
      valide=false;
    }
    if (montantTVA[1].innerHTML!=(calculMontantHT)*0.2 +" €"){
      valide=false;
    }
    if(montantTTC[1].innerHTML!=((parseInt(montantTVA[1].innerHTML,10))+(calculMontantHT)+" €")){
      valide=false;
    }
    if((localStorage.getItem("ttc")+" €") != (montantTTC[1].innerHTML)){
      valide=false;
    }
    if (valide==false){
      testPanierCommande2.innerHTML="Middle panier_commande failed";
      testPasOk++;
    }
    else{
      testPanierCommande2.innerHTML="Middle panier_commande success";
      testOk++;
    }
};

function testPanierCommande3(){
  let testPanierCommande3=document.getElementById("testPanierCommande3")
  let panier_commande=document.getElementById("panier_commande");
  panier_commande.innerHTML="";
  Panier.clear();
  localStorage.removeItem("liste_produits_panier");
  panierCommande();
  let valide=true;
    if(Panier.count()!==(0)){
      valide=false;
    }
    if (valide==false){
      testPanierCommande3.innerHTML="Empty panier_commande failed";
      testPasOk++;
    }
    else{
      testPanierCommande3.innerHTML="Empty panier_commande success";
      testOk++;
    }
};

function testVerifier1(){
    //affectation de la valeur retournée par fonction verifier
    let testVerifier1=document.getElementById("testVerifier1");
    let valide=true;
    let nom = document.getElementById('nom');
    nom.value="";
    let prenom = document.getElementById('prenom');
    prenom.value="";
    let adresse = document.getElementById('adresse');
    adresse.value="";
    let ville = document.getElementById('ville');
    ville.value="";
    let email = document.getElementById('email');
    email.value="";
    let resultat=verifier();
    let missNom = document.getElementById('missNom');
    let missPrenom = document.getElementById('missPrenom');
    let missAdresse = document.getElementById('missAdresse');
    let missVille = document.getElementById('missVille');
    let missEmail = document.getElementById('missEmail');
    if(missNom.innerHTML!=="Veuillez entrer un nom"){
        valide=false;
    }
    if(missPrenom.innerHTML!=="Veuillez entrer un prénom"){
        valide=false;
    }
    if(missAdresse.innerHTML!=="Veuillez entrer une adresse postale valide"){
      valide=false;
    }
    if(missVille.innerHTML!=="Veuillez entrer un nom de ville"){
      valide=false;
    }
    if(missEmail.innerHTML!=="Veuillez entrer un email valide"){
      valide=false;
    }
    if(resultat==true){
     valide=false;
    }
    if (valide==false){
      testVerifier1.innerHTML="Empty verifier failed";
      testPasOk++;
    }
    else{
      testVerifier1.innerHTML="Empty verifier success";
      testOk++;
    }
}

function testVerifier2(){
    let testVerifier2=document.getElementById("testVerifier2");
    let valide=true;
    let nom = document.getElementById('nom');
    nom.value="David";
    let prenom = document.getElementById('prenom');
    prenom.value="Paul";
    let adresse = document.getElementById('adresse');
    adresse.value="12 rue des Lys";
    let ville = document.getElementById('ville');
    ville.value="Nantes";
    let email = document.getElementById('email');
    email.value="pdavid@gmail.com";
    let missNom = document.getElementById('missNom');
    let missPrenom = document.getElementById('missPrenom');
    let missAdresse = document.getElementById('missAdresse');
    let missVille = document.getElementById('missVille');
    let missEmail = document.getElementById('missEmail');
    missNom.innerHTML="";
    missPrenom.innerHTML="";
    missAdresse.innerHTML="";
    missVille.innerHTML="";
    missEmail.innerHTML="";
    let resultat=verifier();
    if(missNom.innerHTML!==""){
        valide=false;
    }
    if(missPrenom.innerHTML!==""){
        valide=false;
    }
    if(missAdresse.innerHTML!==""){
      valide=false;
    }
    if(missVille.innerHTML!==""){
      valide=false;
    }
    if(missEmail.innerHTML!==""){
      valide=false;
    }
    if(resultat!==true){
     valide=false;
    }
    if (valide==false){
      testVerifier2.innerHTML="Simple verifier failed";
      testPasOk++;
    }
    else{
      testVerifier2.innerHTML="Simple verifier success";
      testOk++;
    }
}

function testCommandeValide1(){
  let valide=true;
  let testCommandeValide1=document.getElementById("testCommandeValide1");
  commande_valide();
 if(document.querySelector("#commande span").innerHTML!==localStorage.getItem("id_commande")){
    valide=false;
  }
  if(document.querySelector("#montant span").innerHTML!==(localStorage.getItem("ttc"))){
    valide=false
  }
  if (valide==false){
    testCommandeValide1.innerHTML="Simple commande_valide failed";
    testPasOk++;
  }
  else{
    testCommandeValide1.innerHTML="Simple commande_valide success";
    testOk++;
  }
}





//fonction de comptage du nombre et du pourcentage de tests réussis et échoués
function compteur(){
  let nbeTestsOk=document.getElementById("nbeTestsOk");
  nbeTestsOk.innerHTML=testOk;
  let nbeTestsPasOk=document.getElementById("nbeTestsPasOk");
  nbeTestsPasOk.innerHTML=testPasOk;
  testOk=parseInt(testOk,10)
  testPasOk=parseInt(testPasOk,10);
  let nbeTests=testOk+testPasOk;
  let percentTestsOk=document.getElementById("percentTestsOk");
  percentTestsOk.innerHTML=(testOk/nbeTests*100)+"%" ;
  let percentTestsPasOk=document.getElementById("percentTestsPasOk");
  percentTestsPasOk.innerHTML=(testPasOk/nbeTests*100)+"%";

}
