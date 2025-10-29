import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class DetailsSerie extends Component {
    url = Global.urlPersonajes
    state = {
        serie: null
    }
    findSerie = () => {
        let request = "api/series/" + this.props.idserie
        axios.get(this.url + request).then(response => {
            this.setState({
                serie: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findSerie()
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idserie != this.props.idserie){
            this.findSerie();
        }
    }

  render() {
    return (
      <div className=' row justify-content-center text-center'>
        <h1>DETALLES DE UNA SERIE</h1>
        {
            this.state.serie && (
            <ul className='list-group mb-5 w-50 h-50 text-center list-group-item-success'>
                <li className='list-group-item'>ID: {this.state.serie.idSerie}</li>
                <li className='list-group-item'>Nombre: {this.state.serie.nombre}</li>
                <li className='list-group-item'><img style={{width: "70px", height: "70px"}} src={this.state.serie.imagen}/></li>
                <li className='list-group-item'>Puntuación: {this.state.serie.puntuacion}</li>
                <li className='list-group-item'>Año: {this.state.serie.año}</li>
                <li className='list-group-item'><NavLink className="btn btn-success" to={`/detailspersonajes/${this.state.serie.idSerie}`}>Personajes</NavLink></li>
            </ul>)
        }
      </div>
    )
  }
}
