const inputNode = document.querySelector('.js-add-movie-name');
const btnInputNode = document.querySelector('.js-btn-add-movie');
const listNode = document.querySelector('.js-movie-list');


let listMovies = [];

btnInputNode.addEventListener('click', function() {
    const movie = getMovieFromUser();

    if (!movie) {
        return;
    }

    trackList(movie);
    render();
});

function trackList(movie) {
    listMovies.push(movie);
};

function getMovieFromUser() {
    if (!inputNode.value) {
        alert('Добавить фильм');
        return null;
    }

    const movie = inputNode.value.trim();
    clearInput();
    return movie;
};

function clearInput() {
    inputNode.value = '';
};

function render() {
    listNode.innerHTML = '';

    listMovies.forEach((movie, index) => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        
        const iconMovie = document.createElement('div');
        iconMovie.className = 'icon-Movie';
        
        iconMovie.addEventListener('click', () => {
            crossOutMovie(movieItem, iconMovie);
        })
        const movieName = document.createElement('div');
        movieName.textContent = movie;
        movieName.className = 'movie-name';

        const deleteButton = document.createElement('div');
        deleteButton.className = 'delete-movie';
        const deleteIcon = document.createElement('img');
        deleteIcon.src = '../resources/close.png';
       
        deleteButton.addEventListener('click', () => {
            deleteMovie(index);
        })

    deleteButton.appendChild(deleteIcon);
    movieItem.appendChild(iconMovie);
    movieItem.appendChild(movieName);
    movieItem.appendChild(deleteButton);  
    listNode.appendChild(movieItem);

    })
}

function crossOutMovie(movieItem, iconMovie) {
movieItem.classList.toggle('cross_out_movie');
iconMovie.classList.toggle('cross_out_type');
}

function deleteMovie(index) {
    listMovies.splice(index,1);
    render()
}

