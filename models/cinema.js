const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function(film){
  const filmTitles = this.films.map(function(film){
    return film.title
  })
  return filmTitles
}

Cinema.prototype.findFilmByTitle = function(title){
  const filmByTitle = this.films.filter(film => {
    return film.title === title
  })
  return filmByTitle[0]
}

Cinema.prototype.findFilmByGenre = function(genre){
  const filmByGenre = this.films.filter(film => {
    return film.genre === genre
  })
  return filmByGenre[0]
}

module.exports = Cinema;
