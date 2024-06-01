import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Pagination from './components/pagination';
import Action from './components/ActionButton';
import Description from './components/description';
import Image from './components/image';
import Detail from './pages/detail';
import { MovieProvider, useMovieContext } from './context/movieContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            include_adult: 'false',
            include_video: 'false',
            language: 'id-ID',
            region: 'ID',
            'release_date.gte': '2024-05-01',
            'release_date.lte': '2024-05-31',
            'primary_release_date.gte': '2024-05-01',
            'primary_release_date.lte': '2024-05-31',
            page: page,
            sort_by: 'primary_release_date.desc',
            api_key: 'cb24983c6a4172bc0f5defd2107fecb5',
          },
        });

        if (response.data.results.length === 0 && page !== 1) {
          setPage(1); // Set page to 1 if no data is found
        } else {
          setMovies(response.data.results);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies();
  }, [page]);

  function prev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function next() {
    setPage(page + 1);
  }

  function getPrice(vote_average) {
    if (vote_average > 8) {
      return 21250;
    } else if (vote_average > 6 && vote_average <= 8) {
      return 16350;
    } else if (vote_average > 3 && vote_average <= 6) {
      return 8250;
    } else if (vote_average >= 1 && vote_average <= 3) {
      return 3500;
    } else {
      return null;
    }
  }

  return (
    <MovieProvider>
      <Router>
        <HeaderComponent />
        <div className="app-container">
          <Routes>
            <Route path="/" element={
              <>
                <div className="movie-container">
                  {movies.map((movie) => (
                    <div className="card" key={movie.id}>
                      <Image poster={movie.poster_path} title={movie.original_title} />
                      <div className="card-content">
                        <Description title={movie.original_title} rating={movie.vote_average} date={movie.release_date} price={getPrice(movie.vote_average)} />
                        <Action movieid={movie.id} price={getPrice(movie.vote_average)} />
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination page={page} prev={prev} next={next} />
              </>
            } />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </MovieProvider>
  );
}

function HeaderComponent() {
  const { balance } = useMovieContext();
  return <Header saldo={balance} />;
}

export default App;
