import React from 'react'
import {Card} from 'react-bootstrap'

import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Item({item}) {
    return (
        <div>
            <Card style={{ width: '18rem', borderColor:'black'}}>
            <Card.Img variant="top" src={item.img}/>
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{`Precio: $${item.price}`}</Card.Text>
            
            <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                <Button className="boton-detalle" variant="contained" color="secondary">
                    Ver Detalle
                </Button>
            </Link>

            </Card.Body>
            </Card>
        </div>
    )
}

export default Item
