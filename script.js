let currentIndex = 0;
  const foods = document.querySelectorAll(".food");

  function showFood(index) {
    for (let i = 0; i < foods.length; i++) {
      foods[i].style.display = "none";
    }
    foods[index].style.display = "flex";
  }

  function nextFood() {
    currentIndex = (currentIndex + 1) % foods.length;
    showFood(currentIndex);
  }

  function prevFood() {
    currentIndex = (currentIndex - 1 + foods.length) % foods.length;
    showFood(currentIndex);
  }

  showFood(currentIndex);

  let humburgerMenu = document.querySelector(".hamburgermenu");
  let navbar = document.querySelector("nav ul");
  let badan = document.querySelector("body");

  humburgerMenu.addEventListener("click", function () {
    navbar.classList.toggle("slide");
    document.body.classList.toggle("transparant");
  });

  var closemenu = document.querySelector(".closemenu");
  closemenu.addEventListener("click", function () {
    if (navbar.classList.contains("slide")) {
      navbar.classList.remove("slide");
    }

  })