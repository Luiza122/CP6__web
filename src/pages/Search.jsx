import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MediaCard from "../Components/MediaCard";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb);
  min-height: 100vh;
`;


const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff69b4;
  text-shadow: 2px 2px #ffb6c1;
  font-family: 'Cursive', sans-serif;
  margin-bottom: 20px;
  text-align: center;

  .query-text {
    font-weight: bold;
    color: #ff1493;
  }
`;


const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;


const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;


const Loader = styled.div`
  border: 4px solid rgba(255, 182, 193, 0.5);
  border-top: 4px solid #ff69b4;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
  margin: 20px auto;
`;

const searchBaseURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [mediaResults, setMediaResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get("q");

  const getSearchedMedia = async () => {
    const searchWithQueryURL = `${searchBaseURL}?api_key=${apiKey}&query=${query}&language=pt-BR`;
    try {
      const res = await fetch(searchWithQueryURL);
      const data = await res.json();
      const sortedResults = data.results.sort((a, b) => b.popularity - a.popularity);
      setMediaResults(sortedResults);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      getSearchedMedia();
    }
  }, [query]);

  return (
    <Container>
      <Title>
        Resultados para: <span className="query-text">{query || "nada encontrado"}</span>
      </Title>
      {loading ? (
        <Loader />
      ) : (
        <MoviesContainer>
          {mediaResults && mediaResults.length > 0 ? (
            mediaResults.map((media) => (
              <MediaCard key={media.id} media={media} type="movie" />
            ))
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </MoviesContainer>
      )}
    </Container>
  );
};

export default Search;
