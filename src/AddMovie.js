import React, { useContext, useState } from 'react';
import { MovieContext } from './movieContext';


const AddMovie = () => {
      const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

  


    const updateName = (e)=>{
        setName(e.target.value);
    }
    const updateId = (e)=>{
        setId(e.target.value);
    }
    const updatePrice = (e)=>{
        setPrice(e.target.value);
    }
    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovies=>[...prevMovies,{id:id,name:name,price:price}])
    }
    return (
        <form onSubmit={addMovie}>
            <input type="Number" name="id" value={id} onChange={updateId} placeholder="Movie id"/>
            <br/>
            <input type="text" name="name" value={name} onChange={updateName} placeholder="Movie name"/>
            <br/>
            <input type="Number" name="price" value={ price} onChange={updatePrice } placeholder="Movie price"/>
            <br/>
          <button>Add</button>
        </form>
    );
};

export default AddMovie;