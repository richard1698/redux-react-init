import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CantidadPokemon from "./components/CantidadPokemon";
import CompraPokemon from "./components/CompraPokemon";
import { Provider } from "react-redux";
import store from "./redux/store";
import BuscadorPokemon from "./components/searchs/BuscadorPokemon";
import ResultadoPokemon from "./components/searchs/ResultadoPokemon";

function App() {
  return (
    <Provider store={store}>
      <div className="app_container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    src={require("./img/banner.jpg")}
                    alt="pokemon"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemon />
                    </div>
                    <CompraPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 border-top mt-4 pt-3">
            <BuscadorPokemon />
          </div>
          <div className="col-12">
            <ResultadoPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
