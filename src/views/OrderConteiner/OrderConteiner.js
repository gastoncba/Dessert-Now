import React, {useState, useContext} from 'react';
import { Button, Form, Message, Icon } from 'semantic-ui-react';
import { CardContext } from '../../context/CardContext';
import './OrderConteiner.css'; 
import {useFormik} from 'formik';
import {useHistory} from 'react-router-dom';
import {Grid, Container} from '@mui/material'

function OrderConteiner() {

    const {carrito, total, clear} = useContext(CardContext);
    const history = useHistory()

    const goMain = () => {

        setTimeout(() => {
            history.push('/')
        }, 6500)

    }

    const validate = values => {
        const error = {}

        if(!values.name) {
            error.name = 'Requerido'
        } else if (values.name.length > 15 || values.name.length < 3) {
            error.name = 'El nombre debe tener como maximo 15 caracteres, minimo 3...'
        }

        if(!values.phone) {
            error.phone = 'Requerido'
        } else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(values.phone)) {
            error.phone = 'Formato de telefono no valido'
        }

        if(!values.email) {
            error.email = 'Requerido'
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            error.email = 'Formato de email invalido'
        }

        return error; 
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
        }, 

        validate, 

        onSubmit: values => {

            const order = {
                buyer: values, 
                items: carrito.map(itemCart => {
                    updateStock(itemCart)
                    return {_id: itemCart._id, title: itemCart.name, price: itemCart.price, quantity: itemCart.quantity}
                }),
                date: "Una fecha",
                total: total,
            }
            addOrder(order);
            formik.resetForm();
        }
    }) 
    
    // const [ID, setID] = useState(0);
    const [confirm, setConfirm] = useState(false);

    const addOrder = async (order) => {
        //creamos una nueva orden 
        try {

            const res = await fetch('https://api-products-dessert-now-production.up.railway.app/api/create-order', 
            {
                method: 'POST',
                body: JSON.stringify(order),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const response = await res.text()
            console.log(response)
        
            // setID(response); 
            clear()
            setConfirm(true);
        } 

        catch(e) {
            console.log(e)
        }
           
    }

    const updateStock = async (item) => {
        try {
            const body = {stock: item.stock - item.quantity}

            const res = await fetch(`https://api-products-dessert-now-production.up.railway.app/api/update-stock/${item._id}`, 
            {
                method: 'PUT',
                body:JSON.stringify(body), 
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            const response = await res.text()
            console.log(response)

        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <Container sx={{display: 'flex', justifyContent:'center'}}>
        <Grid xs={12} sm={8} md={8} lg={6} item>
        {!confirm ?  
            <Form className='form' onSubmit={formik.handleSubmit}>
                <h1 className='order-title'>Orden de Pedido</h1>
                <Form.Field>
                <label>Nombre</label>
                <input 
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Nombre' />
                {formik.touched.name && formik.errors.name  ? (
                <div style={{color:'red'}}>{formik.errors.name}</div>
                ):null}
                </Form.Field>

                <Form.Field>
                <label type>Telefono</label>
                <input 
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Número' />
                {formik.touched.phone && formik.errors.phone  ? (
                <div style={{color:'red'}}>{formik.errors.phone}</div>
                ):null}
                </Form.Field>

                <Form.Field>
                <label>Email</label>
                <input 
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='juan@example.com' />
                {formik.touched.email && formik.errors.email  ? (
                <div style={{color:'red'}}>{formik.errors.email}</div>
                ):null}
                </Form.Field>
                <Button type='submit' secondary>Enviar Orden</Button>
            </Form> 
        : 
        <Message positive>
            <div className='text-center'>
                <Message.Header>Orden registrada con exito!</Message.Header>
                <p>
                    ¡Recibirá una notificación cuando esté lista!
                </p>
                <div>
                    <Icon size='large' name='truck'></Icon>
                </div>
                {goMain()}
            </div>
        </Message>}
        </Grid>
        </Container>        
    )
}

export default OrderConteiner
