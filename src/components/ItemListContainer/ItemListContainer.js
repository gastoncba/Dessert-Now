import React, {useState} from 'react'
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {

    const [items, setItems] = useState([]);

    fetch('https://mocki.io/v1/3cbc514f-ca50-48c3-a479-4419aab27c05')
    .then(response => response.json())
    .then(res => setItems(res))

    return (
        <div> 
            <h1>{props.greeting}</h1>
            <ItemList items={items}></ItemList>
        </div>   
    )
}

export default ItemListContainer
