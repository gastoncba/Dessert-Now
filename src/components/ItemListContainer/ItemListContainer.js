import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Footer from '../Footer/Footer';
import Categories from '../Categories/Categories';

function ItemListContainer({match}) {

    const nombreCateoria  = match.params.id
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getItems = () => {
        fetch('https://api-dessert-now.herokuapp.com/api/products')
        .then(res => res.json())
        .then(data => {
            if(nombreCateoria) {
                const dataFilter = data.filter(i => i.category == nombreCateoria)
                setItems(dataFilter);
                
            } else {
                setItems(data)
            }
            setIsLoading(false)})
        .catch(e => console.log(e))
        
    };

    useEffect(()=>{
        getItems();
    }, [nombreCateoria]);

    return (
        <Box>
        <Container>
            <h1 className='titulo-principal'>Bienvenidos a Dessert NOW!</h1>
            {
                isLoading? 
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress 
                        sx={{color: '#e91e63'}}
                    >    
                    </CircularProgress>
                </Box>: 
                <div>
                    <Categories />
                    <ItemList items={items} category={nombreCateoria}></ItemList>
                </div>
            }
        </Container>  
        {!isLoading && <Footer></Footer>}
        </Box>
    )
}

export default ItemListContainer
