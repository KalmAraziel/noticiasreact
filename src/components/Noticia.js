import React from 'react';

const Noticia = ({noticia}) => {
    // extraer datos
    // eslint-disable-next-line no-unused-vars
    const { urlToImage, url, title, description, source } = noticia;
    // mostrar imagen si no hay
    const image = (urlToImage) ? 
        <div className="card-image">
            <img src = { urlToImage } alt = { title }></img>
            <span className="card-title">{source.name}</span>
        </div>
    : null;
    return (
        <div className="col s12 m6 l4"> 
            <div className="card">
                {image}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href = {url} target ="_black" rel="noopener noreferrer" className="waves-effect waves-light btn">
                        Ver Noticia
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Noticia;