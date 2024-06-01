import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function useMovieContext() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }) {
  const [balance, setBalance] = useState(100000);
  const [beliFilm, setBeliFilm] = useState([]);

  function buyMovie(movieId, price) {
    if (!beliFilm.includes(movieId) && balance >= price) {
        if (price != null){
            setBalance(balance - price);
            setBeliFilm([...beliFilm, movieId]);
        }
    }
  }

  return (
    <MovieContext.Provider value={{ balance, setBalance, beliFilm, buyMovie }}>
      {children}
    </MovieContext.Provider>
  );
}
