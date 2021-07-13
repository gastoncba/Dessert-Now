import React, {useContext, useState} from 'react'
import { CardContext } from '../../CardContext';
import {Button} from '@material-ui/core';
import {Card} from 'react-bootstrap'
import './ItemDetail.css'
import 'semantic-ui-css/semantic.min.css'
import ItemCount from '../../components/ItemCount/ItemCount'
import { Link } from 'react-router-dom';

function ItemDetail({item}) {
    
    const {addItem} = useContext(CardContext); 
    const [aviso, setAviso] = useState('');
    const [terminar, setTerminar] = useState(false);

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
                    <span>Description</span>
                </div>
                <div class="description">
                    <p>{item.description}</p>
                </div>
                <div class="description">
                    <b><p>{`Precio: $${item.price}`}</p></b>
                </div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
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
