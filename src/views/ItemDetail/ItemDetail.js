import React, {useContext, useState} from 'react'
import { CardContext } from '../../CardContext';
import {Button} from '@material-ui/core';
import './ItemDetail.css'
import 'semantic-ui-css/semantic.min.css'
import ItemCount from '../../components/ItemCount/ItemCount'


function ItemDetail({item}) {

    function onAdd(quantityToAdd) {

        if(addItem(item, quantityToAdd)) {
            setAviso('Se agrego a su carrito')
        }
        else {
            setAviso('Ya esta en su carrito!')
        }
    } 
    
    const [carrito, setCarrito, addItem] = useContext(CardContext); 
    const [aviso, setAviso] = useState('');
    const [terminar, setTerminar] = useState(false);

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
                {terminar && (
                    <Button variant="contained" color="secondary">
                    Terminar compra
                    </Button>
                )}
                <p>{aviso}</p>
                </div>
            </div>
        </div> 
        </div>
        
    )
}

export default ItemDetail
