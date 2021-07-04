import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer({ match }) {

    let ID = match.params.id;
    const [producto , setProducto] = useState([]);

    useEffect( () => {fetch('https://mocki.io/v1/c1daec2b-e6d6-4459-9a8e-16ef5e98a0ec')
               .then(response => response.json())
               .then(res => setProducto(res))
    }, [])

    return (
        <div>
            {producto.map(prod =>{
                
                if(ID == prod.id) {
                    return(
                        <ItemDetail item={prod}></ItemDetail>
                    )
                }
            })}
           
        </div>
    )
}

export default ItemDetailContainer