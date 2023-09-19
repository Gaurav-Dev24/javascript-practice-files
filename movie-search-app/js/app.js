// This will call Most popular movies
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// Universal selectors
const movieBox = document.querySelector("#movie-box");

// This will call serached movies
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// Function to fetch the data from the movie api
const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  showMovies(data.results);
};

// Function for showing the movies in the card
const showMovies = (data) => {
    movieBox.innerHTML = ""; // reset the main box as it has previous searched movies

  data.forEach((item) => {
    // console.log(item)
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <img src="${IMGPATH + item.poster_path}" alt="${item.title}">
        <div class="overlay">
            <div class="title">
                <h2>${item.original_title}</h2>
                <span>${item.vote_average.toFixed(1)}</span> 
            </div>
            <h3>Overview</h3>
            <p>${item.overview}</p>
        </div>
        `;
        movieBox.appendChild(box);
  });
};


// event handler for searching
document.querySelector("#search").addEventListener(
    "keyup",
    function(event){
        // console.log(event) --> this line will tell what event has been occurred
        // console.log(event.target) --> this line will tell which element in dom is targeted with the event
        if(event.target.value != ""){
            getMovies(SEARCHAPI + event.target.value); //searched movies
        }else{
            getMovies(APIURL); // popular movies
        };
    }
)
// initial call when the page loaded
getMovies(APIURL);
