import React, {useContext, useState} from 'react'
import { CardContext } from '../../context/CardContext';
import './ItemDetail.css'
import ItemCount from '../../components/ItemCount/ItemCount'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid' 
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function ItemDetail({item}) {
    
    const {addItem, getStock} = useContext(CardContext); 
    const [aviso, setAviso] = useState('');
    const [terminar, setTerminar] = useState(false);
    const stock = getStock(item);

    function onAdd(quantityToAdd) {
        addItem(item, quantityToAdd); 
        setAviso('En tu carrito');
        setTerminar(true);
    }

    return (
        <Container style={{marginTop: '5rem', display: 'flex', justifyContent:'center'}}>
            <Grid xs={12} sm={8} md={8} lg={6} item>
                <Card>
                <Typography 
                    gutterBottom 
                    variant="h3" 
                    >
                    <div className="text-center title-detail">{item.name}</div>
                </Typography>
                <CardMedia
                    component="img"
                    height="194"
                    image={item.img}
                    alt={`img_${item.img}`}
                />
                <Container className='mb-4 mt-4'>
                    <Typography variant="body1" color="text.secondary">
                    {item.description}
                    </Typography><br/>

                    <Typography variant='body1'>
                    {`Precio: $${item.price} ARS`}
                    </Typography>

                    {
                        stock > 0 ? 
                        <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>: 
                        <h2 style={{color: 'purple'}}>Sin stock</h2>
                    } 
                    {
                        terminar && (
                            <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                                <Button style={{width: '165px', background: '#e91e63', color:'white'}} variant='contained'>
                                    Terminar compra
                                </Button>
                            </Link>
                        )
                    }
                </Container>
                </Card>
            </Grid>
        </Container>  
    )
}

export default ItemDetail
