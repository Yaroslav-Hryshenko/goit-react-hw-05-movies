import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsId } from '../../components/api';
import MovieDetailsPage from 'components/MoviePage/MoviePage';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [films, setFilms] = useState({});

  useEffect(() => {
    if (!moviesId) return;
    try {
      const fetchFilmList = async () => {
        const film = await getFilmsId(moviesId);
        setFilms(film);
      };
      fetchFilmList();
    } catch (error) {
      console.log(error);
    }
  }, [moviesId]);

  return <MovieDetailsPage films={films} moviesId={moviesId} />;
};

export default MovieDetails;
