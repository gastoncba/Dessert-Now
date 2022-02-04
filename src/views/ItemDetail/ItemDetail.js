import React, {useContext, useState} from 'react'
import { CardContext } from '../../context/CardContext';
import './ItemDetail.css'
import ItemCount from '../../components/ItemCount/ItemCount'


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid' 
import Container from '@mui/material/Container'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

// import {Button} from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { Item } from 'semantic-ui-react'

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
            <Grid xs={12} sm={8} md={8} lg={6}>
                <Card>
                <Typography 
                    gutterBottom 
                    variant="h4" 
                    >
                    <div className="text-center title-detail">{item.name}</div>
                </Typography>
                <CardMedia
                    component="img"
                    height="194"
                    image={item.img}
                    alt={`img_${item.img}`}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {item.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    
                    <IconButton>
                        <AddCircleRoundedIcon style={{color: '#e91e63', fontSize: '2.5rem'}}/>
                    </IconButton>

                    <IconButton>
                        <RemoveCircleRoundedIcon style={{color: '#e91e63', fontSize: '2.5rem'}}/>
                    </IconButton>

                </CardActions>
                </Card>
            </Grid>
        </Container>

        
//     <div className={'item-detail'}>
//         <Item.Group>
//         <Item>
//         <Item.Image size='large' src={item.img}/>
//         <Item.Content>
//             <Item.Header style={{
//                 fontFamily:'bebas Neue',
//                 fontSize: '190%',
//             }}>{item.name}</Item.Header>
//             <Item.Description>
//             <p><b>Descripcion: </b>{item.description}</p>
//             <p><b>{`Precio: $${item.price}`}</b></p>
//             </Item.Description>
//             {stock > 0 ?
//                     <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>: 
//                     <h2>Sin stock</h2>
//                 }
//                 {terminar && (
//                     <Link to={`/cart`} style={{ textDecoration: 'none' }}>
//                         <Button variant="contained" color="secondary">
//                         Terminar compra
//                         </Button>
//                     </Link>
//                 )}
//             <p>{aviso}</p>
//         </Item.Content>
//         </Item>
//   </Item.Group>
//     </div>      
    )
}

export default ItemDetail
