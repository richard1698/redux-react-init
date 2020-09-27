import React from "react";
import { connect, useSelector } from "react-redux";

function CantidadPokemon() {
  const game_shop = useSelector((state) => state.game_shop);
  return (
    <div>
      <h2>Unidades: {game_shop.pokemon}</h2>
    </div>
  );
}

export default connect()(CantidadPokemon);
