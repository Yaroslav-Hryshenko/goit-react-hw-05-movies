import { useEffect, useState } from 'react';
import { getFilms } from '../../components/api';
import css from './Home.module.css';

import MoviesList from 'components/MoviesList/MoviesList';


const Home = () => {
  const [films, setFilms] = useState([]);
  

  useEffect(() => {
    try {
      const fetchFilm = async () => {
        const film = await getFilms();
        setFilms(film.results);
      };

      fetchFilm();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending Today :</h1>
      <MoviesList filmsList={films} />
    </>
  );
};

export default Home;
