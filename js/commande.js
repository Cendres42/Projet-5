window.addEventListener("load", function(){
    document.querySelector("#commande span").innerHTML=localStorage.getItem("id_commande");
    document.querySelector("#montant span").innerHTML=localStorage.getItem("ttc");
});
