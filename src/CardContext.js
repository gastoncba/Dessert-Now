import React, { createContext, useState } from 'react';

//1 - Aca creamos el contexto: 
export const CardContext = createContext();


//2 - Creamos el provider 
export const CardProvider = (props) => {

    //funciones 

    function isInCart(id) {

       let index = carrito.findIndex(item => item.item.id === id);
       return index !== -1;
}
    
    function addItem(item, quantity) {

        if(!isInCart(item.id)) {
            let nuevoPostre = {item, quantity};
            carrito.push(nuevoPostre);
            setCarrito(carrito);
            return true;
        }

        return false;
    }

    const [carrito, setCarrito] = useState([]);

    return (
		<CardContext.Provider value={[carrito, setCarrito ,addItem]}>
			{props.children}
		</CardContext.Provider>
	);
}

