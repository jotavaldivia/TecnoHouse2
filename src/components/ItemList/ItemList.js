import React, { useState } from 'react'
import Item from '../Item/Item.js'
function ItemList({ prod }) {
  
    return (
        <>
            <ul>
                {
                    prod.map((item, index) => {
                        return(
                           <Item prod={item} index={index}/>
                        )
                       
                    })
                }
            </ul>
        </>
    )
}

export default ItemList
