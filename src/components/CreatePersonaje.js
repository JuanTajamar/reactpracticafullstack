import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import {Navigate} from 'react-router-dom'

export default class CreatePersonaje extends Component {
    url = Global.urlPersonajes
    state = {
        mensaje: "",
        status: false
    }

    cajaID = React.createRef();
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaIdSerie = React.createRef()

    CreatePersonaje = () => {
        let request = "api/personajes"
        let personaje = {
            idPersonaje: parseInt(this.cajaID.current.value),
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            idSerie: parseInt(this.cajaIdSerie.current.value),
        }
        axios.post(this.url + request, personaje).then(
            this.setState({
                mensaje: "Se ha creado el personaje",
                status: true
            })
        )

    }

  render() {
    return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h1 className="h3 mb-0">Create Personaje</h1>
                    </div>
                    <div className="card-body">
                        {this.state.mensaje && (
                            <div className="alert alert-success" role="alert">
                                {this.state.mensaje}
                            </div>
                        )}
                        <form>
                            <div className="mb-3">
                                <label className="form-label">ID</label>
                                <input className="form-control" type="text" ref={this.cajaID} placeholder="Introduzca ID"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input className="form-control" type="text" ref={this.cajaNombre} placeholder="Introduzca nombre"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Imagen</label>
                                <input className="form-control" type="text" ref={this.cajaImagen} placeholder="Introduzca imagen"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ID Serie</label>
                                <input className="form-control" type="text" ref={this.cajaIdSerie} placeholder="Introduzca id serie"/>
                            </div>
                            <button type="button" className="btn btn-primary w-100" onClick={this.CreatePersonaje}>
                            Crear Personaje
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
