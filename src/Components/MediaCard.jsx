import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Card = styled.div`
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb); /* Gradiente suave */
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(255, 182, 193, 0.4); /* Sombra delicada */
  width: 200px;
  margin: 15px;
  padding: 10px;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    width: 130px;
    margin: 10px auto;
  }

  &:hover {
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.5); /* Realce ao hover */
    transform: scale(1.05);
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leve sombra na imagem */
`;

const MediaTitle = styled.h2`
  font-size: 1.2em;
  color: #ff69b4; /* Rosa vibrante */
  font-family: 'Cursive', sans-serif;
  text-align: center;
  margin: 10px 0;
`;

const MediaRating = styled.p`
  color: #f4c10f; /* Cor dourada para a avaliação */
  font-size: 1em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }
`;

const MediaLink = styled(Link)`
  text-decoration: none;
  color: #ff1493; /* Rosa intenso */
  font-weight: bold;
  text-align: center;
  display: block;
  margin-top: 10px;

  &:hover {
    color: #ff69b4; /* Efeito de hover */
  }
`;

const imageUrl = import.meta.env.VITE_IMG;

const MediaCard = ({ media, type, showLink = true }) => {
  return (
    <Card>
      <MediaImage
        src={imageUrl + media.poster_path}
        alt={media.title || media.name}
      />
      <MediaTitle>{media.title || media.name}</MediaTitle>
      <MediaRating>
        <FaStar /> {media.vote_average}
      </MediaRating>
      {showLink && <MediaLink to={`/${type}/${media.id}`}>Detalhes</MediaLink>}
    </Card>
  );
};

export default MediaCard;
