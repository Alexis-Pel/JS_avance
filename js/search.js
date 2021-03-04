const searchInput = document.querySelector("#search-item input");
let errorMessage = document.querySelector("div[id='no_course']");
searchInput.addEventListener("keyup", search);
/**
 * Function de recherche par lettre
 * Supprime au fur et a mesure les cours ne correspondant pas
 * Message si aucun cours disponible
 */
function search() {
  let compteur = 0;
  errorMessage.className = "hidden";
  let filter = searchInput.value.toUpperCase();
  let cours = document.querySelectorAll("h4");
  let allCours = document.querySelectorAll(".course__item h4");
  let hidden = document.querySelectorAll(".course__item");
  for (i = 0; i < cours.length; i++) {
    console.log(compteur);
    coursName = allCours[i].innerText;
    if (coursName.toUpperCase().indexOf(filter) > -1) {
      hidden[i].style.display = "flex";
      compteur++;
    } else {
      hidden[i].style.display = "none";
    }
  }
  if (compteur == 0) {
    console.log(errorMessage);
    errorMessage.className = "";
  }
}
