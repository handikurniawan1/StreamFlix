// components/ActionButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../context/movieContext';

function Action({ movieid, price }) {
  const navigate = useNavigate();
  const { buyMovie, beliFilm } = useMovieContext();

  const isPurchased = beliFilm.includes(movieid);

  const handlePreview = () => {
    navigate(`/detail/${movieid}`, { state: { price } });
  };
  const isPriceAvailable = typeof price === 'number';

  return (
    <div className="actionButton">
      <button className="action" onClick={handlePreview}>Preview</button>
      {isPriceAvailable &&(
        <button 
            className="action" 
            onClick={() => buyMovie(movieid, price)}
            disabled={isPurchased}>
            {isPurchased ? 'Purchased' : 'Buy'}
        </button>
      )}
    </div>
  );
}

export default Action;
