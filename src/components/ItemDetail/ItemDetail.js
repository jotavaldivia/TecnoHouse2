import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import './ItemDetail.css';

function ItemDetail({producto}) {
    console.log(producto)
 
    return (
        <>
        <Link to="/">
        <h1 className="text-center mt-5">{producto.title}</h1>
        <br/>
        <p className="btn btn-primary">Volver al inicio</p>
        </Link>
    
            <div className="container__detail">
                <div className="container__detail__img">
                   <img src={producto.picyureUrl} />
                </div>
                <div className="container__detail__description">
                    <p className="textdescription">{producto.description}</p>
                    <h2>${producto.price}</h2>
                    <button className="addButton btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
