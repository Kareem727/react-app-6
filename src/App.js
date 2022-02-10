import React,{ useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'
function App() {
    
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
       
  async function fetchMovieHandler() {
    setLoading(true);
   const responses = await fetch('https://swapi.dev/api/films/');
   const dataResults= await responses.json();
   
     const transformedMovie = dataResults.results.map(moviData =>{
        return{
         id: moviData.episode_id,
         title: moviData.title,
         openingText: moviData.opening_crawl,
         releaseDate:moviData.release_date
        }
      });
      setMovie(transformedMovie);
      setLoading(false);
    }  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {  loading &&  <p>Loading ....</p>} {/* means that its true */}
        { !loading && movie.length > 0 && <MoviesList movies={movie} />}{/* means that its false */}
        { !loading && movie.length === 0 && <p>No Movies Found</p>}  
      </section>
    </React.Fragment>
  );
}

export default App;
