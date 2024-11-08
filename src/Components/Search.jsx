import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;


const Button = styled.button`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ff69b4, #ffc0cb);
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #ffc0cb, #ff69b4);
    transform: scale(1.05);
  }
`;


const Icon = styled(FaSearch)`
  margin-right: 10px;
`;


const Input = styled.input`
  border: 2px solid #ff69b4;
  border-radius: 50px;
  padding: 10px 15px;
  font-size: 16px;
  outline: none;
  width: 250px;
  margin-right: 10px;
  transition: border-color 0.3s;

  ::placeholder {
    color: #ffb6c1;
  }

  &:focus {
    border-color: #ffc0cb;
  }
`;

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Busque um filme ou série"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Button type="submit">
        <Icon />
        Buscar
      </Button>
    </SearchContainer>
  );
}

export default Search;
