import React, { useState ,useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './movieContext'
const Movies = () => {
    const [movies, setMovies] = useContext(MovieContext);
    // const [movies, setMovies] = useState([
    //     {
    //         name: "Harry Porter",
    //         price: "$10",
    //         id: 5343
    //     },
    //     {
    //         name: "Harry Porter2",
    //         price: "$60",
    //         id: 3343
    //     },
    //     {
    //         name: "Sharlocs homs",
    //         price: "$20",
    //         id: 2243
    //     },
    //     {
    //         name: "Move ma",
    //         price: "$30",
    //         id: 5123
    //     }
         
    // ]);


    return (
        <div>
            {/* <h2>Movies info in movies component</h2>
              {
                movies.map((movie) => (<p>{movie.name}key={ movie.id}</p> ))
            } */}
                 <h2>Movies info By ContextApi</h2>
            {
                movies.map((movie) => <Movie movie={movie} key={ movie.id}/>)
            }
          
      
        </div>
    );
};

export default Movies;