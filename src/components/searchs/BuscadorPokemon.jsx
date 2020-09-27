import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";

function BuscadorPokemon() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("mewtwo");

  const changePokemon = (e) => {
    setPokemonName(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor="buscar_pokemon" className="text-white">
        Buscar Pokemon
      </label>
      <input
        type="text"
        className="form-control"
        value={pokemonName}
        id="buscar_pokemon"
        onChange={(e) => {
          changePokemon(e);
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          dispatch(fetchPokemon(pokemonName));
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default BuscadorPokemon;
