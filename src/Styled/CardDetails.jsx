export const ContainerStyled = `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb); /* Fundo rosa delicado */
  border-radius: 20px; /* Bordas fofas */
  box-shadow: 0 8px 20px rgba(255, 182, 193, 0.5); /* Sombra suave e rosa */

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
    width: 100%;
    justify-content: center;
  }
`;

export const CardStyled = `
  display: flex;
  flex-direction: column; /* Colocado em coluna para parecer mais fofo */
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  background: white;
  border-radius: 20px; /* Bordas fofas */
  box-shadow: 0 6px 15px rgba(255, 105, 180, 0.4); /* Sombra rosa */
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
  }
`;

export const MediaImageStyled = `
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4); /* Sombra fofa rosa */

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
    margin-top: 15px;
  }
`;

export const MediaTitleStyled = `
  font-size: 2rem;
  font-weight: bold;
  color: #ff69b4; /* Rosa vibrante */
  font-family: 'Cursive', sans-serif; /* Fonte fofinha */
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MediaRatingStyled = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 1.5rem;
  color: #f4c10f; /* Dourado */
  background: #ffe4e1; /* Fundo rosa claro */
  padding: 5px 10px;
  border-radius: 10px; /* Bordas fofas */

  svg {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const MediaLinkStyled = `
  text-decoration: none;
  color: #ff1493; /* Rosa intenso */
  font-weight: bold;
  font-size: 1.2rem;
  background: #ffc0cb; /* Fundo rosa suave */
  padding: 8px 15px;
  border-radius: 15px; /* Bordas fofinhas */
  transition: all 0.3s ease;

  &:hover {
    background: #ff69b4; /* Rosa vibrante ao passar o mouse */
    color: white;
    text-decoration: underline;
  }
`;

export const MediaSinopseStyled = `
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: justify;
  line-height: 1.8;
  color: #555;
  background: rgba(255, 182, 193, 0.2); /* Fundo rosa suave */
  padding: 10px;
  border-radius: 10px; /* Bordas fofas */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ElencoStyled = `
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #ff69b4; /* Rosa vibrante */
    margin-bottom: 20px;
    font-family: 'Cursive', sans-serif; /* Fonte fofinha */

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    gap: 15px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #ffe4e1; /* Fundo rosa */
      border-radius: 20px; /* Bordas fofas */
      box-shadow: 0 6px 15px rgba(255, 182, 193, 0.4); /* Sombra rosa */
      overflow: hidden;
      padding: 15px;

      img {
        width: 120px;
        height: 180px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(255, 105, 180, 0.3);
        margin-bottom: 10px;
      }

      h1 {
        font-size: 1rem;
        color: #555;
        margin-bottom: 5px;
        text-align: center;
      }

      p {
        font-size: 0.9rem;
        color: #777;
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      gap: 10px;

      li {
        img {
          width: 80px;
          height: 120px;
        }

        h1 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
