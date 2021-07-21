import React from 'react'
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Card, Image} from 'semantic-ui-react';

function Item({item}) {
    return (
        <Card style={{marginRight:'50px'}}>
        <Image src={item.img}/>
        <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <p>{`Precio: $${item.price}`}</p>
            <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                <Button className="boton-detalle" variant="contained" color="secondary">
                    Ver Detalle
                </Button>
            </Link>
        </Card.Content>
        </Card>
    )
}

export default Item
