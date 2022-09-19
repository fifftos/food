/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Дюна",
        "Гнев человеческий",
        "Главный герой",
        "Круэлла",
        "Майор Гром: Чумной доктор"
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      name = document.querySelector('.promo__title'),
      movieList = document.querySelector('.promo__interactive-list'),
      genre = poster.querySelector('.promo__genre');


adv.forEach(item => {
    item.remove();
});

// adv.forEach(function (item)  {
//     item.remove();
// });

genre.textContent = 'супергероика';
name.textContent = 'Лига Справедливости Зака Снайдера';

poster.style.backgroundImage = 'url("img/jl.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach ((film, i) => {
              movieList.innerHTML += `
              <li class="promo__interactive-item">${i + 1} ${film}
              <div class="delete"></div>
             </li>
              `;
});

