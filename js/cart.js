const addToCartBtn = document.querySelectorAll('.add-to-cart'); // Récupération de tous les boutons add des cours. 
const tbody = document.querySelector('tbody.panier'); // Récuparation de l'emplacement ou afficher éléments du panier. 
let table = document.querySelector('table');
let total1 = 0;
let lock = false;

let th = document.createElement('th');  
    let th2 = document.createElement('th');  
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');  
    let th5 = document.createElement('th');
    table.appendChild(th)
    th2.textContent = "Total :"
    table.appendChild(th2);
    table.appendChild(th3);
    table.appendChild(th4);

for (i=0; i<addToCartBtn.length; i++){
        let button = addToCartBtn[i];
        button.addEventListener('click', addToCartClick); // récuparation du clcik sur le "ajouter au panier + démarage de la focntion addToCartClick"

}

function addToCartClick(e){ // création de la fonction avec event en parametre. 

    console.log(e.target.parentElement.parentElement);

    let parent = e.target.parentElement.parentElement;
    let prix = parent.querySelector('span.discount');
    let nom = parent.querySelector('h4');
    let dispo = 1;

    let tr = document.createElement('tr');  
    let th = document.createElement('th');  
    let thNom = document.createElement('th');  
    let thPrix = document.createElement('th');
    let thDispo = document.createElement('th');  
    let th2 = document.createElement('th'); 
    let button = document.createElement('a');
    let linkText = document.createTextNode("Retirer cet article du panier");

    th.className = 'alignement';
    thNom.className = 'nom';
    thPrix.className = 'prix';
    thDispo.className = 'dispo';
    th2.className = 'alignement2';

    thNom.textContent = `${nom.innerHTML}`;
    thPrix.textContent = `${prix.innerHTML}`;
    thDispo.textContent = dispo;
    button.appendChild(linkText);
    button.style.fontSize = "10px";
    button.style.float="right";
    button.addEventListener('click', delete_from_cart);

    tbody.appendChild(tr);
    th2.appendChild(button);
    tr.appendChild(th);
    tr.appendChild(thNom);
    tr.appendChild(thPrix);
    tr.appendChild(thDispo);
    tr.appendChild(th2);
    total(prix.innerHTML)
}

function delete_from_cart(event){
    let price_element = document.querySelector('th[class="prix"]')
    price_element = price_element.innerHTML.slice(0,3);
    price_element = parseInt(price_element);
    console.log(event.target.parentNode.parentNode.remove())
    total(-price_element)
}

function total(tt){
    if(typeof(tt) != 'number'){
        tt = tt.slice(0,3);
        tt = parseInt(tt)
    }
    if (total1 >= 0){
        total1 += tt;
        if(total1 >= 100 && lock == false){
            timerDiscount();
            lock = true;
        }
        else if (total1< 100){
            lock = false;
        }
        th5.className="Total";
        th5.textContent = total1 + " €";
        table.appendChild(th5);
    }
}



