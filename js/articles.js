let allArticles = document.querySelectorAll('div[class="course__item"]');
let allBoutons = document.querySelectorAll('a[class="add-to-cart"]')

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', Stock);
}

for (let i = 0; i < allBoutons.length; i++) {
    let parent = allButtons[i].parentNode;
    let stock = parent.parentNode.querySelector('span[class="stock"]');
    if (localStorage[allBoutons[i].dataset.id] != 0){
        localStorage[allBoutons[i].dataset.id] = stock.innerHTML
    }
    if(localStorage[allBoutons[i].dataset.id] != undefined){
        stock.innerHTML = localStorage[allBoutons[i].dataset.id];
        if(localStorage[allBoutons[i].dataset.id] == "0"){
            allButtons[i].removeEventListener('click',Stock);
            parent.parentNode.remove();
        }
    }
}

/**
 * Permet d'afficher le nombre de stocks disponible,
 * si il n'y a plus de stocks, le cours disparait
 * @param {*} event L'évenement (qui permet d'avoir event.target (la cible de l'évenement))
 */
function Stock(event){
    addNotification(event);
    let parent = event.target.parentNode;
    for (let i = 0; i < allArticles.length; i++){
        if(parent.parentNode == allArticles[i]){
            let stock = parent.parentNode.querySelector('span[class="stock"]');
            localStorage[event.target.dataset.id] = stock.innerHTML;
            stock.innerHTML = stock.innerHTML - 1;
            localStorage[event.target.dataset.id] = stock.innerHTML;
            if (stock.innerHTML == 0){
                    allButtons[i].removeEventListener('click',Stock);
                setTimeout(function() {
                    parent.parentNode.style.opacity = '0';
                    setTimeout(function() {
                        parent.parentNode.remove();
                    }, 1000)
                }, 1200)
            }
        }
    }
}

