import React, { useEffect, useState } from 'react';
import MediaCard from '../Components/MediaCard';
import styled from 'styled-components';

// Fundo rosa claro com gradiente
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb);
  min-height: 100vh;
`;

// Título com estilo delicado
const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff69b4;
  text-shadow: 2px 2px #ffb6c1;
  font-family: 'Cursive', sans-serif;
  margin-bottom: 20px;
  text-align: center;
`;

// Container para os cards, com layout em grid
const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const serieURL = import.meta.env.VITE_API_SERIE;
const apiKey = import.meta.env.VITE_API_KEY;

const Serie = () => {
  const [popularSeries, setPopularSeries] = useState([]);

  const getPopular = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPopularSeries(data.results);
    } catch (error) {
      console.error('Error fetching popular series:', error);
    }
  };

  useEffect(() => {
    const popularUrl = `${serieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    getPopular(popularUrl);
  }, []);

  useEffect(() => {
    const popularUrl = `${serieURL}top_rated?api_key=${apiKey}&language=pt-BR`;
    const interval = setInterval(() => {
      getPopular(popularUrl);
    }, 60000); // Atualiza a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>📺 Séries Bem Avaliadas 📺</Title>
      <MoviesContainer>
        {popularSeries.map((media) => (
          <MediaCard key={media.id} media={media} type="tv" />
        ))}
      </MoviesContainer>
    </Container>
  );
};

export default Serie;
