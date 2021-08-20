import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress } from '@material-ui/core';
import { Container } from 'semantic-ui-react';

function ItemDetailContainer({match}) {

    const ID = match.params.id;
    const [producto , setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const getItem = () => {
        fetch(`https://api-dessert-now.herokuapp.com/api/products/${ID}`)
        .then(res => res.json())
        .then(data => {
            setProducto(data)
            setIsLoading(false);
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getItem()
    }, [ID])
    
    return ( 
        <Container>
        {isLoading? <CircularProgress color='secondary' style={{marginLeft: '50%', marginTop: '10%'}}></CircularProgress>: 
        <ItemDetail item={producto}></ItemDetail>
        } 
        </Container>
    )
}

export default ItemDetailContainer
