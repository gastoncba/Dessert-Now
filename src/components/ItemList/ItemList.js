import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList({items}) {
    
    return (
        <div className="conteiner">
            {items.map(item => {
                return(
                <div key={item.id}>
                    <Item item={item}></Item>
                </div>
                )
            })}
        </div>
    )

}
