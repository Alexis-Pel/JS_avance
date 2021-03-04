let allButtons = document.querySelectorAll('a[class="add-to-cart"]');
let notif_box = document.querySelector("element[id='notification_container']");
let compteur = 0;
console.log(allButtons);


/**
 * Fonction qui créer des notifications,
 * les affiche dans le container notif_box,
 * puis les supprime au bout de 2 secondes,
 * compteur qui permet de ne pas submerger la page de notifications
 */
function addNotification(event){
    if(event.target.className == "add-to-cart"){
        if(compteur < 3){
            let content_box = document.createElement('element');
            content_box.className = 'content';
            let message = document.createElement('p');
            message.innerHTML="L'élément a été ajouté au panier";
            content_box.appendChild(message);
            notif_box.appendChild(content_box);
            compteur++;
            setTimeout(function() {
                content_box.style.opacity = '0';
                setTimeout(function() {
                    notif_box.removeChild(content_box);
                    compteur--;
                }, 1000)
            }, 1200)
        }
    }
}