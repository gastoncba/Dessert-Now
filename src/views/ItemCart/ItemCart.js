import React, {useContext} from 'react';
import { Item } from 'semantic-ui-react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { CardContext } from '../../context/CardContext';

function ItemCart({item}) {

    const {removeItem} = useContext(CardContext);

    return (
        <Item>
            <Item.Image size='medium' src={item.img} />
            <Item.Content>
                <Item.Header>{item.name}</Item.Header>
                <Item.Description>
                    <p>{`Precio $${item.price}`}</p>
                    <p>{`Cantidad: ${item.quantity}`}</p>
                    <p>{`Subtotal: $${item.quantity*item.price}`}</p>
                </Item.Description>
                <Item.Extra>
                </Item.Extra>
            </Item.Content>
            <IconButton onClick={() => {removeItem(item)}}>
                Eliminar
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </Item>
    )
}

export default ItemCart
