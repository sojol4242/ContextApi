import React, { useState ,createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
      const [movies, setMovies] = useState([
        {
            name: "Harry Porter",
            price: 45,
            id: 5343
        },
        {
            name: "Harry Porter2",
            price: 20,
            id: 3343
        },
        {
            name: "Sharlocs homs",
            price: 56,
            id: 2243
        },
        {
            name: "Move ma",
            price: 32,
            id: 5123
        }
         
    ]);

    return (
        <>
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </>
    );
};

  