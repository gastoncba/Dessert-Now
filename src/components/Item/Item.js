import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function Item({item}) {
    return (
        <Card sm={{ width: '345' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={`imagen_de_${item.name}`}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`Precio: $${item.price} ARS`}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" variant="contained">
                Ver mas
                </Button>
            </CardActions>
        </Card>
    )
}

export default Item
