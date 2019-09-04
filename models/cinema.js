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

Cinema.prototype.findFilmsByGenre = function(genre){
  const filmByGenre = this.films.filter(film => {
    return film.genre === genre
  })
  return filmByGenre
}

Cinema.prototype.findFilmByYear = function(year){
  const filmByYear = this.films.filter(film => {
    return film.year === year
  })
  if (filmByYear === year){
    return true
  } else {
    return false
  }
}


module.exports = Cinema;
