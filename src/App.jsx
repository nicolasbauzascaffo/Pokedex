import "./App.css";
import Start from "./pages/start";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Pokedetail from "./pages/pokedetail";
import Layout from "./components/layout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Start />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path=":pokemonName" element={<Pokedetail />} />
      </Routes>
    </div>
  );
}

export default App;
