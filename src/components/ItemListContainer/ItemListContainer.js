import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import {itemsCollection} from '../../firebase';

function ItemListContainer({match}) {

    const nombreCateoria  = match.params.id
    const [items, setItems] = useState([]);

    const getItems = () => {
        let productos = itemsCollection;
        if(nombreCateoria) productos = itemsCollection.where('category','==', nombreCateoria);
        productos.get().then((querySnapshot) => {
            setItems(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        });
    };

    useEffect(()=>{
        getItems();
    }, [nombreCateoria]);

    return (
        <div> 
            <h1 className='titulo-principal'>Bienvenidos a Dessert NOW!</h1>
            <ItemList items={items} category={nombreCateoria}></ItemList>
        </div>   
    )
}

export default ItemListContainer
