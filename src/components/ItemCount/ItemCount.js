import React, {useState} from 'react'
import {Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './ItemCount.css';


function ItemCount({stock, initial, onAdd, disponible}) {

    const [init, setInit] = useState(initial);

    const agregar = () => {
        if(init !== stock) {
            setInit(init + 1);
        }

    }

    const quitar = () => {
        if(init !== initial) {
            setInit(init - 1);
        }
    }

    return (
        <div>
            <h4>Cantidad: {init}</h4>
            <IconButton onClick={agregar} color="primary" aria-label="add to shopping cart">
            <AddIcon></AddIcon>
            </IconButton>
            <IconButton onClick={quitar} color="primary" aria-label="add to shopping cart">
            <RemoveIcon></RemoveIcon>
            </IconButton><br></br>
            <Button onClick={() => {onAdd(init)}} className="agregar-carrito" variant="contained" color="secondary" disabled={disponible}>
                Comprar
            </Button>
        </div>
    )
}

export default ItemCount
