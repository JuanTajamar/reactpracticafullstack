import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import {Navigate} from 'react-router-dom'

export default class CreatePersonaje extends Component {
    url = Global.urlPersonajes
    state = {
        personajes: [],
        series: [],
        mensaje: "",
        status: false
    }

    cajaID = React.createRef();
    cajaNombre = React.createRef();

    loadSeries = () => {
        let request = "api/series"
        axios.get(this.url + request).then(response => {
            this.setState({
                series: response.data
            })
        })
    }

        loadPersonajes = () => {
        let request = "api/personajes"
        axios.get(this.url + request).then(response => {
            this.setState({
                personajes: response.data
            })
        })
    }



    componentDidMount = () => {
        this.loadPersonajes();
        this.loadSeries();
    }

  render() {
    return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h1 className="h3 mb-0">Modificar Personaje</h1>
                    </div>
                    <div className="card-body">
                        {this.state.mensaje && (
                            <div className="alert alert-success" role="alert">
                                {this.state.mensaje}
                            </div>
                        )}
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Seleccione una serie: </label>
                                <select className="form-select" ref={this.cajaID}>
                                    {
                                        this.state.series.map((serie, index) => (
                                            <option key={index}>{serie.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Selecciona un personaje: </label>
                                <select className="form-select" ref={this.cajaID}>
                                    {
                                        this.state.personajes.map((personaje, index) => (
                                            <option key={index}>{personaje.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary w-100">
                            Modificar Personaje
                            </button>
                        {
                            this.state.status === true &&
                            <Navigate to="/"/>
                        }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
