import React from 'react';
import Item from '../Item/Item';
import {Card, Container} from 'semantic-ui-react';

export default function ItemList({items}) {
    
    return (
        <Card.Group>
            {items.map(item => {
                return(
                <Item item={item} key={item.id}></Item>
                )
            })}
        </Card.Group>
    )

}
