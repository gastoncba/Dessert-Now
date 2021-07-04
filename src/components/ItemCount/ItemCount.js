import React, {useState} from 'react'
import { Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './ItemCount.css';


function ItemCount({stock, initial}) {

    const [init, setInit] = useState(initial);
    const [aviso, setAviso] = useState(''); 

    const agregar = () => {
        if(init !== stock) {
            setInit(init + 1);
        }

        setAviso('')
    }

    const quitar = () => {
        if(init !== initial) {
            setInit(init - 1);
        }

        setAviso('')
    }

    const onAdd = () => {
       setAviso('Se agrego a su carrito');
    }

    return (
        <div>
            <h4>Cantidad: {init}</h4>
            <h6>{aviso}</h6>
            <IconButton onClick={agregar} color="primary" aria-label="add to shopping cart">
            <AddIcon></AddIcon>
            </IconButton>
            <IconButton onClick={quitar} color="primary" aria-label="add to shopping cart">
            <RemoveIcon></RemoveIcon>
            </IconButton><br></br>
            <Button className="agregar-carrito" onClick={onAdd} variant="contained" color="secondary">
            Agregar al carrito 
            </Button>
        </div>
    )
}

export default ItemCount
