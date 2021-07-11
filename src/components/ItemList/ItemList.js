import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList({items, category}) {
    
    const seElegioCategoria = (nomCat) => {
        return (typeof nomCat === 'string');
    }

    return (
        <div className="conteiner">
            {items.map(item => {
                if(seElegioCategoria(category)) {
                    if(item.category === category) {
                        return(
                            <div key={item.id}>
                                <Item item={item}></Item>
                            </div>
                        )
                    }
                }
                else {
                    return(
                        <div key={item.id}>
                            <Item item={item}></Item>
                        </div>
                    )
                }
            })}
        </div>
    )

}
