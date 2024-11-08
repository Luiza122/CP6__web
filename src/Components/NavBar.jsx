import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';


const Nav = styled.nav`
    background: linear-gradient(to bottom, #ffc0cb, transparent 80%);
    padding: 10px 0;
    box-shadow: 0 4px 8px rgba(255, 182, 193, 0.3);
`;


const Navbar = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;


const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;


const LinkStyled = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    color: #ff69b4;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: #ff1493;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;


const NavBar = () => {
    return (
        <Nav>
            <Navbar>
                <LinkStyled to="/">
                    <Logo />
                </LinkStyled>
                <Options>
                    <LinkStyled to="/Movies/">🎬 Filmes</LinkStyled>
                    <LinkStyled to="/serie/">📺 Séries</LinkStyled>
                </Options>
                <Search />
            </Navbar>
        </Nav>
    );
};

export default NavBar;
