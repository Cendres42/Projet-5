
  var request=new XMLHttpRequest();
  request.onreadystatechange=function (){
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){
      var response=JSON.parse(this.responseText);
      let qs = "#Bear h2 span.name";
      document.querySelector(qs).innerHTML=response.name;
      qs = "#Bear .prix span";
      document.querySelector(qs).innerHTML=response.price;
      qs="#Bear p";
      document.querySelector(qs).innerHTML=response.description;
      qs="#Bear img";
      let img=document.querySelector(qs);
      img.setAttribute("src",response.imageUrl);
      for(let u=0;u<response.colors.length;u++){
      qs="#Bear select";
      let option=document.createElement("option");
      option.innerHTML=response.colors[u];
      document.querySelector(qs).appendChild(option);
    }
  }
  };
  let adresse=window.location.search;
  let identifiant=(adresse.replace('?product_id=', ''));
request.open("GET", "http://localhost:3000/api/teddies/"+identifiant);
request.send();
