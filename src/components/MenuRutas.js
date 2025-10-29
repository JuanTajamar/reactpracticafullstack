import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import Global from '../Global';

export default class MenuRutas extends Component {
    url = Global.urlPersonajes
    state = {
        series: [],
        personajes: []
    }

    loadSeries = () => {
        let request = "api/series"
        axios.get(this.url + request).then(response => {
            this.setState({
                series: response.data
            })
        })
    }

        loadPersonajes = () => {
        let request = "api/Series/personajesserie/" + this.props.idseriepersonajes
        axios.get(this.url + request).then(response => {
            this.setState({
                personajes: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadSeries();
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        Stranger Things
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/create"
                                >
                                    Nuevo Personaje
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/update"
                                >
                                    Modificar Personajes
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Series
                                </a>
                                <ul className="dropdown-menu">
                                    {this.state.series.map((serie, index) => (
                                        <li key={index}>
                                            <NavLink
                                                className="dropdown-item"
                                                to={"/details/" + serie.idSerie}
                                            >
                                                {serie.nombre}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
  }
}
