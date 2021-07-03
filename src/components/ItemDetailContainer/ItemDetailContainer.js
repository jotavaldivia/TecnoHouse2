import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function ItemDetailContainer() {
    let { id } = useParams();
    const [producto, setProductos] = useState([]);
{ useEffect(() => {
 
    fetch('http://localhost:3000/lista.json')
.then(response => response.json())
.then(data => data.productList)
.then(data => data.filter((item)=>{
  return item.id == id
}))
.then(data => setProductos(data))
},[]);}
    return (
        <div>
          {
                    producto.map((item, index) => {
                        return(
                            <ItemDetail producto={item}/>
                        )
                       
                    })
                }
           
        </div>
    )
}

export default ItemDetailContainer
