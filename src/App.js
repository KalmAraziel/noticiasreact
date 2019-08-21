import React, { Component , Fragment} from 'react'
import Header from './components/Header';
import ListaNoticia from './components/ListaNoticias';
import Formulario from './components/Formulario';


// import PropTypes from 'prop-types'

export default class App extends Component {
  
  state = { 
    noticias: []
  };
   componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=d1fc0a1f50434d0bbe8951ba28840129`;
    console.log('url: ', url);
    const respuesta = await fetch(url);
    const noticias = respuesta.json();
    noticias.then( (resp) => {     
      this.setState({
        noticias: resp.articles
      })
    });
  }
  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API"></Header>
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias = {this.consultarNoticias}></Formulario>
          <ListaNoticia noticas = {this.state.noticias }></ListaNoticia>
        </div>
      </Fragment>
    )
  }
}
