const addToCartBtn = document.querySelectorAll('.add-to-cart'); // Récupération de tous les boutons add des cours. 
const tbody = document.querySelector('tbody'); // Récuparation de l'emplacement ou afficher éléments du panier. 
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
let nom = parent.querySelector('h4')
let dispo = parent.querySelector('span.stock')

    localStorage.setItem(`item${z}`, items);
    z++;

    if(items.toString)


    //attribue de l'objet COURSES
  let COURSES_img = COURSES[i].img;
  let COURSES_title = COURSES[i].title;
  let COURSES_initial_price = COURSES[i].initial_price;
  let COURSES_price = COURSES[i].price;
  let COURSES_mark = COURSES[i].mark;
  let COURSES_stock = COURSES[i].stock;
  let COURSES_id = COURSES[i].id;



}

//  // 
//     name.appendChild(nameCourse); // ajout d'un enfant nameCourse au parent name
//     price.appendChild(imageCourse);
//     image.appendChild(priceCourse);

//     items.push(item); // push dans mon nouveau tableau les différents paramètres. 

    
// }

// const removeCartButton = document.getElementsByClassName("button u-full-width"); //récupération du boutton delete du panier
// console.log(removeCartButton); // log du remove our savoir ce qu'il contient

// for (i=0; i<removeCartButton.length; i++){
//     let button = removeCartButton[i]; 
//     button.addEventListener('click', function(e){
//         let buttonClicked = e.target
//         buttonClicked.parentElement.parentElement.remove();
//         updateCartTotal(); // lancement auto de la fonction si click
//     })

// function updateCartTotal(){
//     const cartItemContainer = document.getElementsByClassName('courses_container')[0];
//     const cartItem = cartItemContainer = document.getElementsByClassName('course_item');
//     console.log(cartItemContainer);
//     console.log(cartItem);

//     localStorage.removeItem(cartItemContainer);
//     console.log(cartItemContainer);
//     console.log(cartItem);

//     for (let i=0; i<cartItem.length; i++){
//         const cartItem = cartItem[i];
//         const priceElement = cartItem.getElementsByClassName('discount')[0];

//         console.log(priceElement)
//     }
// }
// }


