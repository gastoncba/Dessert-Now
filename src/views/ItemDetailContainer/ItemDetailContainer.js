import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import { Container } from '@mui/material';

function ItemDetailContainer({match}) {

    const ID = match.params.id;
    const [producto , setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const getItem = () => {
        fetch(`https://api-products-dessert-now-production.up.railway.app/api/products/${ID}`)
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
        {
            isLoading? 
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 10}}>
                <CircularProgress  
                    sx={{color: '#e91e63'}}
                >    
                </CircularProgress>
            </Box>: 
            <ItemDetail item={producto}></ItemDetail>
        } 
        </Container>
    )
}

export default ItemDetailContainer
