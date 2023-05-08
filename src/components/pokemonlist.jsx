import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pokemonlist.css";
import { Link } from "react-router-dom";
import pokebola from "../images/icons8-pokeball-48.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import background from "../common/colors";

const Pokemonlist = ({pokemons,setpokemons}) => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=500"
      );
      if (response.status === 200) {
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokemonResponse.data.sprites.other["home"].front_default,
              id: pokemonResponse.data.id ,
              type: pokemonResponse.data.types[0].type.name,
            };
          })
        );

        setpokemons(pokemonData);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  const getColor = (type) => {
    return background[type] || background["unknown"];
  };

  return (
    <div className="pokemons">
      <div className="list" >
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        pokemons.map((pokemon) => (
          <section
            className="pokemon-box"
            style={{
              backgroundColor: getColor(pokemon.type),
            }}
            key={pokemon.name}
          >
            <Link
              to={`/${pokemon.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6 style={{color:'white'}} ># {pokemon.id}</h6>
              <img
                className="image-pokemon"
                src={pokemon.image || pokebola}
                alt={pokemon.name}
              />
              <h6 style={{color:'white'}} >{pokemon.name.toUpperCase()}</h6>
            </Link>
          </section>
        ))
      )}
      </div>
    </div>
  );
};

export default Pokemonlist;
