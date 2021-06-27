import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList({items}) {

    return (
        <div className="conteiner">
            {items.map(item => {
                return(
                    <Item item={item}></Item>
                    )
                })}
        </div>
    )

}
