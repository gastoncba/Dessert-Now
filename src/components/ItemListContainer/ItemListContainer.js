import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import {db} from '../../firebase';

function ItemListContainer({match}) {

    let nombreCateoria  = match.params.id
    const [items, setItems] = useState([]);

    const getItems = () => {
        const productos = [];
        db.collection('products').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                productos.push({...doc.data(), id: doc.id})
            });
            setItems(productos)
        });
    };

    useEffect(()=>{
        getItems();
    }, []);

    return (
        <div> 
            <h1 className='titulo-principal'>Bienvenidos a Dessert NOW!</h1>
            <ItemList items={items} category={nombreCateoria}></ItemList>
        </div>   
    )
}

export default ItemListContainer
