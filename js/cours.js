const bodiv = document.querySelector('div.courses__container');
//boucle pour afficher les articles
let i = 1;
for(const propriaty in COURSES){
  createCard(i);
  console.log(COURSES[i].id);
  i++;
}
/*for(let i = 1 ; i <= 100; i++){
  if(COURSES[i] == null){
    break;
  }
  else{
    
  }
}*/
//fonction pour créer un article
function createCard(i){
  
  //attribue de l'objet COURSES
  let COURSES_img = COURSES[i].img;
  let COURSES_title = COURSES[i].title;
  let COURSES_initial_price = COURSES[i].initial_price;
  let COURSES_price = COURSES[i].price;
  let COURSES_mark = COURSES[i].mark;
  let COURSES_stock = COURSES[i].stock;
  let COURSES_id = COURSES[i].id;

  //createElement pour les articles
  let course__item = document.createElement('div');
  course__item.className = "course__item";
  let course_img = document.createElement('figure');
  course_img.className = "course_img";
  let img_ux_ui = document.createElement('img');
  img_ux_ui.src = `img/courses/${COURSES_img}`;
  let info__card = document.createElement('div');
  info__card.className = "info__card";
  let h4 = document.createElement('h4');
  h4.textContent = `${COURSES_title}`;
  let mark_m_4 = document.createElement('figure');
  mark_m_4.className = `mark m_${COURSES_mark}`;
  let rate = document.createElement('img');
  rate.src = "img/rates.png";
  let p_span2 = document.createElement('p');
  let price = document.createElement('span');
  price.className = "price";
  price.textContent = `${COURSES_initial_price} €`;
  let discount = document.createElement('span');
  discount.className = "discount";
  discount.textContent = `${COURSES_price} €`;
  let p_span = document.createElement('p');
  p_span.textContent = "Disponible: ";
  let stock = document.createElement('span');
  stock.className = "stock";
  stock.textContent = `${COURSES_stock}`;
  let a = document.createElement('a');
  a.href = '#';
  a.className = 'add-to-cart';
  a.dataset.id = `${COURSES_id}`;
  a.textContent = `Ajouter au panier`;
  
  //#appendChild des createElements ci-dessus#//
  //<div class="courses__container">
  bodiv.appendChild(course__item);
  //<div class="course__item">
  course__item.appendChild(course_img);
  course__item.appendChild(info__card);
  //<figure class="course_img">
  course_img.appendChild(img_ux_ui);
  //<div class="info__card">
  info__card.appendChild(h4);
  info__card.appendChild(mark_m_4);
  info__card.appendChild(p_span2);
  info__card.appendChild(p_span);
  info__card.appendChild(a);
  //<figure class="mark m_(1;2;3;4;5)>
  mark_m_4.appendChild(rate);
  //<p>/p_span2
  p_span2.appendChild(price);
  p_span2.appendChild(discount);
  //<p>/p_span
  p_span.appendChild(stock);
}



/* <div class="courses__container">
    <div class="course__item">
      <figure class="course_img">
        <img src="img/courses/ux_ui.jpg">
      </figure>
      <div class="info__card">
        <h4>UX/UI</h4>
        <figure class="mark m_4">
          <img src="img/rates.png">
        </figure>
        <p>
          <span class="price">200 €</span>
          <span class="discount">9.99 €</span>
        </p>
        <p>
          Disponible: <span class="stock">10</span>
        </p>
        <a href="#" class="add-to-cart" data-id="1"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
      </div>
    </div>
</div> */