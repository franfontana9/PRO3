import React, { Component } from "react";
import { API_ENDPOINTS, CATEGORIAS } from "../../constants";
import './resultados.css'


class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consulta: "",
      resultadosBusqueda: [],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.consulta !== this.state.consulta) {
      console.info("consulta", this.state.consulta);
      const urlBusqueda = `${API_ENDPOINTS.busqueda}${this.state.consulta}`;

      fetch(urlBusqueda)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            resultadosBusqueda: data.data,
          });
        });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="consulta"
            placeholder="Buscar 🔍"
            onChange={this.handleOnChange}
            className="search-input"
          />
          <button
            onClick={() => {
              this.setState({ consulta: "", resultados: [] });
            }}
            className="search-clear-button"
          >
            Limpiar
          </button>
          {/*}
          <select
            name="categoria"
            onChange={this.handleOnChange}
            className="category-select"
          >
            <option value={CATEGORIAS.album}>Album</option>
            <option value={CATEGORIAS.cancion}>Cancion</option>
          </select>
          */}
        </form>

        {this.state.resultadosBusqueda.length > 0 && this.state.consulta != "" && (
          <section className="search-results">
            <h2 className="search-results-heading">Resultados de busqueda</h2>
            <ul className="search-results-list">
              {this.state.resultadosBusqueda.map((element) => {
                return (
                  <li key={element.id} className="search-result-item">
                    {element.title}
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </>
    );
  }
}

export default ResultadosBusqueda;
