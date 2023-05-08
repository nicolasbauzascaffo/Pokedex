import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";
import "../styles/navbar.css";


export default function SearchAppBar() {
  return (
    <Box position="static" sx={{ width: "100%" }} className="navbar">
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Link to="" style={{ textDecoration: "none" }}>
              <CatchingPokemonIcon
                sx={{ textDecoration: "none", color: "white" }}
              />
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", fontWeight: "bold" },
            }}
          >
            Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
