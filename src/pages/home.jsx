import React, { useState } from "react";
import "../styles/home.css";
import Filter from "../components/filter";
import Pokemonlist from "../components/pokemonlist";

const Home = () => {
  const [pokemons, setpokemons] = useState([]);
  const [keyword, setkeyword] = useState('');
  return (
    <div className="home">
      <Filter
        pokemons={pokemons}
        setpokemons={setpokemons}
        keyword={keyword}
        setkeyword={setkeyword}
        className="filter"
      />
      <Pokemonlist
        pokemons={pokemons}
        setpokemons={setpokemons}
        className="pokemons"
      />
    </div>
  );
};

export default Home;
