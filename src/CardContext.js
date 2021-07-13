import React, { createContext, useState } from 'react';

//1 - Aca creamos el contexto: 
export const CardContext = createContext();


//2 - Creamos el provider 
export const CardProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [cantItems, setCantItems] = useState(0);

    //funciones relacionadas con el carrito de compras

    //Verificar si el producto esta en el carrito 
    function isInCart(id) {
       return carrito.some(item => item.id === id);
}   
    //Agregar el producto al carrito
    function addItem(item, quantity) {
        
        if(isInCart(item.id)) {
            const nuevoCarrito = carrito.map(itemCarrito => {
                if(itemCarrito.id === item.id) {
                    return {...itemCarrito, quantity: itemCarrito.quantity + quantity}
                }
                else {
                    return itemCarrito;
                }
            })
            setCarrito(nuevoCarrito);          
        }
        else {
            setCarrito([...carrito, {...item, quantity}]);
        }
    }

    function resetCant() {
        let cant = 0;
        carrito.forEach(item => {
            cant += item.quantity;
        })
        return cant
    }

    function total() {
        let total = 0;
        carrito.forEach(item => {
            total += item.quantity*item.price;
        });

        return total;
    }


    return (
		<CardContext.Provider value={{carrito, setCarrito, addItem, resetCant, total}}>
			{children}
		</CardContext.Provider>
	);
}

