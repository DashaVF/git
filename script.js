'use strict';

// презентация
// главное изображение
let mainPhoto = document.querySelector(".presentation-main");

// переменная содержащая все карточки-радиокнопки
let cards = document.querySelectorAll(".card-presenration")

// цикл обрабатывающий действие клик по блоку карточки
cards.forEach(function(card) {
    card.addEventListener("click", function(e) {
        let card = e.target.closest(".card-presenration")
        //получение пути к изображению, который отображен в карточке
        let src = card.querySelector("img").src;

        //изменение главного изображения
        mainPhoto.setAttribute("src", src)
    });
});

// слайдер
// тело слайдера
let slider = document.querySelector('.container-slider-body');
// кнопка вперед
let nextButton = document.querySelector('.button-slider-right');
// кнопка назад
let prevButton = document.querySelector('.button-slider-left');
// ширина слайда
let slideWidth = slider.querySelector('.card-slider').scrollWidth;
// слайдер + gap
slideWidth += 20;

nextButton.addEventListener('click', function(e) {
    slider.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', function(e) {
    slider.scrollLeft -= slideWidth;
}); 

// аккордеон
let cardsAccordion = document.querySelectorAll(".card-accordion");

cardsAccordion.forEach(cardAccordion => {
    cardAccordion.addEventListener("click", function (e) {
        let card = e.target.closest('.card-accordion');

        // переменная с иконкой
        let icon = card.querySelector("img");

        // переменная с телом карточки
        let cardBody = card.querySelector(".card-accordion-body");


        // проверка на то есть ли у элемента класс, говорящий о том что иконку развернули - раскрыли аккордеон
        if (icon.classList.contains("rotate-icon")) {
            // скрываем блок с ответами
            cardBody.classList.remove("card-accordion-body-animation");
            // удаляем класс анимации вращения
            icon.classList.remove("rotate-icon");
        } else {
            // запускаем анимацию раскрытия карточки аккордеона
            cardBody.classList.add("card-accordion-body-animation");
            //  добавляем анимацию вращения иконки
            icon.classList.add("rotate-icon");
        }

       
    })
});