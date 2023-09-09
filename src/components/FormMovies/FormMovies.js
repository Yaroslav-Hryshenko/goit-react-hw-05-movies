import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './FormMovies.module.css';


const FormMovies = ({ setSearchParams, searchMovies }) => {
  
  const onSubmitInput = ev => {
    ev.preventDefault();

    
    const value = ev.target.search.value;
    if (searchMovies === value) {
      return toast.warn(
        `You are already viewing movies with the title '${value}'`
      );
    } 
    setSearchParams({
      query: value,
    });
    

    
  };

  return (
    <>
      <form className={css.movie_form} onSubmit={onSubmitInput}>
        <div className={css.movie_wrap}>
          <input
            className={css.movie_input}
            type="text"
            name="search"
            required
          
          />
          <button className={css.movie_btn} type="submit">
            &#128269;
          </button>
        </div>
      </form>
      <ToastContainer theme="colored" />
    </>
  );
};
export default FormMovies;

FormMovies.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
