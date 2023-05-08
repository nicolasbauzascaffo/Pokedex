import axios from "axios";

const allPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000");
};

export default allPokemons;
