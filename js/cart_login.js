const inpUtilisateur = document.querySelector("input[id='utilisateur']");
const inpPrenom = document.querySelector("input[id='utilisateur_prenom']");
const inpMail = document.querySelector('input[id="email"]');
const inpAdresse = document.querySelector('input[id="mdp"]');
const inpVille = document.querySelector('input[id="ville"]');
const button = document.querySelector('button');
button.style.display = "none";

// Si tout est true, le bouton deviens visible
let prenom = false;
let nom = false;
let mail = false;
let ville0 = false;
let adresse = false;

//Images et message d'erreur
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');

// Validation création du MDP

let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;
const regexEmail = /\S+@\S+\.\S+/;


/**
 * Event Listener de l'entrée utilisateur : nom
 * Affiche/cache l'image de confirmation et le message d'erreur
 */
inpUtilisateur.addEventListener('input',  function(e) {
    let username = inpUtilisateur.value;
    if(username.length < 3 || username.length > 24){
        allImg[0].style.display = 'none'
        allSpan[0].style.display = 'inline'
        nom = false;
    }
    else{
        allImg[0].style.display = 'inline'
        allSpan[0].style.display = 'none'
        nom = true;
        if(ville0 == true && adresse == true && mail == true && nom == true && prenom == true){
            button.style.display='inline'
        }
    }
})

/**
 * Event Listener de l'entrée utilisateur : Prenom
 * Affiche/cache l'image de confirmation et le message d'erreur
 */
inpPrenom.addEventListener('input',  function(e) {
    let username = inpPrenom.value;
    if(username.length < 3 || username.length > 24){
        allImg[1].style.display = 'none'
        allSpan[1].style.display = 'inline'
        prenom = false;
    }
    else{
        allImg[1].style.display = 'inline'
        allSpan[1].style.display = 'none'
        prenom = true;
        if(ville0 == true && adresse == true && mail == true && nom == true && prenom == true){
            button.style.display='inline'
        }
    }
})

/**
 * Event Listener de l'entrée utilisateur : Mail
 * Affiche/cache l'image de confirmation et le message d'erreur
 */
inpMail.addEventListener('input',  function(e) {
    let mail0 = inpMail.value;
    if(regexEmail.exec(mail0)){
        allImg[2].style.display = 'inline'
        allSpan[2].style.display = 'none'
        mail = true;
        if(ville0 == true && adresse == true && mail == true && nom == true && prenom == true){
            button.style.display='inline'
        }
    }
    else{
        allImg[2].style.display = 'none'
        allSpan[2].style.display = 'inline'
        mail = false
    }
})


/**
 * Event Listener de l'entrée utilisateur : Adresse
 * Affiche/cache l'image de confirmation et le message d'erreur
 */
inpAdresse.addEventListener('input',  function(e) {
    let mdp = inpAdresse.value;
    if (alphabet.exec(mdp) && chiffres.exec(mdp) && mdp.length >= 8){
        allImg[3].style.display = 'inline'
        allSpan[3].style.display = 'none'
        adresse = true;
        if(ville0 == true && adresse == true && mail == true && nom == true && prenom == true){
            button.style.display='inline'
        }
    }
    else{
        allImg[3].style.display = 'none'
        allSpan[3].style.display = 'inline'
        adresse = false;
    }
})

/**
 * Event Listener de l'entrée utilisateur : ville
 * Affiche/cache l'image de confirmation et le message d'erreur
 */
inpVille.addEventListener('input',  function(e) {
    let ville = inpVille.value;
    if(ville.length < 3 || ville.length > 24){
        allImg[4].style.display = 'none'
        allSpan[4].style.display = 'inline'
        ville0 = false;
    }
    else{
        allImg[4].style.display = 'inline'
        allSpan[4].style.display = 'none'
        ville0 = true;
        if(ville0 == true && adresse == true && mail == true && nom == true && prenom == true){
            button.style.display='inline'
        }
    }
})


