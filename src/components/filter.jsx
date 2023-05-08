import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Filter = ({ pokemons, setpokemons }) => {
  const [keyword, setkeyword] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10000"
      );
      if (response.status === 200) {
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokemonResponse.data.sprites.other["home"].front_default,
              id: pokemonResponse.data.id,
              type: pokemonResponse.data.types[0].type.name,
            };
          })
        );

        setpokemons(pokemonData);
        setAllPokemons(pokemonData);
      }
    };
    fetchData();
  }, []);

  const search = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setkeyword(value);
    if (value === "") {
      setpokemons(allPokemons);
    } else {
      const filtered = allPokemons.filter((x) => {
        return x.name.toLowerCase().includes(value);
      });
      setpokemons(filtered);
    }
  };

  return (
    <TextField
      label="Search Pokémon"
      variant="outlined"
      color="error"
      fullWidth
      margin="normal"
      value={keyword}
      onChange={search}
    />
  );
};

export default Filter;
