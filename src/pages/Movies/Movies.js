import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormMovies from 'components/FormMovies/FormMovies';
import { getFilmSearch } from 'components/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader';

const Movies = () => {
  const [movie, setMovie] = useState([]);

  const [isLoader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovies = searchParams.get('query');

 useEffect(() => {
   setLoader(true);
   if (!searchMovies) return;
   try {
     const fetchFilmSearch = async () => {
       const searchMovie = await getFilmSearch(searchMovies);
       if (searchMovie.results.length === 0) {
         toast.error(`Oxxx, film not found ${searchMovies}`);
       } else {
         setMovie(searchMovie.results);
       }
     };
     fetchFilmSearch();
   } catch (error) {
     console.log(error);
   } finally {
     setLoader(false);
   }
 }, [searchMovies]);


  return (
    <>
      <FormMovies
        setSearchParams={setSearchParams}
        searchMovies={searchMovies}
      />
      {movie.length === 0 && (
        <p
          style={{
            color: 'white',
            fontWeight: '900',
            fontSize: '50px',
            marginTop: '10%',
            textAlign: 'center',
          }}
        >
          Your movies
          
        </p>
      )}
      {movie && <MoviesList filmsList={movie} />}
      {isLoader && <Loader />}
      <ToastContainer theme="colored" />
    </>
  );
};

export default Movies;
