import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import CircularProgress from '@mui/material/CircularProgress';
import {Container} from 'semantic-ui-react';
import Footer from '../Footer/Footer';

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
        <div>
        <Container style={{marginTop: '5rem'}}>
            <h1 className='titulo-principal'>Bienvenidos a Dessert NOW!</h1>
            {isLoading? <CircularProgress color='secondary' style={{marginLeft: '50%', marginTop: '10%', color: '#e91e63'}}></CircularProgress>: 
            <ItemList items={items} category={nombreCateoria}></ItemList>} 
        </Container>  
        {!isLoading && <Footer></Footer>}
        </div>
    )
}

export default ItemListContainer
