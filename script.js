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

const movies = Object.values(movieData);
document.getElementById("films").innerHTML = '';
 for (const movie of movies) {
   let Datamovie = document.createElement('div');
   Datamovie.innerHTML = `<h2>${Object.keys(movieData).find(key => movieData[key] === movie)}</h2><p>Rating: ${movie.rating}</p><p>Runtime: ${movie.runtime}</p><p>Year: ${movie.year}</p><p>Cast: ${movie.cast.join(', ')}</p><p>Plot: ${movie.plot}</p>`;
   document.getElementById("films").appendChild(Datamovie);
 }

let sortMethod = null;


function sortMovies(newSortMethod = null) {
  if (newSortMethod !== null) {
    sortMethod = newSortMethod;
  }
  const movies = Object.values(movieData);
  if (sortMethod !== null) {
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
  }
 
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

const form = document.getElementById("add-movie-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById("title").value;
  const rating = parseFloat(document.getElementById("rating-number").value);
  const runtime = document.getElementById("runtime-number").value;
  const year = document.getElementById("year-number").value;
  const cast = document.getElementById("cast").value.split(",");
  const plot = document.getElementById("plot").value;

  // Create a new movie object
  const newMovie = {
    rating,
    runtime,
    year,
    cast,
    plot,
  };

  // Add the new movie object to the movieData object using the title as the key
  movieData[title] = newMovie;

  // Clear the form fields
  form.reset();

  sortMovies();
  
});