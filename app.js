// controls the carousel in epk
const carousel_con = document.getElementById("carousel_con");
const item = document.querySelector(".item");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = item.clientWidth;
  carousel_con.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = item.clientWidth;
  carousel_con.scrollLeft -= slideWidth;
});

//mobile menu
function myFunction() {
    let x = document.getElementById("mobile_menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      
    }

    
  }