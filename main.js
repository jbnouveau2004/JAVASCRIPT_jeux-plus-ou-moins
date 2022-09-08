var valtest;
var coups = 0;
var valeur = Math.random() * 100;
valeur = Math.round(valeur);
console.log(valeur);


var btn = document.querySelector('#bouton');
btn.addEventListener('click', trouver);

function trouver(){
    coups += 1;
    valtest = document.getElementById('valeur').value;
    if(valtest<valeur){
        document.getElementById('resultat').innerHTML="C'est plus";
    }else if(valtest>valeur){
        document.getElementById('resultat').innerHTML="C'est moins";
    }else{
        document.getElementById('resultat').innerHTML="Bravo vous avez réussi en " + coups + " coups";
    }

}
    