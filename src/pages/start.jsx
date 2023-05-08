import React from "react";
import "../styles/start.css";
import Button from "@mui/material/Button";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";
import pokebola from '../images/icons8-pokeball-48.png'

const Start = () => {
  return (
    <div className="start">
      <section className="start-menu">
        <h1>Pokédex</h1>
        <img src={pokebola} />
        <Link to='home' >
          <Button
            variant="contained"
            color="error"
            sx={{ backgroundColor: "transparent", width: "150px" }}
            endIcon={<CatchingPokemonIcon />}
          >
            Start
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Start;
