const addToCartBtn = document.querySelectorAll('.add-to-cart'); // Récupération de tous les boutons add des cours. 
const tbody = document.querySelector('tbody.panier'); // Récuparation de l'emplacement ou afficher éléments du panier. 

let items = []; // création d'un tableau vide pour push les éléments item.appenChild
var z = 0;



for (i=0; i<addToCartBtn.length; i++){
        let button = addToCartBtn[i];
        button.addEventListener('click', addToCartClick); // récuparation du clcik sur le "ajouter au panier + démarage de la focntion addToCartClick"

}

function addToCartClick(e){ // création de la fonction avec event en parametre. 

console.log(e.target.parentElement.parentElement);

let parent = e.target.parentElement.parentElement;
let img = parent.querySelector('figure.course_img img');
let img_src = img.getAttribute('src');
let prix = parent.querySelector('span.discount');
let nom = parent.querySelector('h4');
let dispo = parent.querySelector('span.stock');

let tr = document.createElement('tr');  
let th = document.createElement('th');  
let thNom = document.createElement('th');  
let thPrix = document.createElement('th');
let thDispo = document.createElement('th');  
let th2 = document.createElement('th');  

th.className = 'alignement';
thNom.className = 'nom';
thPrix.className = 'prix';
thDispo.className = 'dispo';
th2.className = 'alignement2';

thNom.textContent = `${nom.innerHTML}`;
thPrix.textContent = `${prix.innerHTML}`;
thDispo.textContent = `${dispo.innerHTML}`;

tbody.appendChild(tr);
tr.appendChild(th);
tr.appendChild(thNom);
tr.appendChild(thPrix);
tr.appendChild(thDispo);
tr.appendChild(th2);

    localStorage.setItem(`item${z}`, items);
    z++;

}



