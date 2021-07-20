import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {itemsCollection} from '../../firebase/firebase';
import { CircularProgress } from '@material-ui/core';

function ItemDetailContainer({match}) {

    const ID = match.params.id;
    const [producto , setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const getItem = () => {
        const productoDeID = itemsCollection.doc(ID);
        productoDeID.get().then((doc) => {
            setProducto({...doc.data(), id: doc.id})
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getItem()
    }, [ID])
    
    return ( 
        <div>
        {isLoading? <CircularProgress color='secondary' style={{marginLeft: '50%', marginTop: '10%'}}></CircularProgress>: 
        <ItemDetail item={producto}></ItemDetail>
        } 
        </div>
    )
}

export default ItemDetailContainer
