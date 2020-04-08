//
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(this.readyState==XMLHttpRequest.DONE && this.status==200){
    var response=JSON.parse(this.responseText);
    for (let i = 0; i <5; i++){
      let qs = "#Bear-"+i+ " h2 span.name";
      document.querySelector(qs).innerHTML=response[i].name;
      qs = "#Bear-"+i+" .prix span";
      document.querySelector(qs).innerHTML=response[i].price;
      qs="#Bear-"+i+ " p";
      document.querySelector(qs).innerHTML=response[i].description;
      qs="#Bear-"+i+ " img";
      let img=document.querySelector(qs);
      img.setAttribute("src",response[i].imageUrl);
      qs="#Bear-"+i+ " a";
      let lien=document.querySelector(qs);
      lien.setAttribute("href","teddy_perso.html?product_id="+response[i]._id);
      }
}
};
request.open("GET", "http://localhost:3000/api/teddies");
request.send();







//  let myHeading = document.querySelector('h1');
  //myHeading.textContent = 'Bonjour, monde !';
  //let titres2 = document.querySelector('h2');
  //titres2.innerHTML = "<ul><li>Ours en peluche</li><li>Caméras</li></ul>";
  /*function essaiPost(){
  var send = new XMLHttpRequest();
  send.onreadystatechange=function(){
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){
    var response=JSON.parse(this.responseText);
    document.getElementById('result').innerHTML=response.postData.text;
    }
  };
  send.open("POST", "https://mockbin.com/request");
  send.setRequestHeader("Content-Type", "application/json");
  let jsonBody={};
  jsonBody.value=document.getElementById('value').value;
  send.send(JSON.stringify(jsonBody));
  }
  const form=document.getElementById('essai');
  //let envoi=form.getAttribute('type');
  form.addEventListener('click',essaiPost);


  let myInput=document.getElementById('code');
  let bouton=document.getElementById('submit-btn');
  myInput.addEventListener('input', function(e) {
    var value = e.target.value;
    if (/^CODE-/.test(value)) {
        document.getElementById("code-validation").innerHTML = "Code valide";
        bouton.removeAttribute('disabled','disabled');
        } else {
        document.getElementById("code-validation").innerHTML = "Code invalide";
        bouton.setAttribute('disabled', 'disabled');

    }
});

  function askWeather(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){
      var response=JSON.parse(this.responseText);
      document.getElementById('weather-result').innerHTML=response.current_condition.condition;
    }
  };
  request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  request.send();
  }
  const weather=document.getElementById('ask-weather');
  weather.addEventListener('click',askWeather);

class Produits{
  constructor(id, name, price, description, imageUrl){
    this.id=id;
    this.name=name;
    this.price=price;
    this.description=description;
    this.imageUrl=imageUrl;
  }
}
const input=document.querySelector('input');
const log=document.getElementById('res-name');
input.addEventListener('input',updateV);
function updateV(b){
    log.textContent=b.target.value;
}
const genre=document.getElementById('gender');
const gdr=document.getElementById('res-gender');
genre.addEventListener('input',updateValue);
function updateValue(e){
gdr.textContent=e.target.value;
}
const souris=document.getElementById('result');
souris.addEventListener('mousemove', function(sourimove) {
document.getElementById('mouse-x').innerHTML = sourimove.offsetX; // Coordonnée X de la souris dans l'élément
document.getElementById('mouse-y').innerHTML = sourimove.offsetY; // Coordonnée Y de la souris dans l'élément
});
const newElt=document.createElement("h2");
let elt=document.getElementById("Teddy");
elt.appendChild(newElt);
newElt.innerHTML="<span>Mon nouvel Ours</span>";
newElt.classList.add("important");
newElt.style.color="red";

let eltA=document.querySelector("#plop>a");
eltA.addEventListener('click',function(event){
eltA.innerHTML="it works!!!!";
event.preventDefault();
});

let eltParent=document.getElementById("parent");
let eltCP=document.getElementById("parentCount");
eltCP.innerHTML=0;
eltParent.addEventListener('click',function(clicP){
eltCP.innerHTML++;
});

let eltEnfant=document.getElementById("enfant");
let eltCE=document.getElementById("enfantCount");
eltCE.innerHTML=0;
eltEnfant.addEventListener('click',function(clicE){
eltCE.innerHTML++;
clicE.preventDefault();
clicE.stopPropagation();
});
document.getElementById("enfantCount").innerHTMl=eltCE;

$.getJSON("http://www.agilack.fr/data.json", function(data){
  let produit=data;
  console.log(produit);
  $("h2 span").html("Ours en peluche "+produit.name);
  $(".produit img").attr("src", produit.imageUrl);
  $(".produit p").html(produit.description);
});*/
