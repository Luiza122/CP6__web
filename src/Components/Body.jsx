import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Estilização do container de fundo
const BackgroundContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  mask-image: linear-gradient(180deg, transparent 2%, black 25%, black 75%, transparent 98%);
  opacity: 0.3;
  filter: saturate(0%) blur(5px) grayscale(80%);
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    position: relative;
    height: 50vh;
    opacity: 0.5;
    filter: saturate(20%) blur(3px) grayscale(50%);
  }
`;

const Body = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = import.meta.env.VITE_API;
        const response = await fetch(`${apiUrl}popular?api_key=${apiKey}`);
        const data = await response.json();

        const randomImage =
          data.results[Math.floor(Math.random() * data.results.length)].backdrop_path;
        const imageUrl = `${import.meta.env.VITE_IMG_BACK}${randomImage}`;

        setBackgroundImage(imageUrl);
      } catch (error) {
        console.error('Erro ao obter imagem da API do TMDb:', error);
      }
    };

    fetchRandomImage();
  }, [location]);

  const isMoviesOrTVPage = location.pathname.includes('/movie') || location.pathname.includes('/tv');

  // Não renderiza o Body se estiver na página "Movies" ou "TV"
  if (isMoviesOrTVPage) {
    return null;
  }

  return <BackgroundContainer backgroundImage={backgroundImage} />;
};

export default Body;
