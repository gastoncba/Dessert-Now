import React, {useContext} from 'react';
import { CardContext } from '../../CardContext';
import { Item } from 'semantic-ui-react'
import './Cart.css';
import ItemCart from '../ItemCart/ItemCart';
import 'semantic-ui-css/semantic.min.css';
import {Button} from '@material-ui/core/';
import { Link } from 'react-router-dom';

function Cart() {
    
    const {carrito, total} = useContext(CardContext); 
    
    return ( 
            <div>   
            <h1 className={'title-cart'}>Carrito de compras</h1>
            <div className={'items-conteiner'}>
            <Item.Group divided>
            {carrito.length > 0 ? 
            
            carrito.map(itemCart => {
                return(
                    <ItemCart item={itemCart}></ItemCart>
                )
            })
            : <div style={{ marginLeft: '30%'}}>
                <h2 className={'alert-cart'}>Usted no tiene productos</h2>
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary" style={{marginLeft: '10%'}}>
                            Volver al menu
                    </Button>
                </Link>
            </div>
            }
            </Item.Group>
            {carrito.length > 0 &&
            <h2 className={'total-title'}>{`Total del carrito: $${total()}`}</h2>
            }
            </div>
            </div>  
    )
}

export default Cart
