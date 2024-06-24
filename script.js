'use strict';

// презентация
// главное изображение
let mainPhoto = document.querySelector(".presentation-main");

// переменная содержащая все карточки-радиокнопки
let cards = document.querySelectorAll(".card-presenration")

// цикл обрабатывающий действие клик по блоку карточки
cards.forEach(function(card) {
    card.addEventListener("click", function(e) {
        //получение пути к изображению, который отображен в карточке
        let src = e.target.children[0].src;
        console.log(src)
        //изменение главного изображения
        mainPhoto.setAttribute("src", src)
    });
});

// переменная с названиями карточек
let clickTitle = document.querySelectorAll(".title-presentation")

// цикл обрабатывающий действие клик по названию карточки
clickTitle.forEach(function(title) {
    title.addEventListener("click", function(e) {
        //получение пути к изображению, который отображен в карточке при клике по названию
        let src = e.target.previousElementSibling.src;

        //изменение главного изображения
        mainPhoto.setAttribute("src", src)
    });
});

// переменная с изображением карточки
let clickImg = document.querySelectorAll(".img-presentation")

// цикл обрабатывающий действие клик по ищображению в карточке
clickImg.forEach(function(img) {
    img.addEventListener("click", function(e) {
        //получение пути к изображению, который отображен в карточке при клике по названию
        let src = e.target.src;
        
        //изменение главного изображения
        mainPhoto.setAttribute("src", src)
    });
});

// слайдер

// аккордион