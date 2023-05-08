import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getPokemon from "../services/axiosdetail";
import pokeball from "../images/icons8-pokeball-100.png";
import "../styles/pokemondetail.css";
import arrow from "../images/arrow_back.png";
import right from "../images/right.png";
import left from "../images/left.png";
import background from "../common/colors";
import v1 from "../images/Vector (1).png";
import v2 from "../images/Vector (2).png";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const Pokedetail = () => {
  const [pokemon, setpokemon] = useState(null);
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemon(pokemonName)
      .then((response) => {
        if (response.status === 200) {
          setpokemon(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pokemonName]);

  const getColor = (type) => {
    return background[type] || background["unknown"];
  };

  const nextPokemon = () => {
    getPokemon(pokemon.id + 1).then((response) => {
      if (pokemon.id < 10242) {
        setpokemon(response.data);
        navigate(`/${response.data.id}`);
      }
    });
  };

  const prevPokemon = () => {
    getPokemon(pokemon.id - 1).then((response) => {
      if (pokemon.id > 0) {
        setpokemon(response.data);
        navigate(`/${response.data.id}`);
      }
    });
  };

  return (
    <div className="pokemondetail">
      {pokemon ? (
        <section
          style={{
            backgroundColor: getColor(pokemon?.types[0]?.type?.name),
          }}
          className="pokemon-card"
        >
          <section className="title-section">
            <Link to="/home">
              <img src={arrow} />
            </Link>
            <h3>{pokemon.name.toUpperCase()[0] + pokemon.name.substring(1)}</h3>
            <h5># {pokemon.id}</h5>
          </section>
          <section className="arrow-section">
            <button
              onClick={prevPokemon}
              disabled={pokemon.id === 1}
              className="arrow"
              style={{backgroundColor:'transparent', border:'none'}}
            >
              <img src={left} alt="Arrow Left" />
            </button>

            <button
              onClick={nextPokemon}
              disabled={pokemon.id === 10242}
              className="arrow"
              style={{backgroundColor:'transparent', border:'none'}}
            >
              <img src={right} alt="Arrow Left" />
            </button>
          </section>
          <img
            className="avatar"
            src={pokemon.sprites.other["home"].front_default || pokeball}
          />
          <img className="pokeball" src={pokeball} />
          <section className="pokemon-info">
            <section className="type-section">
              {pokemon.types.map((type, index) => (
                <h6
                  key={index}
                  style={{
                    backgroundColor: getColor(
                      pokemon?.types[index]?.type?.name
                    ),
                  }}
                >
                  {type.type.name.toUpperCase()[0] +
                    type.type.name.substring(1)}
                </h6>
              ))}
            </section>
            <section className="characteristics">
              <h4
                style={{
                  color: getColor(pokemon?.types[0]?.type?.name),
                }}
              >
                About
              </h4>
              <section className="about-info">
                <section className="row-info">
                  <section className="column-info">
                    <img src={v1} />
                    <h6>{pokemon.weight / 10} kg</h6>
                  </section>
                  <section className="column-info">
                    <img src={v2} />
                    <h6>{pokemon.height / 10} m</h6>
                  </section>
                </section>
              </section>
            </section>
            <section className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sagittis sapien quis sem ultricies, quis venenatis mauris
                congue. Integer id odio at leo malesuada auctor. Donec ut nunc
                vel lacus efficitur sollicitudin.{" "}
              </p>
            </section>
            <section className="stats">
              <h4
                style={{
                  color: getColor(pokemon?.types[0]?.type?.name),
                }}
              >
                Basic Stats
              </h4>
              <section className="base-stats">
                <LinearProgress
                  sx={{
                    height: "12px",

                    borderRadius: "5px",
                  }}
                  color="error"
                  variant="determinate"
                  value={pokemon.stats[0].base_stat / 2}
                />
                <LinearProgress
                  sx={{
                    height: "12px",

                    borderRadius: "5px",
                  }}
                  color="error"
                  variant="determinate"
                  value={pokemon.stats[1].base_stat / 2}
                />
                <LinearProgress
                  sx={{
                    height: "12px",

                    borderRadius: "5px",
                  }}
                  color="error"
                  variant="determinate"
                  value={pokemon.stats[2].base_stat / 2}
                />
                <LinearProgress
                  sx={{
                    height: "12px",

                    borderRadius: "5px",
                  }}
                  color="error"
                  variant="determinate"
                  value={pokemon.stats[3].base_stat / 2}
                />
                <LinearProgress
                  sx={{
                    height: "12px",

                    borderRadius: "5px",
                  }}
                  color="error"
                  variant="determinate"
                  value={pokemon.stats[4].base_stat / 2}
                />
                <LinearProgress
                  sx={{
                    height: "12px",

                    borderRadius: "5px",
                  }}
                  color="error"
                  variant="determinate"
                  value={pokemon.stats[5].base_stat / 2}
                />
              </section>
            </section>
          </section>
        </section>
      ) : (
        <section></section>
      )}
    </div>
  );
};

export default Pokedetail;
