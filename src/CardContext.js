import React, { createContext, useState } from 'react';

//1 - Aca creamos el contexto: 
export const CardContext = createContext();


//2 - Creamos el provider 
export const CardProvider = (props) => {

    //funciones 
    function isInCart(id) {

        for (let i = 0; i < carrito.length; i++) {
            let item = carrito[i];
            if(item.item.item.id === id) {
                return true;
            }
    }

    return false; 
}
    
    function addItem(item, quantity) {

        if(!isInCart(item.id)) {
            let nuevoPostre = {item:{item}, quantity};
            carrito.push(nuevoPostre);
            setCarrito(carrito);
            console.log(carrito);
            return true;
        }

        return false;
    }

    const [carrito, setCarrito] = useState([]);

    return (
		<CardContext.Provider value={[carrito, setCarrito, addItem]}>
			{props.children}
		</CardContext.Provider>
	);
}

