import React, { useContext } from 'react';
import "./nav.css"
import { MovieContext } from './movieContext';
  
   
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);


    return (
        <>
            <nav>
                <h1>Movies Mania</h1>
                
                <ul>
                    <a href="/"> <li>List of movies : <span>{ movies.length}</span> </li></a>
                </ul>
            </nav>
        </>
    );
};

export default Nav;