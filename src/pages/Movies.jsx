import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MediaCard from '../Components/MediaCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb);
  min-height: 100vh;
`;

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff69b4;
  text-shadow: 2px 2px #ffb6c1;
  font-family: 'Cursive', sans-serif;
  margin-bottom: 20px;
  text-align: center;
`;

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const getTopRated = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTopRatedMovies(data.results);
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
    }
  };

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    getTopRated(topRatedUrl);
  }, []);

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    const interval = setInterval(() => {
      getTopRated(topRatedUrl);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>🎀 Filmes Bem Avaliados 🎀</Title>
      <MoviesContainer>
        {topRatedMovies.length > 0 &&
          topRatedMovies.map((media) => <MediaCard key={media.id} media={media} type="movie" />)}
      </MoviesContainer>
    </Container>
  );
};

export default Movies;
