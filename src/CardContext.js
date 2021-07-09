import React, { createContext, useState } from 'react';

//1 - Aca creamos el contexto: 
export const CardContext = createContext();


//2 - Creamos el provider 
export const CardProvider = ({children}) => {

    const [carrito, setCarrito] = React.useState([]);

    //funciones 

    //Verificar si el producto esta en el carrito 
    function isInCart(id) {
       return carrito.some(item => item.id === id);
}   
    //Agregar el producto al carrito
    function addItem(item, quantity) {
        
        if(!isInCart(item.id)) {
            setCarrito([...carrito, {...item, quantity}]);           
        }
        else {
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
    }

    return (
		<CardContext.Provider value={{carrito, setCarrito, addItem}}>
			{children}
		</CardContext.Provider>
	);
}

