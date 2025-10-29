import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams } from "react-router-dom";
import MenuRutas from './components/MenuRutas';
import HomeSeries from './components/HomeSeries';
import DetailsSerie from './components/DetailsSerie';
import CreatePersonaje from './components/CreatePersonaje';
import UpdatePersonaje from './components/UpdatePersonaje';
import DetailsPersonajes from './components/DetailsPersonajes';

export default class Router extends Component {


  render() {
    function ElementSerie() {
       let {idserie} = useParams()
       return(<DetailsSerie idserie={idserie}/>) 
    }

    function ElementDetailsPersonajes() {
        let {idseriepersonajes} = useParams()
        return(<DetailsPersonajes idseriepersonajes={idseriepersonajes}/>) 
    }

    function ElementUpdatePersonaje() {
        let {idserie} = useParams()
        let {idpersonaje} = useParams()
        return(<UpdatePersonaje idserie={idserie} idpersonaje={idpersonaje}/>)

    }

    return (
      <BrowserRouter>
      <MenuRutas/>
      <Routes>
        <Route path="/" element={<HomeSeries/>}/>
        <Route path="/details/:idserie" element={<ElementSerie/>}/>
        <Route path="/detailspersonajes/:idseriepersonajes" element={<ElementDetailsPersonajes/>}/>
        <Route path="/create" element={<CreatePersonaje/>}/>
        <Route path="/update" element={<ElementUpdatePersonaje/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
