import React, {useState, useEffect} from 'react';
import { ItemGroup } from 'semantic-ui-react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({match}) {

    let numCategoria = match.params.id;

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/c1daec2b-e6d6-4459-9a8e-16ef5e98a0ec')
        .then(response => response.json())
        .then(res => setItems(res))
    }, [])
    
    return (
        <div> 
            <h1 className='titulo-principal'>Bienvenidos a Dessert NOW!</h1>
              <ItemList items={items} category={numCategoria}></ItemList>
        </div>   
    )
}

export default ItemListContainer
