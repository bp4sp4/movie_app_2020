import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
<<<<<<< HEAD
import {Link} from 'react-router-dom';

function Movie({ year, title, summary, poster, genres, rating}){
    return (
        <div className="movie">
            <Link
            to = {{
                pathname: '/movie-detail',
                state :  { year , title, summary, poster, genres, rating},
            }}
            >
=======

function Movie({ year, title, summary, poster, genres }){
    return (
        <div className="movie">
>>>>>>> f10b82aa37eddf127db96d8b8fb137ce041b38a8
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title" >{title} </h3>
                <h5 className="movie__year">{year}</h5>
<<<<<<< HEAD
                <h5 className="movie__rating">{rating}</h5>
=======
>>>>>>> f10b82aa37eddf127db96d8b8fb137ce041b38a8
                <ul className="movie__genres">
                    {genres.map((genre, index)=>{
                        return (
                        <li key={index} className="movie__genre">
                            {genre}
                        </li>
                    );
                })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
<<<<<<< HEAD
            </Link>
=======
>>>>>>> f10b82aa37eddf127db96d8b8fb137ce041b38a8
        </div>
    ); 
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
<<<<<<< HEAD
    rating : PropTypes.string.isRequired,
=======
>>>>>>> f10b82aa37eddf127db96d8b8fb137ce041b38a8
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie; 