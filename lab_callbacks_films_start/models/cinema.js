const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllFilmTitles = function(){
  const filmTitles = this.films.map((film) => film.title);
  return filmTitles;
}

Cinema.prototype.findFilmByTitle = function(title){
  const found = this.films.find(film => film.title.toLowerCase() === title.toLowerCase());
  return found;
}

Cinema.prototype.filterFilmsByGenre = function(genre){
  const filmsOfGenre = this.films.filter(film => film.genre.toLowerCase() === genre.toLowerCase());
  return filmsOfGenre;
}

Cinema.prototype.filmsFromYear = function(year){
  return this.films.some(film => film.year === year)
}

Cinema.prototype.allFilmsOverLength = function(length){
  return this.films.every(film => film.length > length)
}

Cinema.prototype.runTimeOfAllFilms = function() {
  const total = this.films.reduce((runningTotal, film) => runningTotal + film.length, 0);
  return total;
}

Cinema.prototype.filmsByProperty = function(property, value){
  const filmsOfProperty = this.films.filter((film) => film[property] === value)
  return filmsOfProperty
}


module.exports = Cinema;
