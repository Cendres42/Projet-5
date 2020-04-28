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

function testFindId1(){
    // Efface contenu du panier
    Panier.clear();
    //ajout objet complet
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
      testsetQty2.innerHTML='Simple setQty failed!';
      testPasOk++;
    }
    else{
      testsetQty2.innerHTML='Simple setQty success!!!';
      testOk++;
    }
};



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
