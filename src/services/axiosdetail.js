import axios from "axios";

const getPokemon = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
}

export default getPokemon