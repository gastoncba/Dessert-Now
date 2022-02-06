import React, {useContext, useState} from 'react'
import {CardContext} from '../../context/CardContext'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, IconButton, Chip} from '@mui/material';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Item({item}) {

    const {addItem, getStock} = useContext(CardContext);
    const [cant, setCant] = useState(1)

    const addInCart = () => {
        addItem(item, cant)
    }

    const add = () => {
        if(cant !== getStock(item)) setCant(cant + 1)
    }

    const rem = () => {
        if(cant > 1) setCant(cant - 1)
    }

    return (
        <Card sm={{ width: '345' }}>
                <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={`imagen_de_${item.name}`}
                />
                <IconButton 
                    disabled={!getStock(item)}
                    onClick={() => addInCart()}
                    aria-label="add to shopping cart" 
                    style={{background:'#e91e63', color: 'white', position: 'relative', bottom: '15px', left: '10px'}}>  
                    <AddShoppingCartIcon />
                </IconButton>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body1">
                    {`Precio: $${item.price} ARS`}
                </Typography>
                
                {
                    getStock(item) ? 
                    <div>
                        <IconButton className='pr-0 pl-0' onClick={add}>
                            <AddIcon style={{background: '#9ea9b1', color: 'white', borderRadius: '25%'}}></AddIcon>
                        </IconButton>
                        <IconButton onClick={rem}>
                            <RemoveIcon style={{background: '#9ea9b1', color: 'white', borderRadius: '25%'}}></RemoveIcon>
                        </IconButton>
                        <b>{cant}</b>
                    </div> : 
                    <Chip label="Sin stock" color='secondary' size='medium' className='mt-2' variant='outlined'></Chip>
                }
                
                </CardContent>
                <CardActions>
                    <Link to={`/item/${item._id}`} style={{ textDecoration: 'none' }}>
                        <Button size="small" variant="contained" style={{background:'#e91e63'}}>
                        Ver mas
                        </Button>
                    </Link>
                </CardActions>
        </Card>
    )
}

export default Item
