import React,{ useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'
function App() {
    
  const [movie, setMovie] = useState([]);
       
  function fetchMovieHandler() {
    fetch('https://swapi.dev/api/films/').then((responses) =>{
     return responses.json();
    }).then((dataResults) =>{
     const transformedMovie = dataResults.results.map(moviData =>{
        return{
         id: moviData.episode_id,
         title: moviData.title,
         openingText: moviData.opening_crawl,
         releaseDate:moviData.release_date
        }
      });
      setMovie(transformedMovie);
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
