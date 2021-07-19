import React, {useState, useContext, useEfect} from 'react';
import { Button, Form } from 'semantic-ui-react';
import { CardContext } from '../../CardContext';
import {db, itemsCollection} from '../../firebase';

function Order() {

    const {carrito, getTotal, clear} = useContext(CardContext);
    
    const initialState = {
        name: '',
        phone:'',
        email: '',
        items: [],
        total: getTotal(), 
    }

    const [values, setValues] = useState(initialState);
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        updateStock();
        addOrder();
        setValues({...initialState});
    }

    const updateStock = () => {
        carrito.forEach(itemCart => {
            values.items = [...values.items, {id: itemCart.id, title: itemCart.name, price: itemCart.price}]
            itemsCollection.doc(itemCart.id).update({stock: itemCart.stock - itemCart.quantity})
        });
        setValues({...values});
        clear()
    }
    
    const addOrder = async () => {
        await db.collection('orders').doc().set(values)
    }

    return (
        <Form>
            <Form.Field>
            <label>Nombre</label>
            <input 
                placeholder='Nombre' 
                onChange={handleOnChange} 
                name='name'
                value={values.name}
            />
            </Form.Field>
            <Form.Field>
            <label type>Telefono</label>
            <input 
                type ="tel" 
                placeholder='Telefono' 
                onChange={handleOnChange} 
                name='phone'
                value={values.phone}
            />
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input 
                type="email" 
                placeholder='juan@ejemplo.com' 
                onChange={handleOnChange} 
                name='email'
                value={values.email}
            />
            </Form.Field>
            <Button type='submit' onClick={handleOnSubmit}>Enviar Orden</Button>
        </Form>
    )
}

export default Order
