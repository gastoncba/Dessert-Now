import React, {useContext} from 'react';
import { CardContext } from '../../CardContext';
import 'semantic-ui-css/semantic.min.css';
import './Cart.css'

function Cart() {
    
    const {carrito, total} = useContext(CardContext); 
    
    return ( 
            <div>   
            <h1 className={'title-cart'}>Carrito de compras</h1>
            <div className={'items-conteiner'}>
            <div class="ui items">
            {carrito.map(item => {
                return(
                <div class="item" key={item.id}>
                <div class="image">
                <img src={item.img}></img>
                </div>
                <div class="content">
                <a class="header">{item.name}</a>
                <div class="meta">
                    <span></span>
                </div>
                <div class="description">
                    <p>{`Precio: $${item.price}`}</p>
                    <p>{`Cantidad: ${item.quantity}`}</p>
                    <p>{`Subtotal: $${item.price*item.quantity}`}</p>
                </div>
                </div>
                </div>
                )
            })}
            </div>
            </div>
            </div>  
    )
}

export default Cart
