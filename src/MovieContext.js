import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = () =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '510',
            id: '23124'
        },
        {
            name: 'Game of Thrones',
            price: '510',
            id: '2566124'
        },
        {
            name: 'Inception',
            price: '510',
            id: '23524'
        }
    ]);
    return(

    );
}