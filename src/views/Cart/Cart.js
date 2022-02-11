import React, {useContext} from 'react';
import { CardContext } from '../../context/CardContext';
import { Item } from 'semantic-ui-react'
import './Cart.css';
import ItemCart from '../ItemCart/ItemCart';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

function Cart() {
    
    const {carrito, total} = useContext(CardContext); 
    
    return ( 
            <Container sx={{pb: 3}}>   
                <h1 className='title-cart'>Carrito de compras</h1>
                <Item.Group divided>
                {carrito.length > 0 ?  
                carrito.map(itemCart => {
                    return(
                        <ItemCart item={itemCart} key={itemCart._id}></ItemCart>
                    )
                })
                : 
                <div className='text-center'>
                    <h2 className='alert-cart'>Usted no tiene productos</h2>
                    <Link to={`/`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{background: '#e91e63', color: 'white'}}>
                                Volver al menu
                        </Button>
                    </Link>
                </div>
                }
                </Item.Group>
                {carrito.length > 0 &&
                <div>
                <h2 className={'total-title'}>{`Total del carrito: $${total}`}</h2>
                <Link to={`/form`}>
                    <Button variant="contained" style={{color: 'white', background: '#e91e63'}}>
                        Finalizar compra
                    </Button>
                </Link>
                </div>
                }
            </Container>  
    )
}

export default Cart
