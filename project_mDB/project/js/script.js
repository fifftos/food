'use strict';

document.addEventListener('DOMContentLoaded',() => {
    const movieDB = {
        movies: [
            "Дюна",
            "Аватар",
            "Главный герой",
            "Круэлла",
            "Мстители"
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          name = document.querySelector('.promo__title'),
          movieList = document.querySelector('.promo__interactive-list'),
          genre = poster.querySelector('.promo__genre'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding_input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

          addForm.addEventListener('submit',(event) => {
                event.preventDefault();

                let newFilm = addInput.value;
                const favorite = checkbox.checked;

                if (newFilm) {
                    if (newFilm.length > 21) {
                        newFilm = `${newFilm.substring(0, 22)}...`;
                    }
                    if (favorite) {
                        console.log("Добавляем любимый фильм");
                    }
                   movieDB.movies.push(newFilm);
                   sortArr(movieDB.movies);
                
                   createMovieList(movieDB.movies, movieList);
                }
                event.target.reset();
          });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
            });
            
          };
        
  
    const makeChanges = () => {
        genre.textContent = 'супергероика';
        name.textContent = 'Лига Справедливости Зака Снайдера';
    
        poster.style.backgroundImage = 'url("img/jl.jpg")';
         };
         
        
    const sortArr = (arr) => {
        arr.sort();
    };
    

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        
        films.forEach ((film, i) => {
                      parent.innerHTML += `
                      <li class="promo__interactive-item">${i + 1} ${film}
                      <div class="delete"></div>
                     </li>
                      `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);

                createMovieList(films, parent);
            });
        });
    }
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
});


