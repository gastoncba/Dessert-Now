import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList({items, category}) {

    //funcion utilizada para ver si se selecciona alguna categoria en especifico..
    const seEligioCategoria = (num) => {
        let numCategoria = num;
        numCategoria = parseInt(numCategoria);
        return !isNaN(numCategoria);
    }

    return (
        <div className="conteiner">
            {items.map(item => {
                //se verifica si se seleciono una categoria 
                if(seEligioCategoria(category)) {
                    //solo se seleccionan los produtos que son de la categoria seleccionada
                    if(item.category == category) {
                        return(
                            <Item item={item}></Item>
                            )
                    }
                }
                else {
                    return(
                        <Item item={item}></Item>
                        )
                }
                })}
        </div>
    )

}
