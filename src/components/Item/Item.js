import React from 'react'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

function Item({item}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.clarin.com/2020/02/11/F16NA-Sz_1256x620__1.jpg"/>
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <ItemCount stock={item.stock} initial={1}></ItemCount>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item
