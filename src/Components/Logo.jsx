import React from 'react';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';


const StyledLogo = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 50px;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb); /* Gradiente suave */
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.5); /* Sombra delicada */

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;


const CameraIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #ff69b4; /* Rosa vibrante */
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;


const StyledH1 = styled.h1`
  font-size: 1.8rem;
  color: #ff1493; /* Rosa mais intenso */
  font-family: 'Cursive', sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <CameraIcon icon={faVideo} />
      <StyledH1>DevCine</StyledH1>
    </StyledLogo>
  );
};

export default Logo;
