import React, { Component , Fragment} from 'react'
import Header from './components/Header';
import ListaNoticia from './components/ListaNoticias';


// import PropTypes from 'prop-types'

export default class App extends Component {
  
  state = { 
    noticias: []
  };
   componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=d1fc0a1f50434d0bbe8951ba28840129`;
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
          <ListaNoticia noticas = {this.state.noticias }></ListaNoticia>
        </div>
      </Fragment>
    )
  }
}
