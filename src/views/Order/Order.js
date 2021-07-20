import React, {useState, useContext, useEfect} from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import { CardContext } from '../../context/CardContext';
import {db, itemsCollection, time} from '../../firebase/firebase';
import './Order.css'; 
import { Message } from 'semantic-ui-react'

function Order() {

    const {carrito, getTotal, clear} = useContext(CardContext);
    
    const initialState = {
        buyer: {
            name:'',
            phone: '',
            email:''
        },
        date: time.now(),
        items: [],
        total: getTotal(), 
    }

    const [order, setOrder] = useState(initialState);
    const [ID, setID] = useState(0);
    const [confirm, setConfirm] = useState(false);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        const {buyer} = order;
        setOrder({...order, buyer: {...buyer, [name]: value}});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        updateStock();
        addOrder();
        setOrder({...initialState});
        setConfirm(true);
    }

    const updateStock = () => {
        carrito.forEach(itemCart => {
            order.items = [...order.items, {id: itemCart.id, title: itemCart.name, price: itemCart.price, quantity: itemCart.quantity}]
            itemsCollection.doc(itemCart.id).update({stock: itemCart.stock - itemCart.quantity})
        });
        setOrder({...order});
        clear()
    }
    
    const addOrder = async () => {
        const newOrder =  db.collection('orders').doc()
        await newOrder.set(order);
        setID(newOrder.id);    
    }

    return (
        <Container className='conteiner-form'>
        {!confirm ?  
            <Form className='form'>
                <h1 className='order-title'>Order de Pedido</h1>
                <Form.Field>
                <label>Nombre</label>
                <input 
                    placeholder='Nombre' 
                    onChange={handleOnChange} 
                    name='name'
                    value={order.buyer.name}
                />
                </Form.Field>
                <Form.Field>
                <label type>Telefono</label>
                <input 
                    type ="tel" 
                    placeholder='Telefono' 
                    onChange={handleOnChange} 
                    name='phone'
                    value={order.buyer.phone}
                />
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder='juan@ejemplo.com' 
                    onChange={handleOnChange} 
                    name='email'
                    value={order.buyer.email}
                />
                </Form.Field>
                <Button type='submit' onClick={handleOnSubmit} secondary>Enviar Orden</Button>
            </Form> 
        : 
        <Message positive>
            <Message.Header>Orden registrada con exito!</Message.Header>
            <p>
            Numero de order:{ID}.
            </p>
            <p>
            Recibira una notificacion cuando este lista!
            </p>
        </Message>}
        </Container>
        
    )
}

export default Order
