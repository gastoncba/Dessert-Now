import React from 'react';
import Item from '../Item/Item';
import {Card} from 'semantic-ui-react';
import './ItemList.css'
export default function ItemList({items}) {
    
    return (
            // <Card.Group>
            <div className={'card-group'}>
                {items.map(item => {
                    return(
                    <Item item={item} key={item.id}></Item>
                    )
                })}
            </div>
            // </Card.Group>
    )

}
