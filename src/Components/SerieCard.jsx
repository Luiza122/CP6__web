import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';


const Card = styled.div`
    width: 200px;
    border: 1px solid rgba(255, 182, 193, 0.4);
    border-radius: 15px;
    margin: 15px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(255, 182, 193, 0.5);
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #ffe4e1, #ffc0cb);

    @media (max-width: 600px) {
        width: 140px;
        margin: 10px auto;
    }

    &:hover {
        box-shadow: 0 6px 15px rgba(255, 105, 180, 0.5);
        transform: scale(1.05);
    }
`;


const MediaImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const Title = styled.h2`
    font-size: 1.2em;
    margin: 10px 0;
    color: #ff69b4;
    font-family: 'Cursive', sans-serif;
    text-align: center;
`;


const Rating = styled.p`
    color: #f4c10f;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    svg {
        margin-right: 5px;
    }
`;


const LinkDetails = styled(Link)`
    text-decoration: none;
    color: #ff1493;
    font-weight: bold;
    display: block;
    text-align: center;
    margin-top: 10px;

    &:hover {
        color: #ff69b4;
        text-decoration: underline;
    }
`;

const SerieCard = ({ serie, showLink = true }) => {
    return (
        <Card>
            <MediaImage 
                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} 
                alt={serie.name} 
            />
            <Title>{serie.name}</Title>
            <Rating>
                <FaStar /> {serie.vote_average}
            </Rating>
            {showLink && <LinkDetails to={`/serie/${serie.id}`}>Detalhes</LinkDetails>}
        </Card>
    );
};

export default SerieCard;
