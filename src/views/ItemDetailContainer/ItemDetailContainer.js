import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {itemsCollection} from '../../firebase';

function ItemDetailContainer({match}) {

    const ID = match.params.id;
    const [producto , setProducto] = useState({});

    const getItem = () => {
       
        const productoDeID = itemsCollection.doc(ID);
        productoDeID.get().then((doc) => {
            setProducto({...doc.data(), id: doc.id})
        })
    }

    useEffect(() => {
        getItem()
    }, [ID])
    
    return ( 
        <ItemDetail item={producto}></ItemDetail> 
    )
}

export default ItemDetailContainer
