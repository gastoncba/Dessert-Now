import React, { createContext, useState, useEffect} from 'react';

//1 - Aca creamos el contexto: 
export const CardContext = createContext();


//2 - Creamos el provider 
export const CardProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

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

    function getCant() {
        const cant = carrito.reduce((cant, item) => {
            return item.quantity + cant;
        }, 0);

        return cant;
    }

    function getTotal() {

        const total = carrito.reduce((sumaTotal, item) => {
            return (item.price * item.quantity) + sumaTotal;
        }, 0);
        
        return total;
    }

    function getStock(producto) {
        const productoEnCarrito =  carrito.find(item => item.id === producto.id);
        return productoEnCarrito ? (producto.stock - productoEnCarrito.quantity) : producto.stock; 
    }
    
    function removeItem(producto) {
        setCarrito(carrito.filter(item => item.id !== producto.id));
    }

    function clear() {
        setCarrito([]);
    }

    useEffect(()=> {
        const localCart = localStorage.getItem('cart');
        if(localCart) {
            setCarrito(JSON.parse(localCart))
        } else {
            localStorage.setItem('cart', JSON.stringify([]))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(carrito))
    }, [carrito])

    return (
		<CardContext.Provider value={{carrito, setCarrito, addItem, getCant, getStock, getTotal, removeItem, clear}}>
			{children}
		</CardContext.Provider>
	);
}

