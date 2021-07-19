import React from 'react';
import Item from '../Item/Item';
import {Card, Container} from 'semantic-ui-react';

export default function ItemList({items}) {
    
    return (
        <Container style={{ margin: 20 }}>
        <Card.Group>
            {items.map(item => {
                return(
                <div key={item.id}>
                    <Item item={item}></Item>
                </div>
                )
            })}
        </Card.Group>
        </Container>
    )

}
