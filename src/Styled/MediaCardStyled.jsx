export const containerStyles = `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb); /* Fundo rosa delicado */
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(255, 182, 193, 0.3); /* Sombra suave */

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 390px;
    width: 100%; 
    padding: 20px;
    justify-content: center;
  }
`;

export const moviesContainerStyles = `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 15px;
  }
`;

export const titleStyles = `
  font-size: 2rem;
  font-weight: bold;
  color: #ff69b4; /* Rosa vibrante */
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Cursive', sans-serif; /* Fonte charmosa */

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
`;
