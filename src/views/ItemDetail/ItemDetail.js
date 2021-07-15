import React, {useContext, useState} from 'react'
import { CardContext } from '../../CardContext';
import {Button} from '@material-ui/core';
import './ItemDetail.css'
import 'semantic-ui-css/semantic.min.css'
import ItemCount from '../../components/ItemCount/ItemCount'
import { Link } from 'react-router-dom';

function ItemDetail({item}) {
    
    const {addItem, getStock} = useContext(CardContext); 
    const [aviso, setAviso] = useState('');
    const [terminar, setTerminar] = useState(false);
    const stock = getStock(item);

    function onAdd(quantityToAdd) {
        addItem(item, quantityToAdd); 
        setAviso('En tu carrito');
        setTerminar(true);
    }

    return (
        <div className='item-detail'>
        <div class="ui items">
            <div class="item">
                <div class="ui large image">
                    <img src={item.img}/>
                </div>
                <div class="content">
                <p class="header">{item.name}</p>
                <div class="meta">
                    <span>Detalle</span>
                </div>
                <div class="description">
                    <p>{item.description}</p>
                </div>
                <div class="description">
                    <b><p>{`Precio: $${item.price}`}</p></b>
                </div>
                {stock > 0 ?
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>: 
                    <h2>Sin stock</h2>
                }
                {terminar && (
                    <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                        Terminar compra
                        </Button>
                    </Link>
                )}
                <p>{aviso}</p>
                </div>
            </div>
        </div> 
        </div>
        
    )
}

export default ItemDetail
