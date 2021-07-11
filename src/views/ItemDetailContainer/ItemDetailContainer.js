import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {db} from '../../firebase';

function ItemDetailContainer({ match }) {

    let ID = match.params.id;
    const [producto , setProducto] = useState([]);

    const getItem = () => {
        const productos = [];
        db.collection('products').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                productos.push({...doc.data(), id: doc.id})

            })
            //buscamos el que tiene el ID buscado
            const productoConID = productos.find(item => item.id === ID);
            setProducto(productoConID);
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
