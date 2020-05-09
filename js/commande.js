window.addEventListener("load", commande_valide());

function commande_valide(){
    document.querySelector("#commande span").innerHTML=localStorage.getItem("id_commande");
    document.querySelector("#montant span").innerHTML=localStorage.getItem("ttc");
};
