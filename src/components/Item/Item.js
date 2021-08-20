import React from 'react'
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Card, Image} from 'semantic-ui-react';
import './Item.css'

function Item({item}) {
    return (
        <Card id='card-container'>
        <Image src={item.img}/>
        <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <p>{`Precio: $${item.price}`}</p>
            <Link to={`/item/${item._id}`} style={{ textDecoration: 'none' }}>
                <Button className="boton-detalle" variant="contained" color="secondary">
                    Ver Detalle
                </Button>
            </Link>
        </Card.Content>
        </Card>
    )
}

export default Item
