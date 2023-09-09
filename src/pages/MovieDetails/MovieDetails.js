import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsId } from '../../components/api';
import MovieDetailsPage from 'components/MovieDetailsPage/MovieDetailsPage';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [film, setFilms] = useState({});

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

  return <MovieDetailsPage films={film} moviesId={moviesId} />;
};

export default MovieDetails;
