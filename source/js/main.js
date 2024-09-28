// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const menuButton = document.querySelector(".nav-buttons");
// const navConteiner = document.querySelector(".nav");
if (menuButton) {
  const body = document.querySelector("body");
  const menuContent = document.querySelector(".nav-menu");
  menuButton.addEventListener("click", function (e) {
    menuButton.classList.toggle("_active");
    menuContent.classList.toggle("_active");
    body.classList.toggle("_active");
  });
}

// var acc = document.getElementsByClassName("accordion");
// for (var i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// var acc = document.getElementsByClassName("accordion");
// for (var i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
var acc = document.getElementsByClassName("accordeon-item");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var li = this.closest(".accordeon-item"); // Находим ближайший li

    li.classList.toggle("active"); // Добавляем/убираем класс активного элемента

    // this.classList.toggle("active"); // Поворачиваем иконку
  });
}
