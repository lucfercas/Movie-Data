let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

 console.log(movieData["The Darjeeling Limited"].rating);

//  const movies = Object.values(movieData);
//  const title = Object.keys(movieData['Fantastic Mr. Fox', 'The Darjeeling Limited', 'The Royal Tenenbaums', 'The Grand Budapest Hotel']);
 
//  function sortMovies(sortMethod) {
//      switch (sortMethod) {
//        case 'year':
//          movies.sort((a, b) => b.year - a.year);
//          break;
//        case 'runtime':
//          movies.sort((a, b) => b.runtime - a.runtime);
//          break;
//        case 'rating':
//          movies.sort((a, b) => b.rating - a.rating);
//          break;
//        default:
//          break;
//      }
//  }

// const movies = Object.values(movieData);
//try to create a var title para los titulos de las pelis. Ejemplo: let title = Object.keys(movieData) y luego usalo en el loop: ${title.find(key => movieData[key] === movie)}

const movies = Object.values(movieData);
document.getElementById("films").innerHTML = '';
 for (const movie of movies) {
   let Datamovie = document.createElement('div');
   Datamovie.innerHTML = `<h2>${Object.keys(movieData).find(key => movieData[key] === movie)}</h2><p>Rating: ${movie.rating}</p><p>Runtime: ${movie.runtime}</p><p>Year: ${movie.year}</p><p>Cast: ${movie.cast.join(', ')}</p><p>Plot: ${movie.plot}</p>`;
   document.getElementById("films").appendChild(Datamovie);
 }

function sortMovies(sortMethod) {
  const movies = Object.values(movieData);
  switch (sortMethod) {
    case 'year':
      movies.sort((a, b) => b.year - a.year);
      break;
    case 'runtime':
      movies.sort((a, b) => b.runtime - a.runtime);
      break;
    case 'rating':
      movies.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  // Clear the movie-info div before adding the sorted movies
  document.getElementById("films").innerHTML = '';
  for (const movie of movies) {
    let Datamovie = document.createElement('div');
    Datamovie.innerHTML = `<h2>${Object.keys(movieData).find(key => movieData[key] === movie)}</h2><p>Rating: ${movie.rating}</p><p>Runtime: ${movie.runtime}</p><p>Year: ${movie.year}</p><p>Cast: ${movie.cast.join(', ')}</p><p>Plot: ${movie.plot}</p>`;
    document.getElementById("films").appendChild(Datamovie);
  }
}

const ratingButton = document.getElementById("rating");
ratingButton.addEventListener("click", function() {
  sortMovies('rating');
});

const runtimeButton = document.getElementById("runtime");
runtimeButton.addEventListener("click", function() {
  sortMovies('runtime');
});

const yearButton = document.getElementById("year");
yearButton.addEventListener("click", function() {
  sortMovies('year');
});