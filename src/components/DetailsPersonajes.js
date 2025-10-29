import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class DetailsPersonajes extends Component {
    url = Global.urlPersonajes
    state = {
        personajes: []
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
        this.loadPersonajes();
    }
  render() {
    return (
<div className='text-center'>
        <NavLink className="btn btn-primary" to={"/details/" + this.props.idseriepersonajes}>Volver</NavLink>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>imagen</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                  this.state.personajes.map((personaje,index) => {
                    return(
                      <tr key={index}>
                        <td>{personaje.nombre}</td>
                        <td><img style={{width:"100px"}} src={personaje.imagen} alt={personaje.nombre}/></td>
                      </tr>
                    )
                  })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
