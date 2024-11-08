import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from '../Components/CardDetails';
import styled from 'styled-components';


const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.backgroundImage});
  opacity: 0.3;
  filter: grayscale(80%) blur(5px) brightness(0.7);
  mask-image: linear-gradient(180deg, transparent 10%, black 50%, transparent 90%);
  height: 100%;
  width: 100%;
`;


const PageContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.6), rgba(255, 240, 245, 0.8));
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  max-width: 900px;
`;


const Page = ({ backgroundImage, children }) => (
  <div style={{ position: 'relative', minHeight: '100vh' }}>
    <Background backgroundImage={backgroundImage} />
    <PageContainer>{children}</PageContainer>
  </div>
);

const Movie = () => {
  const { id, type } = useParams();
  const [movie, setMovie] = useState(null);
  const [tv, setTv] = useState(null);

  const imgURL = import.meta.env.VITE_IMG_BACK;
  const movieURL = import.meta.env.VITE_API;
  const tvURL = import.meta.env.VITE_API_SERIE;
  const apiKey = import.meta.env.VITE_API_KEY;

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
    }
  };

  const getTv = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTv(data);
    } catch (error) {
      console.error('Erro ao buscar série:', error);
    }
  };

  useEffect(() => {
    if (type === "movie") {
      const movieUrl = `${movieURL}${id}?api_key=${apiKey}&language=pt-BR`;
      getMovie(movieUrl);
    } else {
      const tvUrl = `${tvURL}${id}?api_key=${apiKey}&language=pt-BR`;
      getTv(tvUrl);
    }
  }, [id, type]);

  const backgroundImage = `${imgURL}${type === "movie" ? movie?.backdrop_path : tv?.backdrop_path}`;

  return (
    <Page backgroundImage={backgroundImage}>
      {(movie && type === "movie") && (
        <CardDetails key={movie.id} media={movie} type="movie" />
      )}
      {(tv && type === "tv") && (
        <CardDetails key={tv.id} media={tv} type="tv" />
      )}
    </Page>
  );
};

export default Movie;
