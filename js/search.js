const searchInput = document.querySelector("#search-item input");

searchInput.addEventListener("keyup", search);

function search() {
  let filter = searchInput.value.toUpperCase();
  let cours = document.querySelectorAll("h4");
  let allCours = document.querySelectorAll(".course__item h4");
  let hidden = document.querySelectorAll(".course__item");
  for (i = 0; i < cours.length; i++) {
    coursName = allCours[i].innerText;
    if (coursName.toUpperCase().indexOf(filter) > -1) {
      hidden[i].style.display = "flex";
    } else {
      hidden[i].style.display = "none";
    }
  }
}
