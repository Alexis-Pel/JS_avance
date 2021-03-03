let allArticles = document.querySelectorAll('div[class="course__item"]');
let allStocks = document.querySelectorAll('span[class="stock"]');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', Stock);
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
            stock.innerHTML = stock.innerHTML - 1;
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

