import React, {useContext, useState} from 'react'
import { CardContext } from '../../context/CardContext';
import {Button} from '@material-ui/core';
import './ItemDetail.css'
import ItemCount from '../../components/ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react'

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
    <div className={'item-detail'}>
        <Item.Group>
        <Item>
        <Item.Image size='large' src={item.img}/>
        <Item.Content>
            <Item.Header style={{
                fontFamily:'bebas Neue',
                fontSize: '190%',
            }}>{item.name}</Item.Header>
            <Item.Description>
            {item.description}
            <p><b>{`Precio: $${item.price}`}</b></p>
            </Item.Description>
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
        </Item.Content>
        </Item>
  </Item.Group>
    </div>      
    )
}

export default ItemDetail
