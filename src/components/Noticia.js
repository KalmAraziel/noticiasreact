import React from 'react';

const Noticia = ({noticia}) => {
    // extraer datos
    // eslint-disable-next-line no-unused-vars
    const { urlToImage, url, title, description, source } = noticia;
    return (
        <div className="col s12 m6 l4"> 
            <div className="card">
                <div className="card-image">
                    <img src = { urlToImage } alt = { title }></img>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default Noticia;