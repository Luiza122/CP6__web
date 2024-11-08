import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb);
  min-height: 100vh;
  border-radius: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.3);
  padding: 20px;
  width: 90%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const MediaImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const MediaTitle = styled.h2`
  font-size: 1.8rem;
  color: #ff69b4;
  font-family: 'Cursive', sans-serif;
  margin-bottom: 15px;
  text-align: center;
`;

const MediaSinopse = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
  line-height: 1.6;
`;

const MediaRating = styled.p`
  color: #f4c10f;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    margin-right: 5px;
  }
`;

const MediaLink = styled(Link)`
  text-decoration: none;
  color: #ff1493;
  font-weight: bold;

  &:hover {
    color: #ff69b4;
    text-decoration: underline;
  }
`;

const Elenco = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.3);
  padding: 20px;
  width: 90%;
  max-width: 800px;

  h2 {
    color: #ff69b4;
    font-family: 'Cursive', sans-serif;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
  }

  li {
    text-align: center;
    font-size: 0.9rem;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 1rem;
      color: #555;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.9rem;
      color: #777;
    }
  }
`;

const imageUrl = import.meta.env.VITE_IMG;
const movieURL = import.meta.env.VITE_API;
const tvURL = import.meta.env.VITE_API_SERIE;
const apiKey = import.meta.env.VITE_API_KEY;

const CardDetails = ({ media, type, showLink = false }) => {
  const [movie, setMovie] = useState(null);
  const [tv, setTv] = useState(null);

  const getDetailsMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const getDetailsTv = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTv(data);
  };

  useEffect(() => {
    if (type === 'movie') {
      const movieUrl = `${movieURL}${media.id}/credits?api_key=${apiKey}&language=pt-BR`;
      getDetailsMovies(movieUrl);
    } else {
      const tvUrl = `${tvURL}${media.id}/credits?api_key=${apiKey}&language=pt-BR`;
      getDetailsTv(tvUrl);
    }
  }, []);

  return (
    <Container>
      <Card>
        <MediaImage src={imageUrl + media.poster_path} alt={media.title || media.name} />
        <MediaTitle>{media.title || media.name}</MediaTitle>
        <MediaSinopse>{media.overview}</MediaSinopse>
        <MediaRating>
          <FaStar /> {media.vote_average}
        </MediaRating>
        {showLink && <MediaLink to={`/${type}/${media.id}`}>Detalhes</MediaLink>}
      </Card>
      <Elenco>
        <h2>Elenco</h2>
        <ul>
          {(movie?.cast || tv?.cast)?.slice(0, 15).map((cast) => (
            <li key={cast.id}>
              <img src={imageUrl + cast.profile_path} alt={cast.name} />
              <h1>{cast.name}</h1>
              <p>{cast.character}</p>
            </li>
          ))}
        </ul>
      </Elenco>
    </Container>
  );
};

export default CardDetails;
