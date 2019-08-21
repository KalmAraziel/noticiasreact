import React from 'react';
import Noticia from './Noticia';

const ListaNoticia = ({noticas}) => {
    return (
        <div className="row">
            { 
                noticas.map(noticia => 
                    <Noticia key = { noticia.url } noticia = {noticia} ></Noticia> 
                ) 
            }
        </div>
    );
};

export default ListaNoticia;