const addToCartBtn = document.querySelectorAll(".add-to-cart"); // Récupération de tous les boutons add des cours.
let removeAllFromCart = document.querySelector('a[id="empty-cart"]');
removeAllFromCart.addEventListener("click", removeAllCart);
const tbody = document.querySelector("tbody.panier"); // Récupération de l'emplacement ou afficher éléments du panier.
let table = document.querySelector("table");
let total1 = 0;
let item_in_cart = 0;
let lock = false;
let JSON_cart = {};
let tab_cart = [];
let dataid = 10;
let cart_saved = false;

let th = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");
table.appendChild(th);
th2.textContent = "Total :";
table.appendChild(th2);
table.appendChild(th3);
table.appendChild(th4);

if (localStorage["JSON_cart"]) {
  cart_saved = true;
  addToCartClick(cart_saved);
} else {
  cart_saved = false;
}

for (let i = 0; i < addToCartBtn.length; i++) {
  let button = addToCartBtn[i];
  button.addEventListener("click", addToCartClick); // récupération du click sur le "ajouter au panier + démarage de la fonction addToCartClick"
}
/**
 * Fonction qui ajoute un article dans le panier en affichant le nom, le prix et la quantité
 * @param {*} e l'evenement permet de selectionner l'article choisi à ajouter
 */
function addToCartClick(e) {
  // création de la fonction avec event en parametre.
  if (typeof e == "boolean") {
    if (cart_saved) {
      let uy = JSON.parse(localStorage["JSON_cart"]);
      for (var u = 0; u < uy.length; u++) {
        let item = uy[u];
        let prix = item.prix;
        let nom = item.nom;
        let dispo = 1;
        let idd = item.id;

        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let thNom = document.createElement("th");
        let thPrix = document.createElement("th");
        let thDispo = document.createElement("th");
        let th2 = document.createElement("th");
        let button = document.createElement("a");
        let linkText = document.createTextNode("Retirer cet article du panier");

        th.className = "alignement";
        thNom.className = "nom";
        thPrix.className = "prix";
        thDispo.className = "dispo";
        th2.className = "alignement2";

        thNom.textContent = `${nom}`;
        thPrix.textContent = `${prix}`;
        thDispo.textContent = dispo;
        button.appendChild(linkText);
        button.style.fontSize = "10px";
        button.style.float = "right";
        button.addEventListener("click", delete_from_cart);
        tr.dataset.id = idd;
        tbody.appendChild(tr);
        th2.appendChild(button);
        tr.appendChild(th);
        tr.appendChild(thNom);
        tr.appendChild(thPrix);
        tr.appendChild(thDispo);
        tr.appendChild(th2);
        item_in_cart++;
        total(prix);
        dataid = idd;
        tab_cart.push({ nom: `${nom}`, prix: `${prix}`, id: `${idd}` });
      }
    }
  } else if (typeof e != "undefined") {
    let parent = e.target.parentElement.parentElement;
    let prix = parent.querySelector("span.discount");
    let nom = parent.querySelector("h4");
    let dispo = 1;

    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let thNom = document.createElement("th");
    let thPrix = document.createElement("th");
    let thDispo = document.createElement("th");
    let th2 = document.createElement("th");
    let button = document.createElement("a");
    let linkText = document.createTextNode("Retirer cet article du panier");

    th.className = "alignement";
    thNom.className = "nom";
    thPrix.className = "prix";
    thDispo.className = "dispo";
    th2.className = "alignement2";

    thNom.textContent = `${nom.innerHTML}`;
    thPrix.textContent = `${prix.innerHTML}`;
    thDispo.textContent = dispo;
    button.appendChild(linkText);
    button.style.fontSize = "10px";
    button.style.float = "right";
    button.addEventListener("click", delete_from_cart);
    tr.dataset.id = dataid;
    tbody.appendChild(tr);
    th2.appendChild(button);
    tr.appendChild(th);
    tr.appendChild(thNom);
    tr.appendChild(thPrix);
    tr.appendChild(thDispo);
    tr.appendChild(th2);
    item_in_cart++;
    total(prix.innerHTML);
    tab_cart.push({
      nom: `${nom.innerHTML}`,
      prix: `${prix.innerHTML}`,
      id: `${dataid}`
    });
  }
  JSON_cart.cart_items = tab_cart;
  localStorage["JSON_cart"] = JSON.stringify(JSON_cart.cart_items);
  dataid++;
}
/**
 * Fonction qui retire un article du panier
 * @param {*} event , permet de choisir l'article que l'on veut retirer
 */
function delete_from_cart(event) {
  if (event.target) {
    event = event.target;
  }
  let price_element = event.parentNode.parentNode.querySelector(
    'th[class="prix"]'
  );
  price_element = price_element.innerHTML.slice(0, 3);
  price_element = parseInt(price_element);
  event.parentNode.parentNode.remove();
  total(-price_element);
  remove_localStorage(event);
  addNotification(event);
}
/**
 * Fonction qui calcule le total du panier
 * @param {*} tt
 */
function total(tt) {
  if (typeof tt != "number") {
    tt = tt.slice(0, 3);
    tt = parseInt(tt);
  }
  if (total1 >= 0) {
    total1 += tt;
    if (total1 >= 100 && lock == false) {
      timerDiscount();
      lock = true;
    } else if (total1 < 100) {
      let price_element = document.querySelectorAll('th[class="prix"]');
      for (let p = 0; p < price_element.length; p++) {
        let price_element0 = price_element[p].innerHTML.slice(0, 3);
        price_element0 = parseInt(price_element0);
        if (price_element0 == 0) {
          delete_from_cart(price_element[p].parentNode.querySelector("a"));
        }
      }
      lock = false;
    }
    th5.className = "Total";
    th5.textContent = total1 + " €";
    table.appendChild(th5);
  }
}
/**
 * Fonction qui ajoute l'article dans le localstorage
 * @param {*} event permet d'avoir event.dataset
 */
function add_localStorage(event) {
  localStorage[event.dataset.id] = event.parentNode.outerHTML;
}

/**
 * Fonction qui supprime l'article du localstorage et du tableau des articles
 * @param {*} event l'evenement, permet d'avoir event.target
 */
function remove_localStorage(event) {
  if (event.target) {
    event = event.target;
  }
  let nameToAdd = event.parentNode.parentNode.querySelector('th[class="nom"]');
  addToCartBtn.forEach(function(item) {
    if (item.parentNode.querySelector("h4").innerHTML == nameToAdd.innerHTML) {
      let stock = item.parentNode.querySelector('span[class="stock"]');
      let W = parseInt(stock.innerHTML);
      stock.innerHTML = W + 1;
      localStorage[item.dataset.id] = stock.innerHTML;
    }
  });
  let tab = [];
  localStorage.removeItem(event.parentNode.parentNode.dataset.id);
  let local = JSON.parse(localStorage["JSON_cart"]);
  for (var x = 0; x < local.length; x++) {
    if (local.length == 1) {
      delete local;
      localStorage.removeItem("JSON_cart");
    }
    if (event.parentNode.parentNode.dataset.id == local[x].id) {
      local.splice(x, 1);
    }
    if (typeof local[x] != "undefined") {
      tab.push({
        nom: `${local[x].nom}`,
        prix: `${local[x].prix}`,
        id: `${local[x].id}`
      });
      JSON_cart.cart_items = tab;
      localStorage["JSON_cart"] = JSON.stringify(JSON_cart.cart_items);
    }
  }
  tab_cart = tab;
}
/**
 * Fonction qui permet de vider le panier en entier
 */
function removeAllCart() {
  let nameToAddAll = document.querySelectorAll('th[class="nom"]');
  addToCartBtn.forEach(function(item) {
    for (let g = 0; g < nameToAddAll.length; g++) {
      if (
        item.parentNode.querySelector("h4").innerHTML ==
        nameToAddAll[g].innerHTML
      ) {
        let stock = item.parentNode.querySelector('span[class="stock"]');
        let W = parseInt(stock.innerHTML);
        stock.innerHTML = W + 1;
        localStorage[item.dataset.id] = stock.innerHTML;
      }
    }
  });
  let allTr = tbody.querySelectorAll("tr");
  for (let i = 0; i < allTr.length; i++) {
    allTr[i].remove();
  }
  total1 = 0;
  th5.textContent = total1 + " €";
  localStorage.removeItem("JSON_cart");
}
