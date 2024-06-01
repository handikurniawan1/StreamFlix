
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useMovieContext } from '../context/movieContext';
import Header from '../components/header';
import Footer from '../components/footer';
import './detail.css'

function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const { balance, beliFilm, buyMovie } = useMovieContext();
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const price = location.state?.price;
  const isPurchased = beliFilm.includes(parseInt(id));

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: 'cb24983c6a4172bc0f5defd2107fecb5',
          },
        });
        setDetails(detailResponse.data);

        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: {
            api_key: 'cb24983c6a4172bc0f5defd2107fecb5',
          },
        });
        setCredits(creditsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  if (!details || !credits) {
    return <div>Loading...</div>;
  }

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours} hours ${minutes} minutes`;
  };

  const handleBuy = () => {
    buyMovie(parseInt(id), price);
  };

  const isPriceAvailable = typeof price === 'number';

  return (
    <>
      <div className="detail-container">
        <div className="detail-header">
          <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.original_title} />
          <div>
            <h1 className="detail-title">{details.original_title}</h1>
            <p className="detail-runtime">Duration: {formatRuntime(details.runtime)}</p>
          </div>
        </div>
        <p className="detail-overview">{details.overview}</p>
        <div className="detail-cast">
          <h2>Cast:</h2>
          <ul>
            {credits.cast && credits.cast.map((member) => (
              <li key={member.cast_id}>
                {member.name} as {member.character}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="detail-price">Price: {isPriceAvailable ? price.toLocaleString('id-ID') : 'Not Available'}</h2>
        {isPriceAvailable && (
          <div className="detailAction">
            <button
              className="Detailbuy"
              onClick={handleBuy}
              disabled={isPurchased}
            >
              {isPurchased ? 'Purchased' : 'Buy'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
