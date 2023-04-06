import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import { Container } from '@mui/material';
import { API } from '../../settings/API.setting'

function ItemDetailContainer({match}) {

    const ID = match.params.id;
    const [producto , setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const getItem = () => {
        fetch(`${API.URL}products/${ID}`)
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
                <CircularProgress  sx={{color: '#e91e63'}} />
            </Box>: 
            <ItemDetail item={producto} />
        } 
        </Container>
    )
}

export default ItemDetailContainer
