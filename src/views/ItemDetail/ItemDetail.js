import React, {useContext, useState} from 'react'
import { CardContext } from '../../CardContext';
import './ItemDetail.css'
import 'semantic-ui-css/semantic.min.css'
import ItemCount from '../../components/ItemCount/ItemCount'


function ItemDetail({item}) {

    function onAdd(quantityToAdd) {
        if(addItem(item, quantityToAdd)) {
            setAviso('Agregado al carrito');
        }

        else {
            setAviso('Ya esta!')
        }
    } 
    
    const [carrito, setCarrito, addItem] = useContext(CardContext); 
    const [aviso, setAviso] = useState('');

    return (
        <div className='item-detail'>
        <div class="ui items">
            <div class="item">
                <div class="image">
                    <img src={item.img}/>
                </div>
                <div class="content">
                <p class="header">{item.name}</p>
                <div class="meta">
                    <span>Description</span>
                </div>
                <div class="description">
                    <p>{item.description}</p>
                </div>
                <div class="description">
                    <p>{`Precio: $${item.price}`}</p>
                </div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
                <h4>{aviso}</h4>
                </div>
            </div>
        </div> 
        </div>
        
    )
}

export default ItemDetail
