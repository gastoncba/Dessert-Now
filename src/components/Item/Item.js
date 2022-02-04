import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, IconButton, InputLabel, Select, MenuItem,FormControl} from '@mui/material';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Item({item}) {
    return (
        <Card sm={{ width: '345' }}>
                <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={`imagen_de_${item.name}`}
                />
                <IconButton aria-label="add to shopping cart" 
                    style={{background:'#e91e63', color: 'white', position: 'relative', bottom: '15px', left: '10px'}}>  
                    <AddShoppingCartIcon />
                </IconButton>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`Precio: $${item.price} ARS`}
                </Typography>
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
