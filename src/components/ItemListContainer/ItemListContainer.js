import React ,{useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList.js'

function ItemListContainer() {
    const [producto, setProductos] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:3000/lista.json')
  .then(response => response.json())
  .then(data => data.productList)
 .then(data => setProductos(data))
    },[]);
    return (
        <>
            <ItemList prod={producto}></ItemList>
        </>
    )
}

export default ItemListContainer
